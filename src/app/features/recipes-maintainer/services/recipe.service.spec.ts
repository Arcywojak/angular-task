import { TestBed } from "@angular/core/testing";
import { RecipeService } from "./recipe.service";
import {HttpClientModule} from '@angular/common/http';
import { Observable } from "rxjs";
import { Recipe } from "../models/recipe.model";
import { Ingredient } from "../models/ingredient.model";

describe('DataService', () => {
    let recipeService: RecipeService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [RecipeService]
        });
        recipeService = TestBed.inject(RecipeService);
    });

    recipeService = TestBed.inject(RecipeService);

    it('should return Observable', () => {
        expect(recipeService.readAll()).toBeInstanceOf(Observable);
    })

    it('should return array from subscribe', () => {
        recipeService.readAll().subscribe(res => {
            expect(res).toBeInstanceOf(Array)
        })
    })

    it('should return Object after create', () => {
        const newRecipe = {
            name:"...",
            description: "...",
            ingredients: [] as Ingredient[],
            preparationTimeInMinutes: 0
        } as Recipe

        recipeService.create(newRecipe).subscribe(res => {
            expect(res).toBeInstanceOf(Object)
        })
    })
})

