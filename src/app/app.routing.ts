import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesMaintainerComponent } from './features/recipes-maintainer/recipes-maintainer.component';
import { PendingChangesGuard } from './guards/pending-changes.guard';

const routes: Routes = [
  {
    path: "", component: RecipesMaintainerComponent, canDeactivate: [PendingChangesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
