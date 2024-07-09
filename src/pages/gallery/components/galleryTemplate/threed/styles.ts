import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position : absolute;
  bottom : 0;
`;

export const BtnBlock = styled.div`
    width : 100%;
    position: absolute;
    bottom: 50px;
    left : 50%;
    display: flex;
    justify-content : space-between;
    gap: 20px;
    padding : 0 300px;
    transform: translateX(-50%);

    @media (max-width : 1024px) {
        width : 90vw;
        padding : 0 50px;
    }
`;

export const Btn = styled.div`
    cursor: pointer;
`;