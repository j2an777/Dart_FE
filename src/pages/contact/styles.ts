import { Text } from '@/components';
import { LayoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import styled from '@emotion/styled';
import Logo from '@/assets/images/luckySeven.png';

export const Container = styled.div`
    width: 100vw;
    height: auto;
    padding: 50px 170px 0px 170px;
    ${LayoutMap.displayFlex};
    flex-direction: column;
    overflow: hidden;

    @media (max-width: 500px) {
        padding: 0 20px;
    }
`;

export const TopBox = styled.div`
    width: 100%;
    height: auto;
    ${LayoutMap.displayFlex};
    gap : 40px;

    .mainText {
        background-image: url(${Logo});
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
        justify-content: center;
    }

    .subText {
        @media (max-width : 500px) {
            ${typographyMap.t3};
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`; 

export const TeamText = styled(Text)`
    width: 50%;
    height: 200px;
    ${LayoutMap.displayFlex};

    @media (max-width: 1024px) {
        width : 100%;
    }
`;

export const BottomBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top : 50px;

    .my-masonry-grid {
        display: flex;
        width: 100%;
        gap : 50px;
    }
    .my-masonry-grid_column {
        background-clip: padding-box;
    }
`;

export const Member = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    gap : 15px;
`;

export const MemberImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 20px;
`;

export const MemberInfo = styled.div`
    text-align: center;
    ${LayoutMap.displayFlex};
    gap : 15px;
    margin-bottom : 50px;

    .wall1 {
        width : 2px;
        height : 10px;
        background-color: black;
    }

    .wall2 {
        width : 1px;
        height : 10px;
        background-color: black;
    }
`;
export const MemberDescription = styled(Text)`
    margin-top : 20px;
`;
export const MemberTeam = styled(Text)``;
export const MemberRole = styled(Text)``;
export const MemberName = styled(Text)``;