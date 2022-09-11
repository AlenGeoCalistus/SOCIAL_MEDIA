import React from "react";
import {Search} from '@mui/icons-material'
import { LogoSearchContainer, SearchContainer, SearchIcon, SearchInput } from "./StyledLogoSearch";
import { Paper } from "@mui/material";
const LogoSearch = () => {
  return (
    <LogoSearchContainer component={Paper} className="LogoSearch">
      <SearchContainer className="Search">
        <SearchInput type="text" placeholder="Search..." />
        <SearchIcon className="s-icon">
          <Search />
        </SearchIcon>
      </SearchContainer>
    </LogoSearchContainer>
  );
};

export default LogoSearch;
