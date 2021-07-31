import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class RecipeListItemComponent {

  @Input() recipe: Recipe | null = null;

  constructor(
    private router: Router ) { }

  navigateTo(event: MouseEvent, routeParam: string) {
    //by adding stop propagation we contain element from routing to view (If we want to route to edit)
    event.stopPropagation();
    this.router.navigate([`/${routeParam}`, this.recipe?._id], {state: {recipe: this.recipe}});
  }

}
