import { LayoutMap } from "@/styles/layout";
import styled from "@emotion/styled";

export const Container = styled.div`
    position : absolute;
    top : 0;
    width : 100vw;
    height : 100vh;
    ${LayoutMap.displayFlex};
    flex-direction : column;
    justify-content : center;
    background-color : #e6e6e6;
`;

export const Top = styled.div`
    width : 100%;
    height : 250px;
    ${LayoutMap.displayFlex};
    border-bottom : 1px solid black;
`;

export const Middle = styled.div`
    width : 100%;
    height : 100%;
    flex-grow : 1;
    display : flex;
    justify-content : center;
    align-items : center;

    img {
        width : 550px;
        height : 350px;
        object-fit : contain;
    }
`;

export const Bottom = styled.div`
    width : 100%;
    height : 250px;
    ${LayoutMap.displayFlex};
    border-top : 1px solid black;
`;

export const Left = styled.div`
    width : 60%;
    height : 100%;
    ${LayoutMap.displayFlex};
    justify-content : center;
    border-right : 1px solid black;
    gap : 10px;
`;

export const Right = styled.div`
    width : 40%;
    height : 100%;
    ${LayoutMap.displayFlex};
    justify-content : center;
    
    a {
        border-bottom: 1px solid black;
    }
`;