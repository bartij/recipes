import React from 'react';
import IngredientsInput from './IngredientsInput';
import SubmitIngredientsButton from './SubmitIngredientsButton';

export default class RecipeSearchForm extends React.Component {
    render () {
        return (
            <form>
                <IngredientsInput />
                <SubmitIngredientsButton />
            </form>
        );
    }
}