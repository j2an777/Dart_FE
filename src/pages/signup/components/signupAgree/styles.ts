import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AgreeBox = styled.div`
  padding: 30px 15px 10px 15px;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.white};
  height: 1px;
`;
