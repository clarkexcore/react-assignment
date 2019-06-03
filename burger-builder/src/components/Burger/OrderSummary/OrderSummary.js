import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitolize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with the following items:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummary;