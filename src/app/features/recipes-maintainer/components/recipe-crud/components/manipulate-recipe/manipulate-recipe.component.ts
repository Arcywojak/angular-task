import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManipulateRecipeFormType } from 'src/app/features/recipes-maintainer/enums/manipulate-recipe-form-type.enum';
import { Ingredient } from 'src/app/features/recipes-maintainer/models/ingredient.model';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmActionDialogComponent } from '../../../confirm-action-dialog/confirm-action-dialog.component';
import { switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-manipulate-recipe',
  templateUrl: './manipulate-recipe.component.html',
  styleUrls: ['./manipulate-recipe.component.scss']
})


export class ManipulateRecipeComponent implements OnChanges {

  @Input() fillFormType: ManipulateRecipeFormType = ManipulateRecipeFormType.CREATE;
  @Input() recipe ?: Recipe;

  nameFormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]);
  preparationInMinutesFormControl = new FormControl(10, [Validators.required, Validators.min(1)]);
  descriptionFormControl = new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]);
  ingredientNameFormControl = new FormControl('', Validators.required);
  ingredientQuantityFormControl = new FormControl('', Validators.required);
  ingredientsFormControl = new FormControl([]);

  recipeForm = new FormGroup({
    name: this.nameFormControl,
    preparationInMinutes: this.preparationInMinutesFormControl,
    description: this.descriptionFormControl,
    ingredients: this.ingredientNameFormControl
  })

  ingredientForm = new FormGroup({
    name: this.ingredientNameFormControl,
    quantity: this.ingredientQuantityFormControl
  })

  constructor(private dialog: MatDialog) { }

  ngOnChanges() {
    console.log(this.recipe )
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

  getError(formControl: FormControl): string {
    if(formControl.hasError('required')) {
      return "The field is required";
    }
    if(formControl.hasError('min')) {
      return `The number must not be smaller than ${formControl.errors?.min?.min}`;
    }

    return "";
  }

  addIngredient() {
    const ingredient = {
      name: this.ingredientNameFormControl.value,
      quantity: this.ingredientQuantityFormControl.value
    } as Ingredient

    const newIngredients = [...this.ingredientsFormControl.value, ingredient];

    console.log(newIngredients)

    this.ingredientsFormControl.setValue(newIngredients);
    this.ingredientForm.reset();
  }

  removeIngredient(ingredient: Ingredient) { 
    const filteredIngredients = this.ingredientsFormControl.value.filter((elem: Ingredient) => elem.name !== ingredient.name);
    this.ingredientsFormControl.setValue(filteredIngredients);
  }

  onSubmit() {

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
      //  if(shouldActionBeExecuted) {
      //    return this.recipeService.delete(this.recipe?._id || "");
      //  }

        return EMPTY;
      })
    ).subscribe()

  }

}
