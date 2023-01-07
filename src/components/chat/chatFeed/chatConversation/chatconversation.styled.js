import styled from "styled-components";
import { device } from "../../../styles/breakpoints";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    width: calc(100% - 40px);
    height: calc(100% - (78px + 172px + 40px + 40px));

    overflow-y: auto;
    overflow-x: hidden;

    @media ${device.tablet}{
        margin-left: 20px;
        padding-right: 20px;
        height: calc(100% - (78px + 172px + 40px));
    }
`