import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import Text from '../Text';
import { Icon } from '..';

export const Container = styled.div<{ isExpand: boolean }>`
  ${LayoutMap.displayFlex}
  ${LayoutMap.pageLayout}
  height: 80px;
  max-width: 1440px;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 500px) {
    .mainLogo {
      display: ${({ isExpand }) => (isExpand ? 'none' : 'block')};
    }
    .buttonBox {
      visibility: ${({ isExpand }) => (isExpand ? 'visible' : 'hidden')};
      transform: ${({ isExpand }) => (isExpand ? 'translateX(0)' : 'translateX(120%)')};
      z-index: var(--high-zindex);
      position: absolute;
      background-color: ${colors.gray50};
      justify-content: space-between;
    }
    .navItemBlock {
      position: absolute;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      transform: translateY(60px);
    }
  }
`;

export const NavbarBackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  background-color: ${colors.gray50};
`;

export const MainLogo = styled.img`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  z-index: var(--middle-zindex);
`;

export const ButtonBox = styled.ul`
  ${LayoutMap.displayFlex}
  transition: all 0.5s ease;
  gap: 20px;
  justify-content: flex-end;
  width: calc(100% - 40px);

  z-index: var(--middle-zindex);
`;

export const UserBoxContainer = styled.div`
  ${LayoutMap.displayFlex}
  gap: 10px;
  position: relative;
  cursor: pointer;
`;

export const MoreBox = styled.div`
  position: absolute;
  ${LayoutMap.displayFlex}
  flex-direction: column;
  background-color: ${colors.white};
  bottom: 0;
  transform: translate(-25%, 110%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: var(--detailList-zindex);
`;

export const MoreItem = styled(Text)<{ isLast: boolean }>`
  ${LayoutMap.displayFlex}
  justify-content:center;
  width: 120px;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.gray100};
  :hover {
    background-color: ${colors.gray100};
  }
`;

export const NavItemBlock = styled.div`
  ${LayoutMap.displayFlex}
  gap: 30px;
`;

export const NavItem = styled(Text)`
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 50%;
    background-color: black;
    transition:
      width 0.3s ease,
      left 0.3s ease;
  }
`;

export const HamburgerIcon = styled(Icon)<{ isExpand: boolean }>`
  display: none;
  @media (max-width: 500px) {
    display: ${({ isExpand }) => (isExpand ? 'none' : 'block')};
  }
`;

export const CancelIcon = styled(Icon)`
  display: none;

  @media (max-width: 500px) {
    display: block;
  }
`;
