import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Text } from '@/components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  min-width: 300px;
  min-height: 800px;
  padding: 100px 20px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    text-align: center;
    word-break: break-all;
    white-space: normal;
  }

  p:nth-of-type(2) {
    color: ${colors.gray400};
  }
`;

export const TextIntro = styled(Text)`
  display: block;
  margin-top: 24px;
  width: 100%;
  padding: 24px 10px;
  word-break: break-all;
  white-space: normal;
  border-top: 1px solid ${colors.gray200};
`;
