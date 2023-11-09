import { createGlobalStyle } from "styled-components"


export const darkTheme = {
    body: '#050505',
    textColor: '#fff',
    headingColor: '#757575'
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
        transition: .3s easy;
    }
    h2{
        color: ${props => props.theme.headingColor}
    }
`