import styled from "styled-components";
import { Stack } from "@mui/material";
import { device } from "../../breakpoints";

export const HomeContainer = styled(Stack)`
  position: relative;
  display: grid;
  gap: 1rem;
  /* grid-template-columns: 18rem auto 20rem; */
  @media ${device.mobileS}{
    grid-template-columns: 100%;
  }
  @media ${device.tablet}{
    grid-template-columns: 100%;
  }
  @media ${device.laptop}{
    grid-template-columns: 18rem auto 20rem;
  }

`;
