import styled from "@emotion/styled";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface MainBlockProps {
    degrees: number;
    size: number;
}

export const MainBlock = styled.div<MainBlockProps>`
    position: relative;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    transform-style: preserve-3d;
    transition: transform 1.5s;
    transform: perspective(1000px) rotateY(${props => `${props.degrees}deg`});

    .galleryTitle {
        position : absolute;
        top : 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

interface ImageBoxProps {
    i: number;
    isFront: boolean;
    dataDegree: number;
    transZ: number;
}

export const ImageBox = styled.div<ImageBoxProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(${props => `calc(${props.i} * ${props.dataDegree}deg)`}) translateZ(${props => `${props.transZ}px`});
    -webkit-box-reflect: below 0px linear-gradient(transparent, transparent, #0004);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
        transition: transform 0.5s ease;
    }

    ${props => props.isFront && `
        &:hover {
            div {
                opacity: 1;
                transform: scale(1.1);
                cursor: pointer;
                * {
                    transform: translateY(0px);
                }
            }

            img {
                transform : scale(1.1);
            }
        }
    `}
`;

export const ContentBox = styled.div<{size: number}>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    gap : 10px;
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

    p {
        word-break: break-word;
    }
`;

export const BtnBlock = styled.div`
    width : 100%;
    position: absolute;
    bottom: 30px;
    left : 0;
    display: flex;
    justify-content : space-between;
    gap: 20px;
    padding : 0 500px;
    transform: translateY(-50%);
`;

export const Btn = styled.div`
    cursor: pointer;
`;
