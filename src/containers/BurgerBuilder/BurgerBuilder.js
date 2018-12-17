import React, { Component } from 'react';
import { connect } from 'react-redux';

import Wraper from '../../hoc/Wraper/Wraper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-orders';

class BurgerBuilder extends Component {
    state = {
        purchasing: false
    }

    componentDidMount() {
        this.props.onInitIngredients();
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout')
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(ingridientKey => {
                return ingredients[ingridientKey]
            })
            .reduce(
                (sum, el) => {
                    return sum + el;
                }
                , 0)
        return sum > 0;
    }

    render() {

        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burger = this.props.error ?
            <p>Ingredients can't be loaded</p>
            : <Spinner />
        let orderSummary = null;

        if (this.props.ings) {
            burger = <Wraper>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={this.updatePurchaseState(this.props.ings)}
                    ordered={this.purchaseHandler}
                    price={this.props.price} />
            </Wraper>

            orderSummary = <OrderSummary
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.props.ings}
                price={this.props.price.toFixed(2)} />
        }

        return (
            <Wraper>
                <Modal show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Wraper>
        )
    }
}

const mapStateToPorps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(burgerBuilderActions.addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => dispatch(burgerBuilderActions.removeIngredient(ingredientName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));