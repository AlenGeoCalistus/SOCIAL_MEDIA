import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
// import "./PostSide.css";
import { PostSideContainer } from "./FeedStyled";

const Feed = () => {
  return (
    <PostSideContainer flex={6} p={2} className="PostSide">
      <PostShare />
      <Posts />
    </PostSideContainer>
  );
};

export default Feed;
