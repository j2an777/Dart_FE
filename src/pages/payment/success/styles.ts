import { Text } from '@/components';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Layout = styled.div`
  container: payment-done / inline-size;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  ${LayoutMap.pageLayout}
`;

export const PayText = styled(Text)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 130px 0 50px;
`;
