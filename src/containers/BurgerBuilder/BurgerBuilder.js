import React, { Component } from 'react';

import Wraper from '../../hoc/Wraper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
state = {
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0
    }
}

    render() {
        return (
            <Wraper>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Wraper>
        )
    }
}

export default BurgerBuilder;