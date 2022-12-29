import styled from "styled-components";

const handleType = (type, t) => {
    switch (type) {
      case "primary":
        return `
                color: ${t.color.dark}; 
                background-color: ${t.color.primary}; 
                border-radius: 12px;
                border: none;
                padding: 17px 30px;
                letter-spacing: 0;
                font-weight: 500;
        `;
      case "secondary":
        return `
                color:${t.color.white};
                background-color: ${t.color.dark};
                border-radius: 100px;
                border: 2px solid ${t.color.primary};
                padding: 8px 30px;
        `;

      default:
        return  `
                color:${t.color.white};
                background-color: ${t.color.dark};
                border-radius: 100px;
                border: 2px solid ${t.color.gray};
                padding: 8px 30px;
        `;
    }
  };
 
const handleHover = (type, t) => {
    switch(type){
        case "primary":
            return `
                background-color: ${t.color.white};
                color: ${t.color.dark};
            `;
        case "secondary":
            return `
                    background-color: ${t.color.primary};
                    color: ${t.color.dark};
            `;
        default:
            return `
                    background-color: ${t.color.gray};
                    color: ${t.color.white}
            `;
    };
};

export const StyledButton = styled.button`
   outline-offset: none;
   font-family: ${({theme}) => theme.font.openSans};
   font-size: ${({theme}) => theme.fontSize._300};
   cursor: pointer;
   letter-spacing: 1px;
   transition: 0.33s all cubic-bezier(0.075, 0.82, 0.165, 1);

   ${({ type, theme }) => handleType(type, theme)};

   &:hover {
    ${({type, theme}) => handleHover(type, theme)};
   }

   &:focus {
    outline: 0;
   }

`