import { Colors, colors } from '@/styles/colorPalette';
import * as S from './styles';
import { IconValues } from '../icon';

interface Props {
  percentage: number;
  title: string;
  fill: Colors;
  icon: IconValues;
}

const CouponIcon = ({ percentage, title, fill, icon }: Props) => {
  return (
    <S.Container>
      <S.CouponSvg width="340" height="390" viewBox="0 0 340 390" fill="none">
        <g filter="url(#filter0_d_703_451)">
          <path
            d="M20 30C20 24.4772 24.4772 20 30 20H310C315.523 20 320 24.4772 320 30V172.845C320 175.521 318.612 178.005 316.333 179.407C311.556 182.346 311.419 189.241 316.076 192.366L316.458 192.623C318.672 194.109 320 196.6 320 199.266V360C320 365.523 315.523 370 310 370H30C24.4772 370 20 365.523 20 360V199.648C20 196.784 21.5694 194.151 24.0879 192.789C29.4829 189.871 29.5524 182.154 24.2109 179.139L24.025 179.034C21.5381 177.631 20 174.997 20 172.141V30Z"
            fill={colors[fill] || colors.cyan}
          />
        </g>
        <line x1="55" y1="193.5" x2="75" y2="193.5" stroke="white" stroke-width="3" />
        <line x1="90" y1="193.5" x2="110" y2="193.5" stroke="white" stroke-width="3" />
        <line x1="125" y1="193.5" x2="145" y2="193.5" stroke="white" stroke-width="3" />
        <line x1="160" y1="193.5" x2="180" y2="193.5" stroke="white" stroke-width="3" />
        <line x1="195" y1="193.5" x2="215" y2="193.5" stroke="white" stroke-width="3" />
        <line x1="230" y1="193.5" x2="250" y2="193.5" stroke="white" stroke-width="3" />
        <line x1="265" y1="193.5" x2="285" y2="193.5" stroke="white" stroke-width="3" />
        <defs>
          <filter
            id="filter0_d_703_451"
            x="0"
            y="0"
            width="340"
            height="390"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_703_451"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_703_451"
              result="shape"
            />
          </filter>
        </defs>
      </S.CouponSvg>
      <S.Percentage typography="t0" bold="bold" color="white">
        {percentage}
        <span>%</span>
      </S.Percentage>
      <S.Title typography="t1" bold="bold" color="white">
        {title}
      </S.Title>
      <S.StyledIcon value={icon} />
    </S.Container>
  );
};

export default CouponIcon;
