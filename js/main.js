'use strict';
/////////////////////////////////////////

import {
    recipes
} from './data/recipesData.js';
import Recipes from './Recipes.js';
import SearchBox from './SearchBox.js';
import Ingredients from './filters/Ingredients.js';

(function builder() {
    let data = recipes;
    new Recipes().displayRecipes(data);
    new SearchBox().search(data);
    new Ingredients().init(data);
}) ();