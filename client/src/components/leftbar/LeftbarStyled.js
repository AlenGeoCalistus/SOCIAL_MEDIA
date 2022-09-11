import { Grid } from "@mui/material";
import styled from "styled-components";
import { device } from "../../breakpoints";


export const LeftBarContainer = styled(Grid)` 
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  overflow-y: auto; 
  &::-webkit-scrollbar{
    display: none;
  }
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
  }
`;
