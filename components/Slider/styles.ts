import { css, cx } from '@emotion/css';

export const bannerWrapper = css`
  /* height: 520px; */
  /* position: relative;
  background-color: #000; */
  & img {
    opacity: 0.6;
  }
  & nav.awssld__bullets {
    position: absolute;
    bottom: 15px !important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    & button {
      background-color: #c9173d;
    }
  }

  @media screen and (max-width: 900px) {
    height: auto;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 480px) {
    & nav.awssld__bullets {
      position: absolute;
      bottom: 5px !important;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    & nav.awssld__bullets button {
      width: 8px;
      height: 8px;
    }

  }
  
`;