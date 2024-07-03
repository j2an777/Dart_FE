import { Text } from "@/components";
import { LayoutMap } from "@/styles/layout";
import { bolderMap, typographyMap } from "@/styles/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
    position : relative;
    width : 700px;
    height : 60px;
    ${LayoutMap.displayFlex};
    justify-content : center;
    padding-bottom : 10px;
    border-bottom : 1px solid black;

    @media (max-width: 1024px) {
        width : 90vw;
    }
`;

export const HeaderTitle = styled(Text)`
    ${typographyMap.t2};
    ${bolderMap.bold};

    @media (max-width: 1024px) {
        ${typographyMap.t3};
    }
`;

export const BackBox = styled.div`
    position : absolute;
    left: 0;
`;