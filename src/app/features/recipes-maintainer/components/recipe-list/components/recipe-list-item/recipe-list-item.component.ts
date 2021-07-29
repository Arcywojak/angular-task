import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/features/recipes-maintainer/models/recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe: Recipe | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
