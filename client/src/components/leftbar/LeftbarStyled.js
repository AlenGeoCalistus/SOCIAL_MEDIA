import { Grid } from "@mui/material";
import styled from "styled-components";

export const LeftBarContainer = styled(Grid)` 
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100vh;
  overflow: auto; 
  &::-webkit-scrollbar{
    display: none;
  }
`;
