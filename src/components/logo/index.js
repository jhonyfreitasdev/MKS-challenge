import styled from "styled-components"

export const Logo = () => {
    return(
        <div>
            <H1><Span>MKS</Span>Sistemas</H1>
        </div>
    )
}

const H1 = styled.h1`
    font-size: 20px;
    font-weight: 300;
`
const Span = styled.span`
    margin-right: 8px;
    font-size: 40px;
    font-weight: 600;
` 