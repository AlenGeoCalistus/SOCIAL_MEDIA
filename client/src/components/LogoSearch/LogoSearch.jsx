import React from "react";
// import Logo from "../../img/logo.png";
// import "./LogoSearch.css";
// import { UilSearch } from "@iconscout/react-unicons";
import {Search} from '@mui/icons-material'
import { LogoSearchContainer, SearchContainer, SearchIcon, SearchInput } from "./StyledLogoSearch";
import { Paper } from "@mui/material";
const LogoSearch = () => {
  return (
    <LogoSearchContainer component={Paper} className="LogoSearch">
      {/* <img src={Logo} alt="" /> */}
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
