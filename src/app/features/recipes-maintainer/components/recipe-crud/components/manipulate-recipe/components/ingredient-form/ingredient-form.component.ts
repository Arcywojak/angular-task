import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/features/recipes-maintainer/models/ingredient.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientFormComponent implements OnInit {

  arrayOfIngredients: Ingredient[] = [];

  @Input() set ingredients(ingredients: Ingredient[]) {
    if(ingredients) {
      this.arrayOfIngredients = ingredients;
    }
  }

  @Output() updatedIngredients = new EventEmitter<Ingredient[]>();

  ingredientNameFormControl = new FormControl('', Validators.required);
  ingredientQuantityFormControl = new FormControl('', Validators.required);

  ingredientForm = new FormGroup({
    name: this.ingredientNameFormControl,
    quantity: this.ingredientQuantityFormControl
  })

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    const ingredient = {
      name: this.ingredientNameFormControl.value,
      quantity: this.ingredientQuantityFormControl.value
    } as Ingredient

    this.arrayOfIngredients.push(ingredient);

    this.emitIngredients();
    this.ingredientForm.reset();
  }

  removeIngredient(ingredient: Ingredient) { 
    this.arrayOfIngredients = this.arrayOfIngredients.filter((elem: Ingredient) => elem.name !== ingredient.name);

    this.emitIngredients();
  }

  emitIngredients() {
    this.updatedIngredients.emit(this.arrayOfIngredients); 
  }

}
