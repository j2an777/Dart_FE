import { Text } from '@/components';
import { buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 2px solid ${colors.black};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
`;

export const Title = styled(Text)`
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
`;

export const Button = styled.button`
  ${buttonTypeMap.rectangleBlack}
  padding: 20px;
`;
