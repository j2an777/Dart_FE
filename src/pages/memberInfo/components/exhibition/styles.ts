import styled from '@emotion/styled';
import Text from '@/components/Text';
import { colors } from '@/styles/colorPalette';
import { Icon } from '@/components';
import { buttonSizeMap, buttonTypeMap } from '@/styles/button';
import { containerQuery } from '@/styles/breakpoints';
import { Breakpoints } from '../../styles';

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
  ${containerQuery({
    containerName: 'member-info',
    styles: `
      height: 850px;
      footer {
        bottom: 50px;
      }
    `,
    breakpoints: Breakpoints.column,
  })}
`;

export const Box = styled.div`
  position: relative;
  padding: 0 20px;
`;

export const TicketContainer = styled.div`
  position: relative;
  max-width: 900px;
  width: 100%;
  height: 290px;
`;

export const TicketIcon = styled(Icon)``;

export const TicketBox = styled.div`
  position: absolute;
  max-width: 900px;
  width: 100%;
  aspect-ratio: 900 / 290;

  top: 0;
  display: flex;
  align-items: start;
  justify-content: start;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 39%;
  height: 100%;
  position: relative;
  padding: 20px 10px 20px 30px;
  gap: 20px;
`;

export const RightBox = styled.div`
  display: flex;
  width: 46%;
  height: 100%;
  padding: 15px;
`;

export const Thumbnail = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.black};
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled(Text)`
  width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled(Text)`
  color: ${colors.gray500};
  white-space: nowrap;
  overflow: hidden;
`;

export const HashTags = styled(Text)`
  width: 100%;
  color: ${colors.gray500};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Fee = styled(Text)`
  position: absolute;
  bottom: 30px;
  white-space: nowrap;
  overflow: hidden;
`;

export const ModalText = styled(Text)`
  display: flex;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  bottom: 30px;
  right: 10px;
  ${containerQuery({
    containerName: 'member-info',
    styles: `
      flex-direction: row;
      bottom: -50px;
      right: -100px;
      `,
    breakpoints: Breakpoints.mobile,
  })}
`;

export const Button = styled.button`
  z-index: var(--lower-zindex);
  ${buttonSizeMap.xs}
  ${buttonTypeMap.reverseRectangleGray}
`;
