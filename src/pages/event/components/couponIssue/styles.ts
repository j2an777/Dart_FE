import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
`;
