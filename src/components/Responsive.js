import React from "react";
import { css } from "styled-components";
export const mobile = (props) => {
  return css`
    @media screen {
      max-width: 380px;
      ${props};
    }
  `;
};

// export default Responsive;

// @media only screen and (max-width: 380px) {
//   ${props};
// }
