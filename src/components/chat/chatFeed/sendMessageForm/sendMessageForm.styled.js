import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
    background-color: yellow;
    margin: 40px;
    position: absolute;
    bottom: 0;
    width: calc(100% - 80px);
    height: 172px;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    box-shadow: 2px 4px 5px 0 rgba(15,15,15,0.05);
    border-radius: 17px;

    @media ${device.tablet}{
        margin: 20px;
        width: calc(100% - 40px);
    }
`