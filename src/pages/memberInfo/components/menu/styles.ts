import { colors } from '@/styles/colorPalette';
import styled from '@emotion/styled';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 850px;
  padding: 40px 0 0 0;
  border-left: 2px solid ${colors.black};
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  border-bottom: 2px solid ${colors.black};
  width: 100%;
`;

export const MenuBlock = styled.button<{ isActive?: boolean }>`
  flex: 1;

  padding: 15px;
  cursor: pointer;
  background: ${({ isActive = colors.white }) => isActive && colors.black};
  color: ${({ isActive = colors.black }) => isActive && colors.white};

  &:hover {
    background: ${colors.black};
    color: ${colors.white};
  }
  &:nth-of-type(1) {
    border-right: 2px solid ${({ isActive = colors.black }) => isActive && colors.white};
  }
`;
