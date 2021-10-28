import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from './../cart'
import { Account } from './../account'

import { Logo, Nav, Options } from './NavBar.style'

const NavBar = () => {
    return (
        <Nav>
            <Link to="/">
                <Logo />
            </Link>
            <Options>
                <Cart />
                <Account />
            </Options>

        </Nav>
    )
}

export { NavBar }