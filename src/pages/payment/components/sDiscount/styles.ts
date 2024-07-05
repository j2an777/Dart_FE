import { Text } from '@/components';
import { containerQuery } from '@/styles/breakpoints';
import { buttonTypeMap } from '@/styles/button';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Breakpoints } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  padding: 20px 40px;
  gap: 20px;

  ${containerQuery({
    containerName: 'payment',
    styles: `
      flex-direction: column;
      align-items: center;
    `,
    breakpoints: Breakpoints.mobile,
  })}
  section {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const Title = styled(Text)`
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
`;

export const CouponBlock = styled.div<{ hasTitle: string }>`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  color: ${(props) => (props.hasTitle ? colors.black : colors.gray500)};
  background-color: ${(props) => (props.hasTitle ? colors.white : colors.gray100)};
  border: ${(props) => (props.hasTitle ? '2px solid black' : 'none')};
`;

export const Button = styled.button`
  ${buttonTypeMap.rectangleBlack}
  padding: 20px 30px;
  white-space: nowrap;
`;
