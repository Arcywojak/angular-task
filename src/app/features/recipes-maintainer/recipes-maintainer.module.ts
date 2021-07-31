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
import { ConfirmActionDialogComponent } from './components/confirm-action-dialog/confirm-action-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ManipulateRecipeComponent } from './components/recipe-crud/components/manipulate-recipe/manipulate-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { IngredientFormComponent } from './components/recipe-crud/components/manipulate-recipe/components/ingredient-form/ingredient-form.component';
import { TimeFromMinutesPipe } from './pipes/time-from-minutes.pipe';
import { FilterDataFormComponent } from './components/filter-data-form/filter-data-form.component';
import { DeleteRecipeButtonComponent } from './components/shared/delete-recipe-button/delete-recipe-button.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeCrudComponent,
    RecipeListItemComponent,
    CreateRecipeComponent,
    EditRecipeComponent,
    ViewRecipeComponent,
    WaitRecipeComponent,
    ConfirmActionDialogComponent,
    ManipulateRecipeComponent,
    IngredientFormComponent,
    TimeFromMinutesPipe,
    FilterDataFormComponent,
    DeleteRecipeButtonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RecipeCrudRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  exports: [
    RecipeListComponent,
    RecipeCrudComponent,
    FilterDataFormComponent
  ]
})
export class RecipesMaintainerModule { }
