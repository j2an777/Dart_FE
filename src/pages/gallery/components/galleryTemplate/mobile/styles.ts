import { LayoutMap } from "@/styles/layout";
import styled from "@emotion/styled";

export const Container = styled.div`
    width : 100vw;
    height : 100vh;
    margin-top : 50px;
    display : flex;
    flex-direction : column;
    justify-content : center;

    .mySwiper {
        width: 400px;
        height : 500px;
        margin-top : 50px;

        @media (max-width: 500px) {
            width : 90vw;
            margin-top : 30px;
        }
    }

    .swiperSlide {
        position: relative;
        width: 400px;
        height: 400px;

        &:hover {
            cursor: pointer;
        }
    }

    .swiper-pagination-bullet {
        background-color: white;
    }

    .swiper-pagination {
        bottom: 50px;
    }
`;

export const ImageBox = styled.div`
    width : 100%;
    height : 100%;
    ${LayoutMap.displayFlex};
    flex-direction : column;
    justify-content : center;
    gap : 20px;

    p {
        text-align : center;
    }

    img {
        width: 100%;
        height : 100%;
        object-fit: contain;
    }
`;

export const BtnBlock = styled.div`
    position : absolute;
    bottom : 7%;
    width : 100%;
    display: flex;
    justify-content : space-between;
    gap: 20px;
    padding : 0 50px;
    z-index : 9;
`;

export const Btn = styled.button`
  cursor: pointer;
`;