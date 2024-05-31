import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding: 140px 80px 25px;
  width: 100%;
  border-bottom: 2px solid ${colors.black};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Step = styled.div`
  position: absolute;
  top: -60px;
  right: -50px;
  font-size: 350px;
  font-weight: 500;
  letter-spacing: 10px;
`;
