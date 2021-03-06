import React from 'react';
import Aux from '../../../hoc/a';

const orderSummary = (props) => {

    const ingredientSummary= Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return (
        <Aux>

            <h3>Your Order</h3>
            <p>A burger with the following ingredients</p>

            <ul>
                {ingredientSummary}

            </ul>
            <p>Continue to order ?</p>
        </Aux>

    );

};

export default orderSummary;