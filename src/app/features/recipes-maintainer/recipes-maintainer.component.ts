import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes-maintainer',
  templateUrl: './recipes-maintainer.component.html',
  styleUrls: ['./recipes-maintainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesMaintainerComponent implements OnInit {
  //recipes: Recipe[] = [];
  $recipes: Observable<Recipe[]> = new Observable();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.$recipes = this.recipeService.readAll();
  }

}
