import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Text } from '@/components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-height: 800px;
  padding: 110px 20px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p:nth-of-type(2) {
    color: ${colors.gray400};
  }
`;

export const TextIntro = styled(Text)`
  display: block;
  width: 100%;
  padding: 20px 10px;
  white-space: normal;
`;
