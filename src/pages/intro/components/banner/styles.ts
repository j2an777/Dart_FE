import styled from "@emotion/styled";
import Banner from '@/assets/images/banner.png';
import { LayoutMap } from "@/styles/layout";
import { bolderMap, typographyMap } from "@/styles/typography";

export const Container = styled.div`
    width : 100vw;
    height : 100vh;
    ${LayoutMap.displayFlex};
    justify-content : center;
    flex-direction : column;
    background-image : url(${Banner});
    background-repeat : no-repeat;
    background-position: center;
    background-size : cover;
    gap : 50px;
`;

export const LineBlock = styled.div`
    position : relative;
    width : 100%;
    height : 60px;
    ${LayoutMap.displayFlex};

    p {
        width : 50%;
        height : 100%;
        padding : 30px;
        box-sizing : border-box;
        background-color : #fff;
        ${LayoutMap.displayFlex};
    }

    .right {
        justify-content : flex-end;
        cursor : pointer;
        transition : all 0.3s ease;

        &:hover a::after {
            width: 100%;
            left: 0;
        }

        a {
            position: relative;
            display: inline-block;
            text-decoration: none;
            color: inherit;

            &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: -2px;
                left: 50%;
                background-color: black;
                transition: width 0.3s ease, left 0.3s ease;
            }
        }
    }
`;

export const Border = styled.div`
    width : 50%;
    height : 100%;
    border-bottom : 1px solid #fff;
    background-color : transparent;
`;

export const Logo = styled.div`
    width : 250px;
    height : 100px;
    background-color : black;
    color : white;
    ${LayoutMap.displayFlex};
    justify-content : center;
    gap : 10px;
    ${typographyMap.t1};
    ${bolderMap.bold};

    span {
        ${bolderMap.thin};
    }
`;

export const Empty = styled.div`
    width : 10%;
    height : 100%;
    background-color : transparent;
    border: none;
`;
