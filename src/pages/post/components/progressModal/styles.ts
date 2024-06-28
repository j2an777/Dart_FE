import styled from '@emotion/styled';
import { Text } from '@/components';
import { LayoutMap } from '@/styles/layout';
import { bolderMap, typographyMap } from '@/styles/typography';
import { colors } from '@/styles/colorPalette';

export const Container = styled.div`
    position: relative;
    ${LayoutMap.absoluteCenter}
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: auto;
    z-index: var(--modal-zindex);
    gap: 20px;
`;

interface ProgressProps {
    $progress: number;
}

export const CircularProgress = styled.div<ProgressProps>`
    position: relative;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    background: ${props => `conic-gradient(from 0deg, rgba(139,0,139, 0.65) ${props.$progress * 3.6}deg, rgba(255,165,0, 0.65) ${props.$progress * 3.6}deg)`};
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        height: 300px;
        width: 300px;
        border-radius: 50%;
        background-color: #fff;
    }
`;

export const ProgressValue = styled.span`
    position: relative;
    ${typographyMap.t0};
    ${bolderMap.bold};
    ${colors.black};
`;

export const ProgressText = styled(Text)`
    ${typographyMap.t3};
    ${bolderMap.bold};
    ${colors.black};
    margin-top: 20px;
`;