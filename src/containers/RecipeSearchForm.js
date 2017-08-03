import React from 'react';
import { connect } from 'react-redux';

import IngredientsInput from './IngredientsInput';
import SubmitIngredientsButton from './SubmitIngredientsButton';
import { addRecipes } from '../redux/actions';


class RecipeSearchForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            ingredients: ''
        };
    }

    updateInputValue (ingredients) {
        this.setState({
            ingredients: ingredients
        });
    }

    getRecipes (ingredients) {
        fetch('http://www.recipepuppy.com/api/?q=onion&p=1', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors'
        })
            .then(data => {
                console.log('data', data);
            })
    }

    render () {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.getRecipes(this.state.ingredients);
                console.log('submit');
            }}>
                <IngredientsInput updateInputValue={this.updateInputValue.bind(this)} value={this.state.ingredients} />
                <SubmitIngredientsButton />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleClick (ingredients) {
        dispatch(addRecipes(ingredients))
    }
});

export default connect(null, mapDispatchToProps)(RecipeSearchForm)