import { LayoutMap } from '@/styles/layout';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
    display : grid;
    place-items: center;
`;

const anim = keyframes`
    0% {
        transform : rotate(0deg);
    }
    100% {
        transform : rotate(360deg);
    }
`;

export const Circle = styled.div`
    position : relative;
    width : 120px;
    height : 120px;
    border-radius : 50%;
    ${LayoutMap.displayFlex};
    justify-content : center;

    p {
        width : 100%;
        height : 100%;
        position : absolute;
        animation: ${anim} 7s linear infinite;
    }

    span {
        position : absolute;
        left : 50%;
        font-size : 1.2em;
        transform-origin: 0px 60px;
    }
`;