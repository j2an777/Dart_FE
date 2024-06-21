import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
`;

export const Block = styled.div`
  display: flex;
  gap: 20px;
`;

export const CheckBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${colors.black};

  &:disabled {
    border: 1px solid ${colors.gray400};
  }
`;

export const Checked = styled.button`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${colors.black};
`;

export const Title = styled(Text)`
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
`;
