import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  width: 320px;
  padding: 35px 20px;
  border-top: 1px solid ${colors.gray600};
  gap: 30px;
`;

export const TitleBox = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  justify-content: space-between;
`;

export const SeacchBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const SearchInupt = styled.input`
  border: 1px solid ${colors.gray600};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const SeacchButtonBlock = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  justify-content: space-between;
`;

export const PriceBox = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

export const PriceButtonBlock = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 15px;
`;
