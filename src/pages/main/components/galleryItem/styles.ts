import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  // 여기 밑에 부분은 바꿔도 됨
  padding: 10px;
  border-radius: 8px;
  transition: box-shadow 0.5s ease;
  :hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Thumbnail = styled.img`
  border: 5px solid ${colors.black};
  width: 220px;
  height: 220px;
`;
