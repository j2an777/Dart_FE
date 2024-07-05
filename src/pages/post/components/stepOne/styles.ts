import { Icon } from '@/components';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { InputBox } from '../inputs/styles';
import { containerQuery } from '@/styles/breakpoints';
import { Breakpoints } from '../../styles';
import { LayoutMap } from '@/styles/layout';

export const Container = styled.div`
  position: relative;
  padding: 70px 80px 50px;
  width: 100%;
  border-bottom: 2px solid ${colors.black};
  ${LayoutMap.pageLayout}
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
`;

export const Step = styled(Icon)`
  position: absolute;
  top: 40px;
  right: 2px;
  ${containerQuery({
    containerName: 'post',
    styles: `
      display: none;
    `,
    breakpoints: Breakpoints.tablet,
  })}
`;

export const Box = styled.div`
  position: absolute;
  top: 90%;
  right: 40px;
`;

export const StyledInputBox = styled(InputBox)`
  position: relative;
  max-width: 739px;
`;

export const TitleBox = styled.div`
  position: absolute;
  top: 7%;
  left: 650px;
`;
