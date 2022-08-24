import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/UserAction";
import {
  FollowerContainer,
  FollowerDetailsContainer,
  FollowerImg,
  FollowerName,
  FollowerNameContainer,
  Span,
  UnfollowBtn,
} from "../FollowersCard/StyledFollowersCard";

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  return (
    <FollowerContainer className="follower">
      <FollowerDetailsContainer>
        <FollowerImg
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImage"
        />
        <FollowerNameContainer className="name">
          <FollowerName>{person.firstname}</FollowerName>
          <Span>{person.username}</Span>
        </FollowerNameContainer>
      </FollowerDetailsContainer>
      <UnfollowBtn
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </UnfollowBtn>
    </FollowerContainer>
  );
};

export default User;
