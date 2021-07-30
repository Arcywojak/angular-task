import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewRecipeComponent implements OnInit {

  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.recipe = this.router.getCurrentNavigation()?.extras?.state?.recipe;
  }

  ngOnInit(): void {
  }

}
