import { LayoutMap } from '@/styles/layout';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const anime = keyframes`
    0% {
        filter: hue-rotate(0deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
`;

export const Container = styled.div`
    width : 100vw;
    height : 100vh;
    ${LayoutMap.displayFlex};
    justify-content : center;
    background-color : black;
    animation : ${anime} 3s infinite;
`;