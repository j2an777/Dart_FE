import { containerQuery } from '@/styles/breakpoints';
import styled from '@emotion/styled';
import { SizeValues } from '@/hooks/useGetMediaQuerySize';
import { MainPageQuerySize } from '../../styles';

export const Container = styled.div<{ size?: SizeValues }>`
  position: relative;
  display: flex;
  ${({ size = 'desktop' }) => (size === 'mobile' ? 'flex-direction: column;' : null)}
  flex:1;
  justify-content: center;
  gap: 20px;

  > div:last-child {
    align-self: center;
  }

  ${containerQuery({
    breakpoints: MainPageQuerySize.twoRow,
    containerName: 'main-list',
    styles: `
    flex-direction: column;
    `,
  })}
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 1fr));
  width: 100%;

  grid-row-gap: 30px;
  align-items: flex-start;
  justify-item: center;

  ${containerQuery({
    breakpoints: MainPageQuerySize.twoRow,
    containerName: 'main-list',
    styles: `
      grid-template-columns: repeat(2, 1fr);
    `,
  })}
`;
