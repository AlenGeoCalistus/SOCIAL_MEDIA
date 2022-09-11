import styled from "styled-components";
import { Grid } from "@mui/material";
import { device } from "../../breakpoints";

export const PostSideContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  overflow-y: auto;
  @media ${device.mobileS} {
    /* flex: 100%; */
  }
`;
