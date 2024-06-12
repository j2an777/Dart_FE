import { css } from '@emotion/react';
import { colorPalette } from './colorPalette';
import { fontStyles } from './fonts';

export default css`
  ${fontStyles}
  ${colorPalette}
  :root {
    --detailList-zindex: 8;
    --select-zindex: 9;
    --dimmed-zindex: 10;
    --modal-zindex: 11;
  }
  div {
    box-sizing: border-box;
  }

  html {
    scrollbar-gutter: stable;
  }

  html,
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
  img,
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
  }
  ol,
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
