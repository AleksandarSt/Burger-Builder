import React from 'react';

import Wraper from '../../../hoc/Wraper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ingredientKey}>
                    <span style={{ textTransform:'capitalize' }}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
                </li>
            )
        }
        )

    return (
        < Wraper >
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingridients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button 
            btnType='Danger' 
            clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button 
            btnType='Success'
            clicked={props.purchaseContinued}>CONTINUE</Button>
        </Wraper >
    )
}

export default orderSummary;