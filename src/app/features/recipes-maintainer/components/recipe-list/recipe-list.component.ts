import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent implements OnInit {

 // recipes: Observable<Recipe[]>;

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

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    //this.recipeService.readAll().subscribe(data => console.log(data))
  }

  navigateToCreate() {
    this.router.navigate(["/create"])
  }

}
