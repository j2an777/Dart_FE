import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import { Text } from '@/components';
import { buttonSizeMap, buttonTypeMap } from '@/styles/button';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  width: 930px;
  padding: 40px 80px;
`;

export const Step = styled(Text)`
  position: absolute;
  top: -30px;
  left: -15px;
  font-size: 350px;
  font-weight: 500;
  letter-spacing: 5px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 350px;
  width: 100%;
  gap: 10px;
  p {
    padding: 0 10px;
  }
`;

export const BorderLine = styled.div`
  border-bottom: 1px solid ${colors.black};
`;

export const Block = styled.div`
  display: flex;
  gap: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Image = styled.div`
  width: 320px;
  height: 220px;
  padding: 10px;
  border: 1px solid ${colors.gray300};
`;

export const Form = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Button = styled.button`
  ${buttonSizeMap.xs}
  ${buttonTypeMap.reverseRectangleGray}
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray300};
  padding: 10px;
  img {
    width: 100px;
    height: 100px;
  }
  button {
    margin-left: auto;
    ${buttonSizeMap.xs}
    ${buttonTypeMap.reverseRectangleGray}
  }
`;
