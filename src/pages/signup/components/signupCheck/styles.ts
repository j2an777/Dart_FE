import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
`;

export const InputBox = styled.div`
  ${LayoutMap.displayFlex}
  gap: 20px;
  align-items: flex-end;
`;

export const SuccessText = styled(Text)`
  position: absolute;
  color: ${colors.green};
  top: 90px;
  left: 0;
`;

export const CheckInputBox = styled.form<{ isVisible: boolean }>`
  ${LayoutMap.displayFlex}
  align-items: flex-end;
  gap: 20px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

export const TimerBox = styled.div`
  position: absolute;
  right: 100px;
`;

export const CheckModalInput = styled.input`
  border-bottom: 1px solid ${colors.black};
  font-size: 16px;
  padding: 10px;
`;

export const CheckModalMessage = styled(Text)`
  position: absolute;
  bottom: -20px;
`;
