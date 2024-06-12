import { colors } from "@/styles/colorPalette";
import { bolderMap, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
    width : 100%;
    min-height : 300px;
    padding : 10px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : center;
    
    form {
        display : flex;
        flex-direction : column;
        gap : 15px;
    }
`;

export const ScoreBox = styled.div`
    margin-top : 5px;
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    gap : 5px;

    p {
        ${typographyMap.t3};
        ${bolderMap.semibold};
    }

    span {
        ${typographyMap.t6};
        ${bolderMap.medium};
        color : ${colors.gray500};
        margin-right : 10px;
    }
`;

export const TextReview = styled.textarea<{ width: number; height: number; }>`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid ${colors.gray400};
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;

    &::placeholder {
        text-align: left;
        vertical-align: top;
    }

    &:focus {
        border-color: ${colors.black};
    }
`;

export const ToReview = styled.p`
    align-self : end;
    ${typographyMap.t6};
    ${bolderMap.medium};

    &:hover{
        text-decoration: underline;
        cursor : pointer;
    }
`;