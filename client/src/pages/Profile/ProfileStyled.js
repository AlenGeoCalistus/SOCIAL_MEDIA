import styled from "styled-components";
import { Box, Grid, Stack } from "@mui/material";

export const ProfileContainer = styled(Stack)`
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto 20rem;
  gap: 1rem;
`;

export const ProfileCenter = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Wrapper = styled(Grid)`
  /* display: flex;
  flex-direction: column;
  gap: 1rem; */
`;

