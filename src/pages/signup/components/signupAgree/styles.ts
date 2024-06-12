import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 600px;
`;

export const Title = styled(Text)`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.white};
`;
export const AgreeBox = styled.div`
  padding: 30px 15px;
`;
