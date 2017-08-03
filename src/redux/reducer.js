import { types as actionTypes } from './actions';

let initialState = {
    recipes: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECIPES:
            console.log('adding recipes');
            return Object.assign({}, state, { recipes: action.payload.recipes });
        case actionTypes.SORT_RECIPES:
            console.log('sorting recipes');
            return Object.assign({}, state, { recipes: action.payload.recipes });
        default:
            return state;
    }
};

export default reducer;
