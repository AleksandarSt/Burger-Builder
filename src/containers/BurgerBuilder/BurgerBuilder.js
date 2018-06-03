import React, { Component } from 'react';

import Wraper from '../../hoc/Wraper';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
state = {
    ingredients:{
        salad:1,
        bacon:1,
        cheese:1
    }
}

    render() {
        return (
            <Wraper>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Wraper>
        )
    }
}

export default BurgerBuilder;