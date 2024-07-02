import { LayoutMap } from "@/styles/layout";
import { bolderMap, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";


export const HeaderContainer = styled.div`
    position : fixed;
    top : 30px;
    width : 100%;
    height : 100px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 10px;
    padding : 0 50px;
    z-index: 11;
`;

export const MenuBlock = styled.div`
    width : 100%;
    height : 30px;
    ${LayoutMap.displayFlex};
    justify-content : space-between;
`;

export const Logo = styled.img`
    width : 80px;
    height : 30px;
    object-fit : contain;
    cursor : pointer;
`;

export const MenuBox = styled.div`
    width : 100%;
    height : 30px;
    ${LayoutMap.displayFlex};
    justify-content : flex-end;
    gap: 20px;
`;

export const CopyRight = styled.p`
    ${typographyMap.t7};
    ${bolderMap.thin};
    color : white;

    @media (max-width : 500px) {
        display : none;
    }
`;