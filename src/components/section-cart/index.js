import styled from "styled-components"

export const SectionCart = (props) => {
    
    return (
        <DivCart>
            {props.children}
        </DivCart>
    )
}

const DivCart = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #0F52BA;
    color: #ffffff;
    width: 480px;
    height: 100vh;
    max-height: 917px;
    padding: 40px 55px 0 55px; 
    box-shadow: -1px -1px 10px rgba(0, 0, 0, 0.323);
    top: -107px; 
    right: 0;
    z-index: 1;
`