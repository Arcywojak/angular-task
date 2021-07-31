import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent {

  @Input() recipeList: Recipe[] = [];

  constructor(private router: Router) { }

  navigateToCreate() {
    this.router.navigate(["/create"])
  }

}
