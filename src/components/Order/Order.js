import React from 'react';

import classes from './Order.css'

const order=(props)=>(
        <div className={classes.Order}>
            <p>INgredients: Salad (1)</p>
            <p>Price: USD 6.90</p>
        </div>
)

export default order;