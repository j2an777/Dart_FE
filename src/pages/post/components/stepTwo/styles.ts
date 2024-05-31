import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 40px 80px;
`;

export const Step = styled.div`
  position: absolute;
  top: -60px;
  left: -15px;
  font-size: 350px;
  font-weight: 500;
  letter-spacing: 5px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 400px;
  width: 100%;
  gap: 10px;
  p {
    padding: 0 10px;
  }
`;

export const BorderLine = styled.div`
  border-bottom: 1px solid ${colors.black};
`;
