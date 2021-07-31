import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() refreshMaintainer = new EventEmitter();

  constructor(private router: Router) { }

  navigateToCreate() {
    this.router.navigate(["/create"])
  }

  getRidOfDeletedElement(id: string) {

    this.recipeList = this.recipeList.filter(el => el._id !== id)
  }

}
