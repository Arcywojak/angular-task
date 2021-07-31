import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesMaintainerComponent } from './features/recipes-maintainer/recipes-maintainer.component';

const routes: Routes = [
  {
    path: "", component: RecipesMaintainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
