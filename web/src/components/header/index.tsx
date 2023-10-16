'use client'

import { Pridi, Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ['400']
})

import { Container, Logo } from "./style";
import { PrimaryInputSearchIcon } from '../primary-input';
import { CartControl } from '../cart-control';
import { useFilter } from '@/hooks/useFilter';

interface HeaderProps {

}

export default function Header(props: HeaderProps) {
    const {setSearch, search} = useFilter()
    return (
        <>
            <Container>
                <Logo className={sairaStencil.className}>
                    Capputeeno
                </Logo>

                <div>
                    <PrimaryInputSearchIcon 
                        value={search}
                        handleChange={setSearch}
                        placeholder="Procurando por algo específico?" 
                    />
                    <CartControl />
                </div>

            </Container>
        </>
    )
}