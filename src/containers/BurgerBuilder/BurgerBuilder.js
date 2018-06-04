import React, { Component } from 'react';

import Wraper from '../../hoc/Wraper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component {
state = {
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:4
}

addIngredientHandler = (type)=>{
    const oldCount=this.state.ingredients[type];
    const updatedCount=oldCount+1;
    const updatedIngredients={...this.state.ingredients};
    updatedIngredients[type]=updatedCount
    const priceAddition=INGRIDIENT_PRICES[type];
    const oldPrice=this.state.ingredients[type];
    const newPrice = oldPrice+priceAddition;

    this.setState({ingredients:updatedIngredients,
        totalPrice:newPrice});
}

removeIngredientHandler = (type) =>{

}

    render() {
        return (
            <Wraper>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}/>
            </Wraper>
        )
    }
}

export default BurgerBuilder;