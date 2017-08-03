export const types = {
    ADD_RECIPES: 'ADD_RECIPES',
    SORT_RECIPES: 'SORT_RECIPES'
};

export const addRecipes = (recipes) => ({ type: types.ADD_RECIPES, recipes });
export const sortRecipes = (recipes) => ({ type: types.SORT_RECIPES, recipes });
