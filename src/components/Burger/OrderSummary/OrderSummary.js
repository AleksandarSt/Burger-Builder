import React, { Component } from 'react';

import Wraper from '../../../hoc/Wraper';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
//This can be functional component
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingredientKey => {
                return (
                    <li key={ingredientKey}>
                        <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
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
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType='Danger'
                    clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button
                    btnType='Success'
                    clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Wraper >
        )
    }
}

export default OrderSummary;