import { containerQuery } from '@/styles/breakpoints';
import { buttonSizeMap, buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import { Breakpoints } from '../../styles';
import { Icon } from '@/components';

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

export const AddressBlock = styled.div`
  ${LayoutMap.displayFlex};
  justify-content: flex-start;
  gap: 30px;
`;

export const AddressZoneCode = styled.input`
  width: 200px;
  height: 50px;
  outline: none;
  border: none;
  ${LayoutMap.displayFlex};
  padding-left: 10px;
  background-color: ${colors.gray100};
  color: ${colors.gray500};
`;

export const SearchBtn = styled.div`
  ${buttonTypeMap.rectangleWhite};
  ${buttonSizeMap.ls};
  ${LayoutMap.displayFlex};
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    ${buttonTypeMap.rectangleBlack};
    cursor: pointer;
  }
`;

export const AddressArea = styled.input`
  width: 100%;
  height: 50px;
  ${LayoutMap.displayFlex};
  padding-left: 10px;
  background-color: ${colors.gray100};
  color: ${colors.gray500};
`;

export const AddressTown = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid ${colors.gray400};
  ${LayoutMap.displayFlex};
  justify-content: center;
  padding-left: 10px;
  background-color: ${colors.white};
  color: ${colors.black};

  &:focus {
    border: 1px solid ${colors.black};
  }
`;

export const Container = styled.div`
  position: relative;
  border-top: 2px solid ${colors.black};
  padding: 50px 0;
  ${LayoutMap.pageLayout}
`;

export const Step = styled(Icon)`
  position: absolute;
  top: 100px;
  left: 2px;
  ${containerQuery({
    containerName: 'post',
    styles: `
      display: none;
    `,
    breakpoints: Breakpoints.tablet,
  })}
`;

export const Box = styled.div`
  padding-left: 450px;
  ${containerQuery({
    containerName: 'post',
    styles: `
      padding: 0px;
    `,
    breakpoints: Breakpoints.tablet,
  })}
`;
