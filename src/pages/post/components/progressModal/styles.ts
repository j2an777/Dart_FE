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
    height: 350px;
    width: 350px;
    border-radius: 50%;
    background: ${props => `conic-gradient(from 0deg, rgba(139,0,139, 0.65) ${props.$progress * 3.6}deg, rgba(255,165,0, 0.65) ${props.$progress * 3.6}deg)`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap : 30px;
    transition: background 0.3s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        height: 300px;
        width: 300px;
        border-radius: 50%;
        background-color: #fff;
    }

    @media (max-width : 500px) {
        width : 300px;
        height : 300px;

        &::before {
            width : 260px;
            height : 260px;
        }
    }
`;

export const ProgressValue = styled.span`
    position: relative;
    ${typographyMap.t0};
    ${bolderMap.bold};
    ${colors.black};

    @media (max-width : 500px) {
        ${typographyMap.t2};
    }
`;

export const ProgressText = styled(Text)`
    ${typographyMap.t3};
    ${bolderMap.bold};
    ${colors.black};
    margin-top: 20px;
`;