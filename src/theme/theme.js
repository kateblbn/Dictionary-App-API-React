import { createGlobalStyle } from "styled-components"


export const darkTheme = {
    body: '#050505',
    textColor: '#fff',
    headingColor: '#f6f4f4 ',
    right: '5px !important',
    background: '#A445ED !important'
    // left: '0px !important'
}
export const lightTheme = {
    body: '#fff',
    textColor: '#050505',
    headingColor: '#757575'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${props => props.theme.body};
        color: ${props => props.theme.textColor};
        transition: 1s all;
        font-weight: 600;
    }
    div{
        color: ${props => props.theme.textColor};
    }
    h2{
        color: ${props => props.theme.headingColor}
    }
    span {
        right: ${props => props.theme.right};
        background-color: ${props => props.theme.background};
    }
`