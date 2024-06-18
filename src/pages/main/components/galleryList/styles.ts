import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-width: 760px;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  place-items: flex-end;
`;
