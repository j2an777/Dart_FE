import { Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.form`
  background-color: ${colors.black100};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  padding: 140px 0;
  gap: 50px;
`;

export const TitleBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
`;

export const Title = styled(Text)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const ButtonBox = styled.div`
  bottom: 0;
  display: flex;
  gap: 40px;
`;
