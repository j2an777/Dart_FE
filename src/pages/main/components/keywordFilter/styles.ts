import { Icon, Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  width: 100%;
  gap: 10px;
  position: relative;
`;

export const SeacchInputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  right: 15px;
  top: 10px;
`;

export const SearchInupt = styled.input`
  border: 1px solid ${colors.gray600};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const SeacchButtons = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  justify-content: space-between;
`;

export const SearchContent = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  width: 100%;
  background-color: ${colors.white};
  border: 1px solid ${colors.black};
  border-radius: 10px;
  padding: 8px 0;
  gap: 8px;
`;

export const SearchItem = styled.li`
  padding: 4px 16px;
  :hover {
    text-decoration: underline;
    background-color: ${colors.gray100};
    font-weight: 700;
  }
`;

export const NoneSearchData = styled(Text)`
  padding: 4px 16px;
`;
