import React from 'react';

export default class IngredientsInput extends React.Component {
    render () {
        return (
            <input name="ingredients"
                   type="text"
                   placeholder="Ingredients"
                   required
            />
        );
    }
}

// ref={node => { this.ingredientsInput = node; }}
