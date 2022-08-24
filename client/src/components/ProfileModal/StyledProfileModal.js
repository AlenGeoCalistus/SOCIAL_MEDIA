import styled from "styled-components";
import { Box, Button } from "@mui/material";

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const YourInfo = styled("h3")``;


export const FormInputContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  height: 2rem;
  width: 90%;
`;
export const Input = styled("input")`
  border: none;
  outline: none;
  background-color: var(--inputColor);
  border-radius: 8px;
  padding: 20px;
  flex: 1;
`;
export const RelationContainer = styled(Box)``;
export const ProfileImagesContainer = styled(Box)``;
export const FileInput = styled("input")``;
export const InfoButton = styled(Button)`
  width: 6rem;
  height: 2rem;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white !important;
  border: none !important;
  border-radius: 0.5rem !important;
  background: var(--buttonBg) !important;
  transition: all 100ms ease-out !important;
  &:hover {
    color: var(--orange) !important;
    border: 2px solid var(--orange) !important;
    cursor: pointer;
    background: transparent !important;
  }
`;
