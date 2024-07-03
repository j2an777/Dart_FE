import { LayoutMap } from '@/styles/layout';
import { bolderMap, typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';
import modalBottom from '@/assets/images/modalbottom.png';
import { fadeUp } from '@/pages/gallery/components/galleryDetail/styles';
import { Icon } from '@/components';

export const Wrapper = styled.div<{ infoBg: string }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${props => props.infoBg });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: var(--dimmed-zindex);
`;

export const Container = styled.div`
  ${LayoutMap.absoluteCenter}
  display: flex;
  flex-direction: column;
  width: 800px;
  z-index: var(--modal-zindex);
  animation: ${fadeUp} 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width : 90vw;
  }
`;

export const CancelIcon = styled(Icon)`
  position: absolute;
  right: 20px;
  top: 20px;
`;
export const MainLogo = styled.img`
  width: 70px;
  height: 30px;
`;

export const InfoBox = styled.div<{ thumbnail: string }>`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 100px;
  box-sizing: border-box;
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 12;

  @media (max-width: 1024px) {
    padding : 100px 20px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const DescriptionBlock = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  #descript {
    color: white;
    ${typographyMap.t6};
    ${bolderMap.thin};
    word-break: break-word;
  }
`;

export const Top = styled.div`
  ${LayoutMap.displayFlex};
  justify-content: flex-start;
  gap: 20px;
`;

export const User = styled.div`
  ${LayoutMap.displayFlex};
  justify-content: flex-start;
  gap: 5px;
  cursor: pointer;

  p {
    position: relative;

    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 1px;
      background-color: currentColor;
    }
  }
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
`;

export const ButtonBlock = styled.div`
  width : 100%;
  ${LayoutMap.displayFlex};
  justify-content: flex-start;
  gap: 10px;

  .price {
    ${LayoutMap.displayFlex};
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color: black;
    border-radius: 30px;
    color: white;
  }

  .topay {
    ${LayoutMap.displayFlex};
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color: white;
    border-radius: 30px;
    color: black;

    &:hover {
      cursor: pointer;
      background-color: black;
      border: none;
      color: white;
    }
  }
`;

export const HashTags = styled.div`
  ${LayoutMap.displayFlex};
  justify-content: flex-start;
  gap: 10px;
`;

export const MapBlock = styled.div`
  ${LayoutMap.displayFlex};
  gap : 10px;
  justify-content: flex-start;

  &:hover p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ReviewBox = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px 150px 10px 110px;
  box-sizing: border-box;
  background-color: black;
  background-image: url(${modalBottom});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ScoreBlock = styled.div`
  ${LayoutMap.displayFlex};
  justify-content: space-between;

  a {
    &:hover {
      p {
        text-decoration: underline;
      }
    }
  }
`;

export const ScoreWrap = styled.div`
  ${LayoutMap.displayFlex};
  justify-content: flex-start;
  gap: 10px;
`;

export const Score = styled.div`
  ${LayoutMap.displayFlex};
  margin-right: 30px;
`;