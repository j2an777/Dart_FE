import { css } from '@emotion/react';
import { fontStyles } from './fonts';
import { colorPalette } from './colorPalette';
import { globalFontSize } from './globalFontSize';

export default css`
  ${fontStyles}
  ${colorPalette}

  :root {
    --background-zindex: -1;
    --lower-zindex: 1;
    --middle-zindex: 2;
    --high-zindex: 3;
    --detailList-zindex: 8;
    --select-zindex: 9;
    --dimmed-zindex: 10;
    --modal-zindex: 11;
    --notification-zindex: 12;
  }
  div {
    box-sizing: border-box;
  }

  img {
    pointer-events: none;
  }

  html {
    ${globalFontSize}
  }
  body,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;

    vertical-align: baseline;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    overflow-x: hidden;
    width: 100%;
    height: 100vh;
  }
  k ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    box-sizing: border-box;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  input {
    background-color: inherit;
    border: none;
    :focus {
      outline: none;
    }
    ::-ms-reveal {
      display: none;
    }
  }
  textarea {
    all: unset;
    white-space: normal;
    word-wrap: break-word;
    :focus {
      outline: none;
    }
    box-sizing: border-box;
  }
`;
