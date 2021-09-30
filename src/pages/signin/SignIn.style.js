import styled from 'styled-components'



export const Background = styled.div`
    background-color: #89A463;
    width: 100%;
    height: 100vh;
`

export const Banner = styled.div`
    height: 15em;
    width: 100%;
    
    border-radius: 0px 0px 20px 20px;
    background-position: center center;
    background-size: cover;

    padding-top: 50px;
    display: flex;
    flex-direction: column;
`

export const Logo = styled.div`
    margin: 0 auto;
    width: 30%;
    height: 50px;
    background-position: center center;
    background-size: cover;
`

export const Title = styled.h1`
    font-weight: bold;
    font-size: 1.4em;

    margin: 0 auto;
    padding-top: 64px;

    color: #FFFFFF;
`
export const Form = styled.form`
    display: flex;
    padding: 32px;
    color: #FFFFFF;
`

export const Label = styled.label`
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 16px;
`

export const Input = styled.input`
    padding: 16px 0 4px 0;
    color: #FFFFFF;
    border-bottom: 4px solid #FFFFFF;
    outline: none;
    transition: .2s;

    &:focus{
        border-bottom: 4px solid #546444;
    }
`