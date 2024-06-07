import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const CheckBox = styled.div`
  display: flex;
  gap: 60px;
  align-items: end;
  justify-content: space-between;
`;

export const CheckModalContainer = styled.form`
  ${LayoutMap.displayFlex}
  align-items: flex-end;
  padding-bottom: 50px;
`;

export const CheckModalInput = styled.input`
  border: 1px solid ${colors.black};
`;
