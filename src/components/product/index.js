import { useEffect, useState } from "react"
import { getProducts } from "../../services/api-products"
import { ShopButton } from "../shop-button"
import { SectionCart } from "../section-cart"
import styled from "styled-components"

export const Product = () => {
    const [itemsList, setItemsList] = useState({
        items: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts()

            setItemsList({
                items: products
            })
        }
        fetchData()
    })

    const [shoppingList, setShoppingList] = useState([])

    const addProductInCart = product => {
        let copyShoppingList = [...shoppingList]
        
        copyShoppingList = [...shoppingList, { product, quantity: 1 }]
        setShoppingList(copyShoppingList)
    }

    const addQuantity = (itemParams) => {
        let copyShoppingList = [...shoppingList]

        copyShoppingList.forEach((item) => {
            if (item.product.id === itemParams.product.id) {
                item.quantity += 1
                // const totalItemPrice = item.product.price * item.quantity 
                setShoppingList(copyShoppingList)
            }
        })
    }

    const removeQuantity = itemParams => {
        let copyShoppingList = [...shoppingList]

        copyShoppingList.forEach(item => {
            if (item.product.id === itemParams.product.id) {
                item.quantity -= 1

                if (item.quantity === 0){
                    removeCartProduct()
                }else{
                    setShoppingList(copyShoppingList)
                }
            }
        })
    }

    const removeCartProduct = (item) =>{
        let copyShoppingList = [...shoppingList]
        copyShoppingList.splice(copyShoppingList.indexOf(item), 1)
        setShoppingList(copyShoppingList)
    }

    const totalCart = shoppingList.reduce((total, current) => {
        return total + (current.product.price * current.quantity)
    }, 0)

    return (
        <>
            <ul>
                {
                    itemsList.items.map((item, index) => {
                        return (
                            <Li key={index}>
                                <img src={item.photo} alt={item.name} />
                                <DivTitle>
                                    <H2>{item.name}</H2>
                                    <P>R$ {item.price}</P>
                                </DivTitle>
                                <p>{item.description}</p>
                                <ShopButton getItem={() => addProductInCart(item)} />
                            </Li>
                        )
                    })
                }
            </ul>

            <SectionCart>
                <h2> Carrinho de compras </h2>
                <button type="button" /*onClick={props.closeCart}*/> X </button>

                <ul>
                    {
                        shoppingList.map((item, index) => {
                            const newPrice = item.product.price * item.quantity

                            return (
                                <LiShopping key={index}>
                                    <DivImg>
                                        <img src={item.product.photo} alt={item.product.name} />
                                    </DivImg>
                                    <h2>{item.product.name}</h2>
                                    <DivButton>
                                        <MinusButton type="button" onClick={() => removeQuantity(item)}> - </MinusButton>
                                        <p>{item.quantity}</p>
                                        <PlusButton type="button" onClick={() => addQuantity(item)}> + </PlusButton>
                                    </DivButton>
                                    <p>R$ {newPrice}</p>

                                    <button type="button" onClick={() => removeCartProduct(item)}> X </button>
                                </LiShopping>
                            )
                        })
                    }
                </ul>

                <div>
                    <p> Total </p>
                    <p>R$ { totalCart } </p>
                </div>
            </SectionCart>
        </>
    )
}

const Li = styled.li`
    padding: 10px;
    width: 220px;
    box-shadow: 0px 0px 10px grey;
    border-radius: 10px;
`
const DivTitle = styled.div`
    display: flex;
    align-items: center;
`
const H2 = styled.h2`
    font-size: 16px;
`
const P = styled.p`
    background-color: #000000;
    color: #ffffff;
    display: block;
    border-radius: 5px;
    padding: 4px;
    font-weight: 700;
    font-size: 15px;
`
const LiShopping = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 380px;
    height: 95px;
`
const DivImg = styled.div`
    width: 50px;
    height: 60px;
`
const DivButton = styled.div`
    display: flex;
`
const MinusButton = styled.button`
    width: 16px;
`
const PlusButton = styled.button`
    width: 16px;
`