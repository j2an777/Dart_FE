import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
`;

export const Box = styled.div`
  position: relative;
  max-width: 1280px;
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

export const Block = styled.div`
  display: flex;
  flex: 1;
  min-height: 800px;
  width: 100%;
  height: 100%;
`;
