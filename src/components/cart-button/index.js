export const CartButton = (props) => {

    return(
        <button type="button" onClick={props.openCart}> 
            <img src="./images/cart.png" alt="Carrinho de compras"/>
            <p> 0 </p>
        </button>
    )
}