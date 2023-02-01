import { Header } from "./header"
import { Products } from "./products"
import { Footer } from "../components/footer"
import styled from "styled-components"

export const Home = () =>{
    return(
        <DivHome>
            <Header/>
            <Products/>
            <Footer/>
        </DivHome>
    )
}

const DivHome = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    box-shadow: 0px 0px 10px lightgrey;
`