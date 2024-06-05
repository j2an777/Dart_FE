import { LayoutMap } from "@/styles/layout";
import styled from "@emotion/styled";

export const Container = styled.div`
    position : relative;
    width : 700px;
    height : 60px;
    ${LayoutMap.displayFlex};
    justify-content : center;
    border-bottom : 1px solid black;
`;

export const BackBox = styled.div`
    position : absolute;
    left: 0;
`;