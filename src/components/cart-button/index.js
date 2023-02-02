import styled from "styled-components"

export const CartButton = (props) => {

    return(
        <Button type="button" onClick={props.openCart}> 
            {props.children}
        </Button>
    )
}

const Button = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    padding: 15px;
    top: -80px; 
    right: 40px;
    z-index: 1;
`