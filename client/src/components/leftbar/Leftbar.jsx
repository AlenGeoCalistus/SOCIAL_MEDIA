import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import { LeftBarContainer } from "./LeftbarStyled";
// import "./ProfileSide.css";
const Leftbar = () => {
  return ( 
      <LeftBarContainer flex={3} p={2} spacing={2}>
        <LogoSearch />
        <ProfileCard location="homepage" />
        <FollowersCard />
      </LeftBarContainer>
  );
};

export default Leftbar;
