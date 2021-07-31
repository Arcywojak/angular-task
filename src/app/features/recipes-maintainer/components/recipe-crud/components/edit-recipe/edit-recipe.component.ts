import { ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';
import { RecipeService } from 'src/app/features/recipes-maintainer/services/recipe.service';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditRecipeComponent implements OnInit {

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    return !this.touchedForm;
  }

  recipe: Recipe | undefined;
  touchedForm = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private recipeSerivce: RecipeService,
  private changeDetectorRef: ChangeDetectorRef) {
    //Here we could something like its done in 'view'
    //But then would be a problem with switching between different editing
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

  setIsFormTouched(data: boolean) {
    this.touchedForm = data;
  }
}
