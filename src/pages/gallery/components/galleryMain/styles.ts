import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const MainBlock = styled.div<{ degrees: number }>`
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    transform: perspective(1000px) rotateY(${props => `${props.degrees}deg`});
`;

export const ImageBox = styled.div<{ i: number; isFront: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(${props => `calc(${props.i} * 60deg)`}) translateZ(400px);
    -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
    }

    ${props => props.isFront && `
        &:hover div {
            opacity: 1;
            * {
                transform: translateY(0px);
            }
        }
    `}
`;

export const ContentBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    opacity: 0;
    transition: 0.6s;
    color: white;

    * {
        transform: translateY(25px);
        transition: transform 0.6s;
    }

    h1 {
        font-size: 16px;
    }

    p {
        width: 100%;
        height: 100%;
        font-size: 12px;
        word-break: break-word;
    }
`;

export const BtnBlock = styled.div`
    position: absolute;
    top: 100px;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: translateY(-50%);
`;

export const Btn = styled.div`
    color: white;
    cursor: pointer;
    font-size: 24px;

    &:hover {
        color: #aaa;
    }

    &:active {
        color: #aaa;
    }
`;
