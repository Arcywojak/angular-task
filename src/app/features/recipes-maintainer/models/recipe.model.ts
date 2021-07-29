import { Ingredient } from "./ingredient.model";

export interface Recipe {
    _id: string,
    name: string,
    preparationTimeInMinutes: number,
    description: string,
    ingredients: Ingredient[]
}