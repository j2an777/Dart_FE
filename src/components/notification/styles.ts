import styled from '@emotion/styled';
import { Icon } from '..';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';

export const Container = styled.div`
  position: absolute;
  left: 95%;
  top: 80%;
  z-index: 3;
`;

export const AlarmIcon = styled(Icon)`
  border-radius: 100%;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 4;
`;

export const ExclamationIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-40%, -40%);
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  transform: translate(-105%, -100%);
  background-color: ${colors.white};
  border-radius: 10px;
  border: 1px solid ${colors.black};
  padding: 7px;
`;

export const Outline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid ${colors.black};
`;

export const TitleBox = styled.div`
  ${LayoutMap.displayFlex}
  justify-content: space-between;
  padding: 10px 12px;
  width: 100%;
`;

export const NotificationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  gap: 30px;
  border-top: 1px solid ${colors.black};
`;

export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  overflow: scroll;
  overflow-x: hidden;
`;

export const NotificationItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${colors.black100};
  cursor: pointer;
  :hover {
    text-decoration: underline;
    font-weight: 700;
  }
`;
