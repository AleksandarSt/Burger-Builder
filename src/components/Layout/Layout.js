import React, { Component } from 'react';

import Wraper from '../../hoc/Wraper';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer:false
    }

    sideDrawerClosedHandler=()=>{
        this.setState({
            showSideDrawer:false
        })
    }

    render() {
        return (
            <Wraper>
                <Toolbar />
                <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Wraper>
        )
    }
}

export default Layout;