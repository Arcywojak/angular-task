import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCrudComponent } from './components/recipe-crud/recipe-crud.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RecipeListItemComponent } from './components/recipe-list/components/recipe-list-item/recipe-list-item.component';
import { CreateRecipeComponent } from './components/recipe-crud/components/create-recipe/create-recipe.component';
import { EditRecipeComponent } from './components/recipe-crud/components/edit-recipe/edit-recipe.component';
import { ViewRecipeComponent } from './components/recipe-crud/components/view-recipe/view-recipe.component';
import { WaitRecipeComponent } from './components/recipe-crud/components/wait-recipe/wait-recipe.component';
import { RecipeCrudRoutingModule } from './components/recipe-crud/recipe-crud.routing';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeCrudComponent,
    RecipeListItemComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    ViewRecipeComponent,
    WaitRecipeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RecipeCrudRoutingModule
  ],
  exports: [
    RecipeListComponent,
    RecipeCrudComponent
  ]
})
export class RecipesMaintainerModule { }
