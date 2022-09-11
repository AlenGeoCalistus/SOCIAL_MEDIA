import styled from "styled-components";
import { Box } from "@mui/material";
import { device } from "../../breakpoints";

export const LogoSearchContainer = styled(Box)`
  display: flex;
  /* gap: 0.75rem; */
  border-radius: 20px !important;
`;

export const SearchContainer = styled(Box)`
  display: flex;
  background-color: var(--inputColor);
  border-radius: 10px;
  padding: 2px; 
`;

export const SearchInput = styled("input")`
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 5px;
  width: 14rem;
  @media ${device.tablet}{
    width: 12.9rem;
  }
  @media ${device.laptop}{
    width: 13.9rem;
  }
`;

export const SearchIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #8224e3 0, #a968ec 50%, #8224e3 100%);
  border-radius: 20px;
  padding: 4px;
  color: white;
  cursor: pointer;
`;
