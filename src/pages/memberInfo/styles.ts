import { Icon } from '@/components';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Breakpoints = {
  mobile: 500,
  tablet: 1024,
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
  flex: 1;
  min-height: 800px;
  width: 100%;
  height: 100%;
`;
