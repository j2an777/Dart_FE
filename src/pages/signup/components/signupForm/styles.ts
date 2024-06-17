import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
`;

export const CheckBox = styled.div`
  display: flex;
  gap: 60px;
  align-items: end;
  justify-content: space-between;
`;

export const CheckModalContainer = styled.form`
  ${LayoutMap.displayFlex}
  position: relative;
  align-items: flex-end;
  margin-bottom: 30px;
  padding-bottom: 50px;
  gap: 20px;
`;

export const CheckModalInput = styled.input`
  border-bottom: 1px solid ${colors.black};
  font-size: 16px;
  padding: 10px;
`;
export const CheckInputBox = styled.div`
  ${LayoutMap.displayFlex}
  position: absolute;
  right: 0;
  bottom: 0;
  gap: 20px;
`;
