import { Icon } from '@/components';
import { buttonSizeMap, buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
    width : 100%;
    height : 300px;
    ${LayoutMap.displayFlex};
    justify-content : space-between;
    border-top : 2px solid black;
`;

export const Left = styled.div`
    width : 40%;
    height : 100%;
    ${LayoutMap.displayFlex};
    justify-content : center;
`;

export const Alpha = styled(Icon)`
    width : 100%;
    height : 100%;
    object-fit : contain;
`;

export const Right = styled.div`
    width : 50%;
    height : 100%;
    display : flex;
    flex-direction : column;
    gap : 10px;
    justify-content : center;
`;

export const AddressBox = styled.div`
    display : flex;
    flex-direction : column;
    gap : 10px;
    justify-content : center;
    margin : 10px 0 0 0;
`;

export const AddressBlock = styled.div`
    ${LayoutMap.displayFlex};
    justify-content : flex-start;
    gap : 30px;
`;

export const AddressZoneCode = styled.input`
    width : 150px;
    height : 40px;
    outline : none;
    border : none;
    ${LayoutMap.displayFlex};
    padding-left : 10px;
    background-color: ${colors.gray100};
    color: ${colors.gray500};
`;

export const SearchBtn = styled.div`
    ${buttonTypeMap.rectangleWhite};
    ${buttonSizeMap.ls};
    ${LayoutMap.displayFlex};
    justify-content: center;
    transition : all 0.3s ease;

    &:hover {
        ${buttonTypeMap.rectangleBlack};
        cursor: pointer;
    }
`;

export const AddressArea = styled.input`
    width : 75%;
    height : 40px;
    outline : none;
    border : none;
    ${LayoutMap.displayFlex};
    padding-left : 10px;
    background-color: ${colors.gray100};
    color: ${colors.gray500};
`;

export const AddressTown = styled.input`
    width : 75%;
    height : 40px;
    outline : none;
    border : 1px solid ${colors.gray300};
    ${LayoutMap.displayFlex};
    justify-content : center;
    padding-left : 10px;
    background-color: ${colors.white};
    color: ${colors.black};

    &:focus {
        border : 1px solid ${colors.black};
    }
`;