import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';
import { RecipeService } from 'src/app/features/recipes-maintainer/services/recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRecipeComponent {

  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private recipeSerivce: RecipeService,
    private changeDetectorRef: ChangeDetectorRef) { }



  routeToEdit() {
    this.router.navigate(["/edit", this.recipe?._id || ""])
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => {
        const {id} = params;
      return this.recipeSerivce.readOne(id);
      })
    ).subscribe(res => {
      this.recipe = res;
      this.changeDetectorRef.detectChanges();
    }, err => {
      //we didnt find the recipe, so the most probably it doesnt exist
      this.router.navigate(["/"])
    })
  }

}
