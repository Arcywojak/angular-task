import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {
      _id:"123",
      name: "recipe1",
      description: "description of recipe2",
      preparationTimeInMinutes: 25,
      ingredients: [{_id:"1",name:"ogred1", quantity:"15"},{_id:"2",name:"ogred1", quantity:"15"},{_id:"3",name:"ogred1", quantity:"15"}]
    },
    {
      _id:"123",
      name: "recipe1",
      description: "description of recipe2",
      preparationTimeInMinutes: 25,
      ingredients: [{_id:"1",name:"ogred1", quantity:"15"},{_id:"2",name:"ogred1", quantity:"15"},{_id:"3",name:"ogred1", quantity:"15"}]
    },
    {
      _id:"123",
      name: "recipe1",
      description: "description of recipe2",
      preparationTimeInMinutes: 25,
      ingredients: [{_id:"1",name:"ogred1", quantity:"15"},{_id:"2",name:"ogred1", quantity:"15"},{_id:"3",name:"ogred1", quantity:"15"}]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
