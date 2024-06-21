import { Icon, Text } from '@/components';
import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 32px;
`;

export const Title = styled(Text)`
  padding-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
`;

export const Ticket = styled.div`
  display: flex;
  justify-content: center;
`;

export const TicketContainer = styled.div`
  position: relative;
  section {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 10px;
    top: 150px;
    left: 35px;
  }
`;

export const GalleryName = styled(Text)`
  position: absolute;
  top: 40px;
  left: 35px;
`;

export const TicketIcon = styled(Icon)`
  width: 700px;
`;

export const Thumbnail = styled.div<{ profileImage: string }>`
  position: absolute;
  top: 15px;
  left: 290px;
  width: 290px;
  height: 200px;
  border: 1px solid ${colors.black};
  background-image: url(${(props) => props.profileImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
