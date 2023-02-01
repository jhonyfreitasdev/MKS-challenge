import { Logo } from "../components/logo"
import { ShoppingCart } from "../components/shopping-cart"
import styled from "styled-components"

export const Header = ()=> {
    return(
        <HeaderDiv>
            <Logo/>
            <ShoppingCart/>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0F52BA;
    color: #ffffff;
    max-width: 1440px;
    padding: 30px 60px;
`