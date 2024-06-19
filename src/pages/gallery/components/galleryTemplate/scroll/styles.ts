import styled from "@emotion/styled";

export const Container = styled.div`
    width : 100vw;
    min-height : auto;
    background-color : transparent;
`;

export const GalleryBox = styled.div`
    position : relative;
    width : 100%;
    height : 300px;
    pointer-events: none;

    h1 {
        position : absolute;
        top : 50%;
        left : 50%;
        transform : translate(-50%, -50%);
        color : black;
        font-size : 80px;
        width : 100%;
        text-align : center;
        font-weight : bold;
        text-transform : uppercase;

        @media (max-width : 900px) {
            font-size : 30px;
        }
    }
`;

export const ImageBox = styled.div`
    width : 500px;
    height : 500px;
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }

    @media (max-width : 900px) {
        width : 225px;
        height : 125px;
    }
`;

