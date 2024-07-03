import { colors } from "@/styles/colorPalette";
import { LayoutMap } from "@/styles/layout";
import { typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
    width : 100vw;
    height : 200px;
    ${LayoutMap.displayFlex};
    flex-direction: column;
    justify-content : center;
    background-color : black;
    gap : 20px;

    img {
        width : 40px;
        height : 60px;
        object-fit: contain;
    }
`;

export const ContentBox = styled.div`
    width : 100%;
    ${LayoutMap.displayFlex};
    flex-direction: column;
    justify-content : center;
    gap : 10px;
`;

export const ContentBlock = styled.div`
    ${LayoutMap.displayFlex};

    span {
        display : flex;
        color : white;

        a {
            &:hover {
                text-decoration: underline;
            }
            color : ${colors.gray300};
        }
    }

    .line {
        width: 1px;
        height: 15px;
        background-color: #ccc;
        margin: 0 10px;
    }

    @media (max-width: 500px) {
        span {
            ${typographyMap.t8};
        }
    }
`;