import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 70px);
  overflow: auto;

  /* 스크롤 스타일 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(150, 150, 150, 0.5);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(85, 85, 85, 0.5);
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Circle = styled.div`
  border-radius: 50%;
  background: ${colors.cyan};
  width: 10px;
  height: 10px;
`;
