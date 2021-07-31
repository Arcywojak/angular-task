import { ChangeDetectionStrategy, Component, Input, Output, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManipulateRecipeFormType } from 'src/app/features/recipes-maintainer/enums/manipulate-recipe-form-type.enum';
import { Ingredient } from 'src/app/features/recipes-maintainer/models/ingredient.model';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';
import { RecipeService } from 'src/app/features/recipes-maintainer/services/recipe.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RefreshService } from 'src/app/features/recipes-maintainer/services/refresh.service';

@Component({
  selector: 'app-manipulate-recipe',
  templateUrl: './manipulate-recipe.component.html',
  styleUrls: ['./manipulate-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class ManipulateRecipeComponent implements OnChanges, OnInit {

  @Input() fillFormType: ManipulateRecipeFormType = ManipulateRecipeFormType.CREATE;
  @Input() recipe ?: Recipe;

  @Output() isRecipeFormTouchedEmitter = new EventEmitter<boolean>();
  touchedForm = false;

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

  constructor(private recipeService: RecipeService, 
    private snackBar: MatSnackBar,
    private refreshService: RefreshService) { }

  ngOnChanges() {
    if(this.fillFormType === ManipulateRecipeFormType.EDIT && this.recipe != null) {
      this.setValuesForRecipeForm(this.recipe);
    }
  }

  ngOnInit() {
    this.recipeForm.valueChanges.subscribe(form => {
        this.isRecipeFormTouchedEmitter.emit(this.recipeForm.dirty || this.ingredientsFormControl.value.length === 0);
    })
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
    if(formControl.pristine) {
      //we dont want to show error on untouched formControl 
      //it also prevent showing errors when the form is reset
      return "";
    }

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
      this.notEnoughIngredientsMessage = "At least 2 ingredients are required!";
      return;
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
      this.snackBar.open("Recipe has been created", "SUCCESS", {duration:2000});
      this.resetFormValues();
      this.refreshService.callForRefresh(true);
    }, err => {
      this.snackBar.open("Something went wrong!", "UPS", {duration:2000})
    })
  }

  updateRecipe(recipe: Recipe) {
    this.recipeService.update(recipe, this.recipe?._id || "").subscribe(res => {
      this.snackBar.open("Recipe has been updated", "SUCCESS", {duration:2000})
      this.refreshService.callForRefresh(true);
    }, err => {
      this.snackBar.open("Something went wrong!", "UPS", {duration:2000})
    })
  }

  resetFormValues() {
    this.recipeForm.reset();
    this.ingredientsFormControl.setValue([]);
  }

  loadNewIngredients($event: Ingredient[]) {
    this.ingredientsFormControl.setValue($event);
  }

}
