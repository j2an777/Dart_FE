import { Icon } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Breakpoints = {
  info_1: 1200,
  info_2: 1100,
  column: 950,
  mobile: 700,
  purchase: 570,
};

export const Layout = styled.div`
  container: member-info / inline-size;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin-bottom: 50px;
  ${LayoutMap.pageLayout}
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  outline: 2px solid black;
`;

export const TopBlock = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  border-bottom: 2px solid black;
`;

export const Back = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  ${containerQuery({
    containerName: 'member-info',
    styles: `
      flex-direction: column;
    `,
    breakpoints: Breakpoints.column,
  })}
  min-height: 800px;
`;
