import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {useLocation} from 'react-router-dom'

const NavBar = () => {
    const {pathname} = useLocation()
    return (
        <Menu>
            <Link to='/'>
                <Menu.Item active={pathname=== '/'}>
                    Home
                </Menu.Item>
            </Link>
            <Link to='/about'>
                <Menu.Item active={pathname=== '/about'}>
                    about
              </Menu.Item>
            </Link>
            <Link to={{pathname:'/passdata/1', thingToPass:'Hello'}}>
                <Menu.Item>
                    pass data demo
              </Menu.Item>
            </Link>

        </Menu>
    )
}

export default NavBar