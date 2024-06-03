import { LayoutMap } from "@/styles/layout";
import styled from "@emotion/styled";

export const Container = styled.div`
    width : 100vw;
    height : 100vh;
    ${LayoutMap.displayFlex};
    justify-content : center;
    gap : 30px;
`;

export const Block = styled.div`
    max-height : 600px;
    position : absolute;
    top : 15%;
    display : flex;
    flex-direction : column;
`;