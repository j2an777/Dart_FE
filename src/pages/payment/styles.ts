import { containerQuery } from '@/styles/breakpoints';
import { LayoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Breakpoints = {
  column: 870,
  mobile: 500,
  coupon: 623,
};

export const Layout = styled.div`
  container: payment / inline-size;
  display: flex;
  justify-content: center;
`;

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: 1440px;
  width: 100%;
  margin: 40px auto;
  gap: 50px;
  ${LayoutMap.pageLayout}
  ${typographyMap.t5}

  ${containerQuery({
    containerName: 'payment',
    styles: `
      flex-direction: column;

    `,
    breakpoints: Breakpoints.column,
  })}
`;

export const LeftBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 70px;
  ${containerQuery({
    containerName: 'payment',
    styles: `
      width: 100%;
    `,
    breakpoints: Breakpoints.column,
  })}
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 34%;
  ${containerQuery({
    containerName: 'payment',
    styles: `
      width: 100%;
    `,
    breakpoints: Breakpoints.column,
  })}
`;
