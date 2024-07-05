import { Text } from '@/components';
import { mediaQueries } from '@/styles/breakpoints';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.form`
  background-color: ${colors.black100};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const SignupBox = styled.div`
  ${LayoutMap.pageLayout}
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  max-width: 660px;
`;

export const TitleBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const Title = styled(Text)`
  transform: translateX(-65%);

  ${mediaQueries.mobile(`
  transform: translateX(0);    
  `)}
`;
