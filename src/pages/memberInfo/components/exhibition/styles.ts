import styled from '@emotion/styled';
import Text from '@/components/Text';
import { colors } from '@/styles/colorPalette';
import { Icon } from '@/components';
import { buttonSizeMap, buttonTypeMap } from '@/styles/button';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 40px;
  height: 100%;

  footer {
    position: absolute;
    bottom: 100px;
  }
`;

export const Box = styled.div`
  position: relative;
  padding: 0 20px;
`;

export const Block = styled.div`
  position: absolute;
  bottom: 35px;
  left: 150px;
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  z-index: var(--lower-zindex);
  ${buttonSizeMap.xs}
  ${buttonTypeMap.reverseRectangleGray}
`;

export const TicketContainer = styled.div`
  position: relative;
`;

export const TicketIcon = styled(Icon)`
  max-width: 900px;
  width: 100%;
  height: 290px;
`;

export const Thumbnail = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 15px;
  left: 375px;
  width: 368px;
  height: 259px;
  border: 1px solid ${colors.black};
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled(Text)`
  position: absolute;
  top: 35px;
  left: 35px;
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

export const ModalText = styled(Text)`
  display: flex;
  justify-content: center;
`;
