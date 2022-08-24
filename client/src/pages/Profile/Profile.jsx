import React from "react";
import Feed from "../../components/feed/Feed";
import PostSide from "../../components/feed/Feed";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import Rightbar from "../../components/rightbar/Rightbar";
import RightSide from "../../components/rightbar/Rightbar";
import Sponcored from "../../components/sponcered/Sponcored";
import Topbar from "../../components/topbar/Topbar";

// import "./Profile.css";
import { ProfileCenter, ProfileContainer, Wrapper } from "./ProfileStyled";
const Profile = () => {
  return (
    <>
      <Topbar />
      <ProfileContainer direction="row" spacing={2}>
        <ProfileLeft />
        <Wrapper flex={6} p={2} spacing={2}>
        <ProfileCenter>
          <ProfileCard location="profilePage" />
          <Feed />
        </ProfileCenter>
        </Wrapper>
        <Rightbar>
          <Sponcored/>
        </Rightbar>
        {/* <Rightbar/> */}
      </ProfileContainer>
    </>
  );
};

export default Profile;
