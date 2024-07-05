import styled from "@emotion/styled";
import IntroduceBg from '@/assets/images/introduce.png';
import { bolderMap, typographyMap } from "@/styles/typography";
import { LayoutMap } from "@/styles/layout";
import Block from '@/assets/images/introduceBlock.png';

export const Container = styled.div`
    width : 100vw;
    min-height : 2880px;
    padding : 120px 0;
    box-sizing : border-box;
    background-image : url(${IntroduceBg});
    background-position : center;
    background-size : cover;
    background-repeat : no-repeat;
    display : flex;
    flex-direction : column;
    gap : 70px;
`;

export const IntroduceBox = styled.div`
    display : flex;
    flex-direction : column;
    gap : 50px;
    padding : 0 200px;
    box-sizing : border-box;

    .title {
        line-height : 130%;
        letter-spacing : 10px;
        span {
            ${bolderMap.thin};
        }
    }

    .subtitle {
        @media (max-width: 1024px) {
            width : 350px;
            ${typographyMap.t3}
        }
    }

    @media (max-width: 1024px) {
        padding : 0 150px;
    }

    @media (max-width: 500px) {
        width : 100%;
        padding : 0 40px;
    }
`;

export const IntroduceBlock = styled.div`
    display : flex;
    flex-direction : column;
    gap : 20px;

    .demoTitle {
        span {
            color : white;
            ${typographyMap.t4};
            ${bolderMap.regular};
        }
    }

    @media (max-width : 1024px) {
        p {
            width : 300px;
            ${typographyMap.t5};
        }
        .demoTitle {
            ${typographyMap.t3}
        
            span {
                ${typographyMap.t5};
            }
        }
    }
`;

export const DemoBox = styled.div`
    position : relative;
    width : 100%;
    height : 600px;
    ${LayoutMap.displayFlex};
    justify-content : center;

    img {
        width : 600px;
        height : 450px;
        object-fit : cover;

        @media (max-width : 600px) {
            width : 90vw;
            height : auto;
        }
    }
`;

export const DemoBlock = styled.div`
    position : absolute;
    top : 510px;
    right : 0;
    width : 86%;
    height : 150px;
    ${LayoutMap.displayFlex};
    justify-content : center;
    background-image : url(${Block});
    background-repeat : no-repeat;
    background-position : center;
    background-size : cover;

    p {
        margin-left : 150px;
        letter-spacing : 5px;
        line-height : 150%;

        span {
            ${bolderMap.thin};
        }
    }

    @media (max-width: 1024px) {
        width : 100%;

        p { 
            margin : 0;
            text-align: center;
        }
    }

    @media (max-width : 600px) {
        top : 480px;
    }
`;

export const AddBox = styled.div`
    width : 100%;
    height : 450px;
    padding : 0 200px;
    margin-top : 200px;
    box-sizing : border-box;
    ${LayoutMap.displayFlex};
    justify-content : center;

    img {
        width : 600px;
        height : 450px;
        object-fit : cover;

        @media (max-width : 600px) {
            width : 90vw;
            height : auto;
        }
    }

    @media (max-width : 1024px) {
        padding : 0;
        flex-direction : column;
    }

    @media (max-width : 600px) {
        margin-top : 100px;
    }
`;

export const AddBlock = styled.div`
    width : 100%;
    height : 50%;
    border-bottom : 2px solid black;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 20px;
    padding : 0 30px;
    box-sizing : border-box;

    .rightText {
        text-align : right;

        @media (max-width : 1024px) {
            text-align : center;
            margin : 0;
        }
    }

    p {
        width : 400px;
    }

    span {
        margin-left : 10px;
        ${bolderMap.regular};
        ${typographyMap.t4};
    }

    @media (max-width: 1024px) {
        p {
            text-align : center;
            width : auto;
        }
            
        border : none;
    }
`;