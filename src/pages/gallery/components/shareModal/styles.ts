import { buttonSizeMap, buttonTypeMap } from "@/styles/button";
import { colors } from "@/styles/colorPalette";
import { LayoutMap } from "@/styles/layout";
import { typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
    ${LayoutMap.displayFlex};
    flex-direction: column;
    gap : 30px;
    padding : 20px;

    @media (max-width : 500px) {
        width : 90vw;
        height : 300px;
    }
`;

export const UrlBox = styled.div`
    width : 400px;
    height : 50px;
    background-color : ${colors.gray100};
    ${LayoutMap.displayFlex};
    justify-content : center;
    gap : 20px;
    padding : 10px;
    border-radius : 10px;

    @media (max-width : 500px) {
        width : 90vw;
    }
`;

export const UrlText = styled.input`
    width : 60%;
    height: 100%;
    background-color : white;
    ${LayoutMap.displayFlex};
    padding-left : 5px;
    white-space: nowrap;
    overflow : hidden;
    text-overflow : ellipsis;
    cursor: text;
    border-radius : 5px;
`;

export const CopyBtn = styled.button`
    width : 55%;
    height : 100%;
    ${buttonTypeMap.rectangleWhite};
    ${buttonSizeMap.fit};
    ${typographyMap.t7};
    padding : 5px;
    transition : all 0.3s ease;
    border-radius : 5px;

    &:hover {
        ${buttonTypeMap.rectangleGray};
    }

    @media (max-width : 500px) {
        width : 50px;
        height : 30px;
        ${typographyMap.t9};
    }
`;

export const SocialBox = styled.div`
    width : 100%;
    height : 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
    margin-bottom : 10px;
`;

export const SocialBtn = styled.button`
    width : 50px;
    height : 50px;
`;
