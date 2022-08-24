import React from "react";
// import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CoverImage,
  Divider,
  Email,
  Follow,
  FollowerLength,
  Followers,
  FollowStatus,
  FollowStatusContainer,
  MyProfile,
  ProfileCardContainer,
  ProfileImage,
  ProfileImgContainer,
  ProfileNameContainer,
  Username,
  VDivider,
} from "./StyledProfileCard";
const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <ProfileCardContainer className="ProfileCard">
      <ProfileImgContainer className="ProfileImages">
        <CoverImage
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt="CoverImage"
        />
        <ProfileImage
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="ProfileImage"
        />
      </ProfileImgContainer>
      <ProfileNameContainer className="ProfileName">
        <Username>
          {user.firstname} {user.lastname}
        </Username>
        <Email>{user.worksAt ? user.worksAt : "Write about yourself"}</Email>
      </ProfileNameContainer>

      <FollowStatusContainer className="followStatus">
        <Divider />
        <FollowStatus>
          <Follow className="follow">
            <FollowerLength>{user.followers.length}</FollowerLength>
            <Followers>Followers</Followers>
          </Follow>
          <VDivider className="vl"></VDivider>
          <Follow className="follow">
            <FollowerLength>{user.following.length}</FollowerLength>
            <Followers>Following</Followers>
          </Follow>
          {/* for profilepage */}
          {location === "profilePage" && (
            <>
              <VDivider className="vl"></VDivider>
              <Follow className="follow">
                <FollowerLength>
                  {posts.filter((post) => post.userId === user._id).length}
                </FollowerLength>
                <Followers>Posts</Followers>
              </Follow>{" "}
            </>
          )}
        </FollowStatus>
        <Divider />
      </FollowStatusContainer>

      {location === "profilePage" ? (
        ""
      ) : (
        <MyProfile>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </MyProfile>
      )}
    </ProfileCardContainer>
  );
};

export default ProfileCard;
