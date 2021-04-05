import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = (props) => {
    let history = useHistory();
    let {pathname} = useLocation();
    const { user, handleLogout } = useContext(AuthContext);

    const rightNavItems = () => {
        if (user) {
            return(
                <Menu.Menu position="right">
                    <Menu.Item name="logout" onClick={() => handleLogout(history)} />
                </Menu.Menu>
            );
        } else {
            return(
                <Menu.Menu position="right">
                    <Link to="/login">
                        <Menu.Item id="login" name="login" active={pathname === "/login"} />
                    </Link>
                    <Link to="/register">
                        <Menu.Item 
                        id="register"
                        name="register"
                        active={pathname === "/register"}
                    />
                    </Link>
                </Menu.Menu>
            );
        }
    };

    return (
        <div>
            <Menu pointing secondary>
                <Link to='/'>
                    <Menu.Item name="home" id="home" active={pathname=== '/'} />
                </Link>
                
                <Link to='/about'>
                    <Menu.Item active={pathname=== '/about'}>
                        about
                </Menu.Item>
                </Link>
                <Link to='/ThingX'>
                    <Menu.Item active={pathname=== '/ThingX'}>
                        ThingX.js
                </Menu.Item>
                </Link>
                <Link to='/StuffXX'>
                    <Menu.Item active={pathname=== '/StuffXX'}>
                        StuffXX.js
                </Menu.Item>
                </Link>
                {/* <Link to={{pathname:'/passdata/1', thingToPass:'Hello'}}>
                    <Menu.Item>
                        pass data demo
                </Menu.Item>
                </Link> */}
                {rightNavItems()}
            </Menu>
        </div>
    );
};

export default NavBar;