import React from 'react';


export default class SubmitIngredientsButton extends React.Component {
    render() {
        return (
            <button type="submit"

            >Search for recipe
            </button>
        )
    }
};

// onClick={(event) => {
//     event.preventDefault();
//     this.props.handleClick({
//         ingredients: this.ingredients.value,
//     });
//     this.ingredients.value = '';
// }}