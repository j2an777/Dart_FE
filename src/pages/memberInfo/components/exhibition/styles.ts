import styled from '@emotion/styled';
import Text from '@/components/Text';
import { colors } from '@/styles/colorPalette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const TicketContainer = styled.div`
  position: relative;
`;

export const TicketSVG = styled.svg`
  width: 900px;
  height: 290px;
`;

export const Thumbnail = styled.div<{ profileImage: string }>`
  position: absolute;
  top: 15px;
  left: 375px;
  width: 368px;
  height: 259px;
  border: 1px solid ${colors.black};
  background-image: url(${(props) => props.profileImage});
  background-size: cover;
  background-position: center;
`;

export const Title = styled(Text)`
  position: absolute;
  top: 35px;
  left: 35px;
`;

export const Date = styled(Text)`
  position: absolute;
  top: 70px;
  left: 35px;
  color: ${colors.gray500};
`;

export const HashTags = styled(Text)`
  position: absolute;
  top: 105px;
  left: 35px;
  width: 300px;
  color: ${colors.gray500};
  white-space: normal;
`;

export const Fee = styled(Text)`
  position: absolute;
  top: 225px;
  left: 35px;
`;
