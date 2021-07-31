import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Recipe } from './models/recipe.model';
import { RecipeService } from './services/recipe.service';
import { RefreshService } from './services/refresh.service';

@Component({
  selector: 'app-recipes-maintainer',
  templateUrl: './recipes-maintainer.component.html',
  styleUrls: ['./recipes-maintainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesMaintainerComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService, 
    private changeDetectorRef: ChangeDetectorRef,
    private refreshService: RefreshService) { }

  ngOnInit(): void {
    this.refreshService.refreshPointer$.pipe(
      switchMap(res => {
        return this.recipeService.readAll();
      })
    ).subscribe(data => {
      this.recipes = data;
      this.filteredRecipes = data;
      this.changeDetectorRef.detectChanges();
    })
  }

  setFilteredData(data: Recipe[]) {
    this.filteredRecipes = data;
  }

}
