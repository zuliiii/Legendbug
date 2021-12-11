import { createGlobalStyle } from "styled-components"
export const LightTheme = {
    body: "#fff",
    fontColor: "#000",
    buttonColor: "blue",
    navColor: "green",
    licolor: "#009955",
    cardColor: "#764399"
}

export const DarkTheme = {
    body: "#000",
    fontColor: "#fff",
    buttonColor: "yellow",
    navColor: "red",
    licolor: "#674432",
    cardColor: "#875566"
}

export const GlobaslStyle = createGlobalStyle `

body{
    background-color: ${(props)=> props.theme.body};
    color: ${(props) => props.theme.fontColor};
}

button{
    background-color: ${(props)=> props.theme.buttonColor};
}
.navbar{
    background-color: ${(props)=> props.theme.navColor};
}

h1{
    color: ${(props) => props.theme.licolor};
}
.card{
    background-color: ${(props)=> props.theme.cardColor};
}

`;