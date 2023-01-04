import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: ${({theme}) => theme.color.primary};
}

h1,h2,h3,h4,h5 {
  font-family: ${({theme}) => theme.font.ubuntu};
}

h1{
  font-size: ${({theme}) => theme.fontSize._900};
}

h2{
  font-size: ${({theme}) => theme.fontSize._800};
}

h3{
  font-size: ${({theme}) => theme.fontSize._700};
}

h4{
  font-size: ${({theme}) => theme.fontSize._600};
}

h5{
  font-size: ${({theme}) => theme.fontSize._500};
}

body {
  background-color: ${({theme}) => theme.color.dark};
  color: white;
  font-family: ${({theme}) => theme.font.openSans};
}
`

export default GlobalStyles;