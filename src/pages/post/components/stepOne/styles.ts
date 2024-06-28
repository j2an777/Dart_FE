import { Icon } from '@/components';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding: 150px 80px 50px;
  width: 100%;
  border-bottom: 2px solid ${colors.black};
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Step = styled(Icon)`
  position: absolute;
  top: 40px;
  right: 2px;
`;

export const Box = styled.div`
  position: absolute;
  top: 90%;
  right: 40px;
`;
