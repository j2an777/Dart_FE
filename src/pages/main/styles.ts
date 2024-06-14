import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 80px;
  gap: 40px; // 수정예정
  max-width: 1440px;
  height: calc(100vh - 80px);
  margin: auto;
  justify-content: space-between;
  > div:last-child {
    align-self: center;
  }
`;

export const Line = styled.div`
  position: absolute;
  display: flex;
  bottom: 80px;
  right: 80px;
  width: 320px;
  border-bottom: 1px solid ${colors.black};
  justify-content: flex-end;

  > p {
  }
`;

export const BottomText = styled(Text)`
  position: absolute;
  transform: translateY(-10px);
  background-color: white;
  padding-left: 30px;
`;
