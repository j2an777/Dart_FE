import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const splash = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const Container = styled.div`
    width : 100vw;
    height : 100vh;
    overflow : auto;
    margin: 50px 0 0 0;
    padding : 0 30px;
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;

    scrollbar-width: none;  // Firefox
    -ms-overflow-style: none;  // IE and Edge
    &::-webkit-scrollbar {  // WebKit
        display: none;
    }

    .Title {
        position : absolute;
        top : 15%;
        animation : ${splash} 3s infinite;
    }
`;

export const GridGallery = styled.div`
    width : 100%;
    max-width : 950px;
    min-height : 500px;
    margin : 0 auto;
    padding : 50px 20px;
    display : grid;
    grid-template-columns : repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    grid-gap : 20px;

    scrollbar-width: none;  // Firefox
    -ms-overflow-style: none;  // IE and Edge
    &::-webkit-scrollbar {  // WebKit
        display: none;
    }
    
`;

export const ImageBox = styled.div`
    position: relative;
    overflow: hidden;

    &:nth-of-type(7n+1) {
        grid-column: span 2;
        grid-row: span 2;
    }

    img {
        width : 100%;
        height : 100%;
        object-fit : cover;
        transition : all 0.5s ease;
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }
`;

export const ContentBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    opacity: 0;
    transition: 0.6s;
    color: white;
    cursor: pointer;

    * {
      transform: translateY(25px);
      transition: transform 0.6s;
    }

    &:hover {
        opacity: 1;
        transform: scale(1.1);

        * {
          transform: translateY(0px);
        }
      }
    }

    .p {
      word-break: break-word;
    }

    .description {
      white-space: normal;
      word-break: break-word;
      text-align: center;
    }
`;