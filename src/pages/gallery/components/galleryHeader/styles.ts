import { bolderMap, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";


export const HeaderContainer = styled.div`
    width : 100%;
    height : 100px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 10px;
`;

export const MenuBlock = styled.div`
    width : 100%;
    height : 30px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

export const Logo = styled.img`
    width : 80px;
    height : 30px;
    object-fit : contain;
`;

export const MenuBox = styled.div`
    width : 100%;
    height : 30px;
    display : flex;
    justify-content : flex-end;
    align-items : center;
    gap : 20px;
`;

export const CopyRight = styled.p`
    ${typographyMap.t7};
    ${bolderMap.thin};
    color : white;
`;