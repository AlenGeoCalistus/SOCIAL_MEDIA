import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import { ProfileSideContainer } from "./ProfileLeftStyled";

const ProfileLeft = () => {
  return (
    <ProfileSideContainer flex={3} p={2} spacing={2} className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </ProfileSideContainer>
  );
};

export default ProfileLeft;
