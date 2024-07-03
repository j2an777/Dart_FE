import { mediaQueries } from '@/styles/breakpoints';
import styled from '@emotion/styled';
import { SizeValues } from '@/hooks/useGetMediaQuerySize';

export const Container = styled.div<{ size: SizeValues }>`
  position: relative;
  display: flex;
  ${({ size }) => (size === 'mobile' ? 'flex-direction: column;' : null)}
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 30px;
  > div:last-child {
    align-self: center;
  }

  container: item-list / inline-size;

  ${mediaQueries.mobile(`
    gap: 200px;
  `)}
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-row-gap: 30px;
  place-items: center;

  container: grid-list / inline-size;

  ${mediaQueries.mobile(`
    grid-template-columns: repeat(2, 1fr);
  `)}

  @container (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr); /* 컨테이너 너비가 500px 이상일 때 */
  }
`;
