import { LayoutMap } from "@/styles/layout";
import { bolderMap, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";
import modalBg from '@/assets/images/rectangle.png';
import modalBottom from '@/assets/images/modalbottom.png';
import { fadeUp } from "@/pages/gallery/components/galleryDetail/styles";

export const Container = styled.div`
    position : absolute;
    top : 43%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 800px;
    height : 95vh;
    display : flex;
    flex-direction : column;
    background-color : rgba(0, 0, 0, 0.1);
    z-index : 10;
    animation : ${fadeUp} 0.3s ease-in-out;
`;

export const InfoBox = styled.div`
    width : 100%;
    height : 80vh;
    display : flex;
    flex-direction : column;
    gap : 50px;
    padding : 50px 110px;
    box-sizing : border-box;
    background-image: url(${modalBg});
    background-position: center;

    img {
        width : 80px;
        height : 30px;
        object-fit : contain;
    }
`;

export const DescriptionBlock = styled.div`
    width : 350px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 30px;

    #descript {
        color : white;
        ${typographyMap.t6};
        ${bolderMap.thin};
        word-break: break-word;
    }
`;

export const Top = styled.div`
    ${LayoutMap.displayFlex};
    justify-content : flex-start;
    gap: 20px;
`;

export const User = styled.div`
    ${LayoutMap.displayFlex};
    justify-content : flex-start;
    gap: 5px;
`;

export const Circle = styled.div`
    width : 10px;
    height : 10px;
    border-radius: 50%;
    background-color : red;
`;

export const ButtonBlock = styled.div`
    ${LayoutMap.displayFlex};
    justify-content : flex-start;
    gap: 10px;

    .price {
        ${LayoutMap.displayFlex};
        justify-content : center;
        width : 120px;
        height : 40px;
        background-color : black;
        border-radius : 30px;
        color : white;
    }

    .topay {
        ${LayoutMap.displayFlex};
        justify-content : center;
        width : 120px;
        height : 40px;
        background-color : white;
        border-radius : 30px;
        color : black;

        &:hover {
            cursor:pointer;
            background-color : black;
            border : none;
            color : white;
        }
    }
`;

export const ReviewBox = styled.div`
    position: relative;
    width : 100%;
    height : 15vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 10px;
    padding : 10px 150px 10px 110px;
    box-sizing : border-box;
    background-color : black;
    background-image : url(${modalBottom});
    background-size : 100%;
    background-repeat : no-repeat;
    background-position : center;
`;

export const ScoreBlock = styled.div`
    ${LayoutMap.displayFlex};
    justify-content : space-between;
`;

export const ScoreWrap = styled.div`
    ${LayoutMap.displayFlex};
    justify-content : flex-start;
    gap : 10px;
`;

export const Score = styled.div`
    ${LayoutMap.displayFlex};
    margin-right : 30px;
`;