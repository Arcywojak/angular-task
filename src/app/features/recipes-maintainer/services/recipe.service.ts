import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import RECIPE_API_URL from "../constants/recipe-api.constants";
import { Recipe } from "../models/recipe.model";
import { BaseCrudService } from "../../../services/base-crud.service";

@Injectable({
    providedIn: 'root',
})

export class RecipeService extends BaseCrudService<Recipe> {

    constructor(protected http: HttpClient) {
        super(RECIPE_API_URL, http);
    }
}