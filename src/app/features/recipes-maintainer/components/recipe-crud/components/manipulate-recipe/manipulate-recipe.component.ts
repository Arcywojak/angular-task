import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManipulateRecipeFormType } from 'src/app/features/recipes-maintainer/enums/manipulate-recipe-form-type.enum';
import { Ingredient } from 'src/app/features/recipes-maintainer/models/ingredient.model';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../../../confirm-action-dialog/confirm-action-dialog.component';
import { switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { RecipeService } from 'src/app/features/recipes-maintainer/services/recipe.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manipulate-recipe',
  templateUrl: './manipulate-recipe.component.html',
  styleUrls: ['./manipulate-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class ManipulateRecipeComponent implements OnChanges {

  @Input() fillFormType: ManipulateRecipeFormType = ManipulateRecipeFormType.CREATE;
  @Input() recipe ?: Recipe;

  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]);
  preparationInMinutesFormControl = new FormControl(10, [Validators.required, Validators.min(1)]);
  descriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]);
  ingredientsFormControl = new FormControl([]);
  notEnoughIngredientsMessage = '';

  recipeForm = new FormGroup({
    name: this.nameFormControl,
    preparationInMinutes: this.preparationInMinutesFormControl,
    description: this.descriptionFormControl,
    ingredients: this.ingredientsFormControl
  })

  constructor(private dialog: MatDialog, 
    private recipeService: RecipeService, 
    private snackBar: MatSnackBar) { }

  ngOnChanges() {
    if(this.fillFormType === ManipulateRecipeFormType.EDIT && this.recipe != null) {
      this.setValuesForRecipeForm(this.recipe);
    }
  }

  private setValuesForRecipeForm(recipe: Recipe) {
    this.nameFormControl.setValue(recipe.name);
    this.preparationInMinutesFormControl.setValue(recipe.preparationTimeInMinutes);
    this.descriptionFormControl.setValue(recipe.description);
    this.ingredientsFormControl.setValue(recipe.ingredients);
  }

  hasError(formControl: FormControl): boolean {
    return formControl.invalid;
  }

  getFormControlError(formControl: FormControl): string {
    if(formControl.hasError('required')) {
      return "The field is required";
    }
    if(formControl.hasError('min')) {
      return `The number must not be smaller than ${formControl.errors?.min?.min}`;
    }
    if(formControl.hasError('minlength')) {
      return `There must be at least ${formControl.errors?.minlength?.requiredLength} characters`;
    }
    if(formControl.hasError('maxlength')) {
      return `There must be no more than ${formControl.errors?.maxlength?.requiredLength} characters`;
    }

    return "";
  }

  onSubmit() {
    if(this.ingredientsFormControl.value.length < 2) {
      this.notEnoughIngredientsMessage = "At least 2 ingredients are required!"
    }

    const recipe = {
      name: this.nameFormControl.value,
      preparationTimeInMinutes: Number(this.preparationInMinutesFormControl.value),
      description: this.descriptionFormControl.value,
      ingredients: this.ingredientsFormControl.value
    } as Recipe

    if(this.fillFormType === ManipulateRecipeFormType.CREATE) {
      this.createRecipe(recipe);
      return;
    }

    this.updateRecipe(recipe);
  }

  createRecipe(recipe: Recipe) {

    this.recipeService.create(recipe).subscribe(res => { 
      this.snackBar.open("Recipe has been created", "SUCCESS", {duration:2000})
    }, err => {
      this.snackBar.open("Something went wrong!", "UPS", {duration:2000})
    })
  }

  updateRecipe(recipe: Recipe) {
    this.recipeService.update(recipe).subscribe(res => {
      this.snackBar.open("Recipe has been updated", "SUCCESS", {duration:2000})
    }, err => {
      this.snackBar.open("Something went wrong!", "UPS", {duration:2000})
    })
  }

  loadNewIngredients($event: Ingredient[]) {
    this.ingredientsFormControl.setValue($event);
  }

  openDeleteDialog() {
    const message = `Are you sure to delete recipe named ${this.recipe?.name}?`

    const dialogRef = this.dialog.open(ConfirmActionDialogComponent, {
      data: {
        message
      },
      autoFocus: false
    })
    
    dialogRef.afterClosed().pipe(
      switchMap(shouldActionBeExecuted => {
        if(shouldActionBeExecuted) {
          return this.recipeService.delete(this.recipe?._id || "");
        }

        return EMPTY;
      })
    ).subscribe(res => {
      this.snackBar.open("Recipe deleted", "SUCCESS", {duration: 2000})
    }, err => {
      this.snackBar.open("Something went wrong!", "UPS", {duration: 2000})
    })

  }

}
