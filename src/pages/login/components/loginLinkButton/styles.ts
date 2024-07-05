import { Text } from '@/components';
import { mediaQueries } from '@/styles/breakpoints';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  cursor: pointer;
  width: 100%;
`;

export const Description = styled(Text)`
  min-width: 180px;

  ${mediaQueries.mobile('display: none;')}
`;

export const LinkButton = styled.div`
  ${LayoutMap.displayFlex}
  gap: 10px;
`;
