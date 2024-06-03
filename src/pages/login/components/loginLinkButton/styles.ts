import { Text } from '@/components';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  cursor: pointer;
`;

export const Description = styled(Text)`
  min-width: 180px;
`;
