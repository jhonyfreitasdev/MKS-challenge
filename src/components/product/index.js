import { useEffect, useState } from "react"
import { getProducts } from "../../services/api-products"
import { ShopButton } from "../shop-button"
import { SectionCart } from "../section-cart"
import styled from "styled-components"
import './products-list.css'


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
        <Main>
            <ul className="products-list">
                {
                    itemsList.items.map((item, index) => {
                        return (
                            <Li key={index}>
                                <DivImageProduct>
                                    <img src={item.photo} alt={item.name} />
                                </DivImageProduct>
                                <DivTitle>
                                    <H2>{item.name}</H2>
                                    <P>R$ {item.price}</P>
                                </DivTitle>
                                <Description>{item.description}</Description>
                                <ShopButton getItem={() => addProductInCart(item)} />
                            </Li>
                        )
                    })
                }
            </ul>

            <SectionCart>
                <div>
                    <DivHeader>
                        <TitleCart> Carrinho de compras </TitleCart>
                        <CloseButton type="button" /*onClick={props.closeCart}*/> X </CloseButton>
                    </DivHeader>

                    <ul itemClass="products-list">
                        {
                            shoppingList.map((item, index) => {
                                const newPrice = item.product.price * item.quantity
                                return (
                                    <LiShopping key={index}>
                                        <DivImg>
                                            <img src={item.product.photo} alt={item.product.name} />
                                        </DivImg>
                                        <TitleProductCart>{item.product.name}</TitleProductCart>
                                        <DivButton>
                                            <MinusButton type="button" onClick={() => removeQuantity(item)}> - </MinusButton>
                                            <Quantity>{item.quantity}</Quantity>
                                            <PlusButton type="button" onClick={() => addQuantity(item)}> + </PlusButton>
                                        </DivButton>
                                        <Price>R$ {newPrice}</Price>
                                        <RemoveButton type="button" onClick={() => removeCartProduct(item)}> X </RemoveButton>
                                    </LiShopping>
                                )
                            })
                        }
                    </ul>
                </div>

                <div>
                    <TotalDiv>
                        <p> Total: </p>
                        <p>R$ { totalCart } </p>
                    </TotalDiv>
                    <CheckoutButton type="button"> Finalizar Compra </CheckoutButton>
                </div>
            </SectionCart>
        </Main>
    )
}


const Main = styled.div`
    position:relative;
`
const Li = styled.li`
    position: relative;
    padding: 10px 10px 0 10px;
    width: 220px;
    height: 285px;
    box-shadow: 0px 0px 10px lightgrey;
    border-radius: 10px;
`
const DivImageProduct = styled.div`
    margin: 0 auto;
    max-width: 130px;
`
const DivTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const H2 = styled.h2`
    font-size: 16px;
    width: 53%;
`
const P = styled.p`
    background-color: #000000;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    padding: 4px;
    border-radius: 5px;
`
const Description = styled.p`
    color: #2c2c2c;
    font-size: 12px;
    font-weight: 300;
    margin: 8px 0 14px 0;
`


const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`
const TitleCart = styled.h2`
    font-size: 27px;
    font-weight: 700px;
    width: 50%;
`
const CloseButton = styled.button`
    display: flex;
    align-self: flex-start;
    background-color: #000000;
    color: #ffffff;
    font-size: 15px;
    padding: 8px 10px;
    border-radius: 50%;
`
const LiShopping = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
    margin: 14px 0;
    padding: 13px;
    width: 380px;
    height: 95px;
    border-radius: 8px;
`
const DivImg = styled.div`
    width: 50px;
    height: 60px;
`
const TitleProductCart = styled.h2`
    font-size: 15px;
    font-weight: 400px;
`
const DivButton = styled.div`
    display: flex;
`
const MinusButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    border-radius: 4px 0 0 4px;
    border: solid 1px lightgrey;
    padding: 4px;
`
const Quantity = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    border: solid 1px lightgrey;
` 
const PlusButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    border-radius: 0 4px 4px 0;
    border: solid 1px lightgrey;
    padding: 4px 6px;
`
const Price = styled.p`
    font-size: 14px;
    font-weight: 700;
`
const RemoveButton = styled.button`
    position: absolute;
    background-color: #000000;
    color: #ffffff;
    padding: 3px 5px;
    border-radius: 50%;
    top: -8px;
    right: -7px;
`
const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28px;
    font-weight: 700;
`
const CheckoutButton = styled.button`
    background-color: #000000;
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    padding: 30px 0;
    margin-top: 30px;
    width: 480px;
    transform: translateX(-55px);
`