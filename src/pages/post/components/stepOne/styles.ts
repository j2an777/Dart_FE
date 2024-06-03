import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Text } from '@/components';

export const Container = styled.div`
  position: relative;
  padding: 160px 80px 50px;
  width: 100%;
  border-bottom: 2px solid ${colors.black};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Step = styled(Text)`
  position: absolute;
  top: -40px;
  right: -50px;
  font-size: 350px;
  font-weight: 500;
  letter-spacing: 10px;
`;
