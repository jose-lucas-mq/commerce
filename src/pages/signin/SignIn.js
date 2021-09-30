import React from 'react'
import { Banner, Background, Logo, Title, Label, Form, Input } from './SignIn.style'

const SignIn = () => {
    return (
        <Background>
            <Banner>
                <Logo />
                
                <Title>
                    Faça seu cadastro agora! 
                </Title> 
            </Banner>

            <Form>
                <Label>
                    Seu primeiro nome
                    <Input placeholder="ex: Nathalia" />
                </Label>

                <Label>
                    Seu último nome
                    <Input placeholder="ex: Santos" />
                </Label>
            </Form>
        </Background>
    )
}


export { SignIn }