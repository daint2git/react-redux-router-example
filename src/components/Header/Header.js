import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionList from 'material-ui/svg-icons/action/list';

import menus from 'TestDataPath/menus';

const MenuLink = ({label, to, exact}) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({match}) => {
                let active = match ? {backgroundColor:'#FF5722'} : {backgroundColor: '#4DD0E1'};
                return (
                    <div>
                        <Link to={to} style={{textDecoration: "none"}}>
                            <MenuItem style={active}>{label}</MenuItem>
                        </Link>
                    </div>
                )
            }}
        />
    )
};

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    
    handleToggle = () => this.setState({open: !this.state.open});

    render () {
        return (
            <div>
                <AppBar
                    title="React redux router"
                    iconElementLeft={<IconButton onClick={this.handleToggle}><ActionList></ActionList></IconButton>}
                />
                <Drawer open={this.state.open} openSecondary={true}>
                    <Menu>
                        {this.showMenus(menus)}
                    </Menu>
                </Drawer>            
            </div>
        );
    }

    showMenus = (menus) => {

        let result = null;

        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.label}
                        to={menu.to}
                        exact={menu.exact}
                    />
                )
            });
        }

        return result;
    }
}

export default Header;