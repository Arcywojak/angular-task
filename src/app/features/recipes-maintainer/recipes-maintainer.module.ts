import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCrudComponent } from './components/recipe-crud/recipe-crud.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeCrudComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipeListComponent,
    RecipeCrudComponent
  ]
})
export class RecipesMaintainerModule { }
