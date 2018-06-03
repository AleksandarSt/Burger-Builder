import React from 'react';

import Wraper from '../../hoc/Wraper'
import classes from './Layout.css'

const layout = (props) => (
    <Wraper>
        <div>Toolbar, SideDrawer, Backdrops
        <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    </Wraper>
);

export default layout;