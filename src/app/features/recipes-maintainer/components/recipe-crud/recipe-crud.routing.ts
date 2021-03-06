import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingChangesGuard } from 'src/app/guards/pending-changes.guard';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';
import { WaitRecipeComponent } from './components/wait-recipe/wait-recipe.component';

const routes: Routes = [
    {
        path:'', component: WaitRecipeComponent,
    },
    {
        path:'create', component: CreateRecipeComponent, canDeactivate: [PendingChangesGuard]
    },
    {
        path:'edit/:id', component: EditRecipeComponent, canDeactivate: [PendingChangesGuard]
    },
    {
        path:'view/:id', component: ViewRecipeComponent
    },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipeCrudRoutingModule { }
