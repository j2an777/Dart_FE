import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  ${LayoutMap.displayFlex}
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
`;

export const Thumbnail = styled.img`
  box-sizing: border-box;
  border: 0px solid ${colors.black};
  transition: filter 0.5s ease;
  width: 100%;
  max-width: 240px;
  height: auto;
  aspect-ratio: 1 / 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ContentBox = styled.div`
    position: absolute;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    opacity: 0;
    transition: 0.6s;
    color: white;
    cursor: pointer;

    * {
      transform: translateY(25px);
      transition: transform 0.6s;
    }

    &:hover {
        opacity: 1;

        * {
          transform: translateY(0px);
        }
      }
    }

    .description {
      white-space: normal;
      word-break: break-word;
      text-align: center;

      @media (max-width : 500px) {
        ${typographyMap.t7};
      }
    }
`;
