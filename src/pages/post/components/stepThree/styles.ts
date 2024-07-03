import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

import { Text } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { Breakpoints } from '../../styles';
import { LayoutMap } from '@/styles/layout';

export const Container = styled.div`
  position: relative;
  padding: 60px 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-top: 2px solid ${colors.black};
  ${LayoutMap.pageLayout}

  article {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  position: absolute;
  top: 60px;
  right: 2px;

  ${containerQuery({
    containerName: 'post',
    styles: `
      display: none;
    `,
    breakpoints: Breakpoints.tablet,
  })}
`;

export const StepContent = styled(Text)`
  position: absolute;
  top: 450px;
  right: 65px;
`;

export const Content = styled(Text)``;

export const TemplateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  width: 100%;
  z-index: var(--lower-zindex);
`;

export const TemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 850px;
  width: 100%;
`;

export const Title = styled(Text)`
  display: none;

  ${containerQuery({
    containerName: 'post',
    styles: `
      display: flex;
      margin-bottom: 40px;
    `,
    breakpoints: Breakpoints.tablet,
  })}
`;

export const Image = styled.img`
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 100px;
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  border: 4px solid ${colors.black};
`;

export const Checked = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${colors.black};
`;

export const CheckBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${colors.black};
`;
