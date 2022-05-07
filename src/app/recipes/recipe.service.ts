import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1',
            'This is simply a test 1',
            'https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800',
            [
                new Ingredient('Meat', 10),
                new Ingredient('French Fries', 20),
                new Ingredient('Tomato', 10),
            ]
        ),
        new Recipe(
            'A Test Recipe 2',
            'This is simply a test 2',
            'https://skp.vn/wp-content/uploads/2021/03/mot-so-mon-an-noi-tieng-va-duoc-ua-chuong-nhat-tai-thanh-pho-atlanta-pizza-inn-266285.jpg',
            [
                new Ingredient('Buns', 5),
                new Ingredient('Meat', 10),
                new Ingredient('Tomato', 20),
            ]
        ),
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        // return this.recipes.slice(); //Return coppy array instead of real array
        return this.recipes;
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
    }

    addIngredientsShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index);
    }
}
