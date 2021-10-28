import styled from 'styled-components'

import logo from './../../images/main-logo.png'

export const Nav = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 16px 32px;
`

export const Logo = styled.div`
    width: 120px;
    height: 40px;

    background-image: url(${logo});
    background-size: cover;
    background-position: center center;
`

export const Options = styled.div`
    display: flex;
    align-items: center;
`