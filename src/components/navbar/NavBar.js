import React from 'react'
import { Link } from 'react-router-dom'
import { Cart } from './../cart'

import { Logo, Nav } from './NavBar.style'

const NavBar = () => {
    return (
        <Nav>
            <Link to="/">
                <Logo />
            </Link>
            <Cart />

        </Nav>
    )
}

export { NavBar }