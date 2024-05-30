import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const fadeUp = keyframes`
    0% {
        opacity : 0;
    }

    100% {
        opacity : 1;
    }
`;

export const Container = styled.div`
    position : absolute;
    top : 45%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 90vw;
    height : 90vh;
    animation : ${fadeUp} 0.3s ease-out;
    display : flex;
    justifyContent : center;
    align-items : center;
    background-color : rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    z-index: 10;
`;

export const Frame = styled.div`
    width : 50%;
    height : 100%;
    display : flex;
    justify-content: center;
    align-items: center;
    background: #d4d7dd;
    border: 55px solid #fff;
    box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.5) inset, 
    0 15px 54px 10px rgba(0, 0, 0, 0.2);
    padding : 16px;
    border-radius: 10px;

    img {
        width : 100%;
        height : 100%;
        object-fit : contain;
    }
`;

export const DetailContent = styled.div`
    width : 50%;
    height : 100%;
    display : flex;
    flex-direction : column;
    padding : 20px;
    box-sizing : border-box;
    gap : 20px;
`;

export const Top = styled.div`
    width : 100%;
    display : flex;
    justify-content: space-between;
    align-items: center;
`;