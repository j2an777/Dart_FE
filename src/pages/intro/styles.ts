import { LayoutMap } from "@/styles/layout";
import styled from "@emotion/styled";

export const Container = styled.div`
    width : 100vw;
    min-height : 100vh;
    ${LayoutMap.displayFlex};
    justify-content : center;
    flex-direction : column;
    overflow:hidden;
`;