import { css } from '@emotion/react';

export const fontStyles = css`
  @font-face {
    font-family: 'PretendardBold', sans-serif;
    src:
      url('@/assets/fonts/Pretendard-Bold.otf') format('otf'),
      url('@/assets/fonts/Pretendard-Bold.ttf') format('ttf');
  }
  @font-face {
    font-family: 'Pretendard', sans-serif;
    src:
      url('@/assets/fonts/Pretendard-Regular.otf') format('otf'),
      url('@/assets/fonts/Pretendard-Regular.ttf') format('ttf');
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;
