import { Text } from '@/components';
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
  max-width: 700px;
`;

export const TicketBox = styled.div`
  position: absolute;
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
  gap: 50%;

  section {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
`;

export const RightBox = styled.div`
  display: flex;
  width: 46%;
  height: 100%;
  padding: 15px;
`;

export const GalleryName = styled(Text)`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const Nickname = styled(Text)`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`;

export const Thumbnail = styled.div<{ profileImage: string }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.black};
  background-image: url(${(props) => props.profileImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
