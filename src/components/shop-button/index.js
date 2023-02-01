import styled from "styled-components"

export const ShopButton = (props) => {
    return <Button type="button" onClick={props.getItem}> Comprar </Button>
}

const Button = styled.button`
    position: absolute;
    bottom: 0;
    background-color: #0F52BA;
    color: #ffffff; 
    font-size: 14px;
    font-weight: 600;
    text-transform: Uppercase;
    width: 220px;
    transform: translateX(-10px);
    padding: 6px;
    border-radius: 0px 0px 10px 10px;
    border: none;
`