import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';
import NotificationImage from '@/assets/images/notification.png';
import { Icon } from '..';
import { css } from '@emotion/react';

export const Container = styled.div<{ isExpand: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 90px;
  width: 250px;
  height: 80px;
  z-index: var(--notification-zindex);
  border: 3px solid ${colors.gray100};
  border-right: none;
  background-image: url(${NotificationImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px;
  justify-content: space-between;
  transition: transform 1s ease;
  > p:nth-of-type(2) {
    align-self: flex-end;
  }

  ${({ isExpand }) =>
    isExpand
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `}
`;

export const CancelIcon = styled(Icon)`
  position: absolute;
  right: 10px;
`;
