import { Text } from '@/components';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  width: 100%;
  gap: 40px;
`;

export const ContentText = styled(Text)`
  flex: 1;
`;
