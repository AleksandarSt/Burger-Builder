import React from 'react';

import Wraper from '../../hoc/Wraper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Wraper>
        <Toolbar/>
        <main className={classes.Content}>
                {props.children}
            </main>
        
    </Wraper>
);

export default layout;