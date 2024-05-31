import { Text } from '@/components';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 40px;
  flex: 1;
`;

export const Label = styled.label<{ isFocused: boolean }>`
  position: absolute;
  font-size: 24px;
  top: 0;
  ${({ isFocused }) =>
    isFocused
      ? css`
          font-size: 16px;
          top: -15px;
        `
      : null}
  transition: all 0.5s;
`;

export const Input = styled.input`
  font-size: 24px;
  padding: 10px;
`;

export const ErrorMessage = styled(Text)`
  position: absolute;
  bottom: -25px;
`;
