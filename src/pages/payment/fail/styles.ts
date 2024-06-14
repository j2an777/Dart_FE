import { Text } from '@/components';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const PayText = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 130px 0 50px;
`;
