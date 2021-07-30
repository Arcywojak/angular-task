import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredient } from '../../models/ingredient.model';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent implements OnChanges {

  @Input() recipeList: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnChanges(data: any): void {
    console.log(data)
  }

  navigateToCreate() {
    this.router.navigate(["/create"])
  }

}
