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

export const Title = styled(Text)`
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
`;
