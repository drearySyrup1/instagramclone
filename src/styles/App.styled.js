import styled, { css } from "styled-components";
import { mediaSizes } from "../mediaSizes";
const threeCol = css`
  grid-template-columns: 350px 3fr 1.2fr;
`;
const twoCol = css`
  grid-template-columns: 350px 1fr;
`;
const threeColMedia = css`
  @media (width <= ${mediaSizes.l}) {
    grid-template-columns: 255px 3fr 1.2fr;
  }
  @media (width <= ${mediaSizes.M}) {
    grid-template-columns: min-content 3fr 1.2fr;
  }

  @media (width <= ${mediaSizes.S}) {
    grid-template-columns: min-content 1fr;
  }

  @media (width <= ${mediaSizes.SS}) {
    grid-template-columns: 1fr;
  }
`;

const twoColMedia = css`
  @media (width <= ${mediaSizes.L}) {
    grid-template-columns: 255px 1fr;
  }
  @media (width <= ${mediaSizes.M}) {
    grid-template-columns: min-content 1fr;
  }

  @media (width <= ${mediaSizes.S}) {
    grid-template-columns: min-content 1fr;
  }

  @media (width <= ${mediaSizes.SS}) {
    grid-template-columns: 1fr;
  }
`;

const getLayout = (size) => {
  if (size === "2") return twoCol;
  if (size === "3") return threeCol;
};

const getLayoutMedia = (size) => {
  if (size === "2") return twoColMedia;
  if (size === "3") return threeColMedia;
};

export const Wrapper = styled.div`
  display: grid;
  ${({ size }) => getLayout(size)}
  grid-auto-rows: 1fr;
  height: 100vh;

  ${({ size }) => getLayoutMedia(size)}

  && .grey {
    color: grey;
  }

  && .bold {
    font-weight: bold;
  }
`;
