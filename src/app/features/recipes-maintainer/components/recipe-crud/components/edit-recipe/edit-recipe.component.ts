import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditRecipeComponent implements OnInit {

  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.recipe = this.router.getCurrentNavigation()?.extras?.state?.recipe;
  }

  ngOnInit(): void {
  }

}
