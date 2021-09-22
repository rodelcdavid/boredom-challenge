import styled, {keyframes} from "styled-components"


const fadeInContent = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const MainWrapper = styled.div`
    text-align: center;
    padding: 2rem;
    animation: 1s ${fadeInContent} ease-in;

    /* & h1 {
        width: 50%;
        margin: 0 auto;
    } */
`