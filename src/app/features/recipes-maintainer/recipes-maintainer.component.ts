import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes-maintainer',
  templateUrl: './recipes-maintainer.component.html',
  styleUrls: ['./recipes-maintainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesMaintainerComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    this.recipeService.readAll().subscribe(data => {
      this.recipes = data;
      this.filteredRecipes = data;
      this.changeDetectorRef.detectChanges();
    });
  }

  setFilteredData(data: Recipe[]) {
    this.filteredRecipes = data;
  }

}
