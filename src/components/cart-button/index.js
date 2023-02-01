import styled from "styled-components"

export const CartButton = (props) => {

    return(
        <Button type="button" onClick={props.openCart}> 
            <img src="./images/cart.png" alt="Carrinho de compras"/>
            <P> 0 </P>
        </Button>
    )
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    padding: 15px;
`
const P = styled.p`
    margin-left: 10px 
`