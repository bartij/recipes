import React from 'react';
import PropTypes from 'prop-types';

export default class IngredientsInput extends React.Component {
    handleInputChange (event) {
        const ingredients = event.target.value;
        this.props.updateInputValue(ingredients);
    };

    render () {
        return (
            <input name="ingredients"
                   type="text"
                   placeholder="Ingredients"
                   value={this.props.value}
                   onChange={this.handleInputChange.bind(this)}
                   required
            />
        );
    }
}

IngredientsInput.propTypes = {
    value: PropTypes.string.isRequired,
    updateInputValue: PropTypes.func
};