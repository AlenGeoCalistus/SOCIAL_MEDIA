import { Grid } from "@mui/material";
import styled from "styled-components";
import { device } from "../../breakpoints";
export const RightbarContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  overflow-y: auto;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`;
