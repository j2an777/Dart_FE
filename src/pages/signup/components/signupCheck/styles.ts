import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.form`
  ${LayoutMap.displayFlex}
  position: relative;
  align-items: flex-end;
  margin-bottom: 30px;
  padding-bottom: 50px;
  gap: 20px;
`;

export const SuccessText = styled(Text)`
  position: absolute;
  color: ${colors.green};
  top: 90px;
`;

export const CheckInputBox = styled.div`
  ${LayoutMap.displayFlex}
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
  gap: 20px;
`;

export const CheckModalInput = styled.input`
  border-bottom: 1px solid ${colors.black};
  font-size: 16px;
  padding: 10px;
`;

export const CheckModalMessage = styled(Text)`
  position: absolute;
  top: 40px;
`;
