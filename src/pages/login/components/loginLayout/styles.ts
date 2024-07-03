import { Icon } from '@/components';
import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';
import whyNotImg from '@/assets/images/whyNot.png';
import getInImg from '@/assets/images/getIn.png';

export const Container = styled.div`
  position: relative;
  ${LayoutMap.displayFlex}
  flex-direction: column;
`;

export const Header = styled.div`
  ${LayoutMap.displayFlex}

  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const BackIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
`;

export const WhyNotImg = styled.div`
  position: absolute;
  width: 900px;
  height: 200px;
  background-image: url(${whyNotImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translate(-35%, -120%);
`;

export const GetInImg = styled.div`
  position: absolute;
  width: 900px;
  height: 200px;
  background-image: url(${getInImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  bottom: 0;
  transform: translate(35%, 140%);
`;
