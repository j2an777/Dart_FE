import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 4px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
