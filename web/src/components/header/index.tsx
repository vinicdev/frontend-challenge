'use client'

import { Pridi, Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ['400']
})

import { Container, Logo } from "./style";
import { PrimaryInputSearchIcon } from '../primary-input';
import { CartControl } from '../cart-control';

interface HeaderProps {

}

export default function Header(props: HeaderProps) {
    return (
        <>
            <Container>
                <Logo className={sairaStencil.className}>
                    Capputeeno
                </Logo>

                <div>
                    <PrimaryInputSearchIcon placeholder="Procurando por algo específico?" />
                    <CartControl />
                </div>

            </Container>
        </>
    )
}