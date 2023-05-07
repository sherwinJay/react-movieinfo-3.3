import { css, cx } from '@emotion/css';

export const castContainer = css`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  @media screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 2;
    max-width: 600px;
    overflow: auto;
  }
`;