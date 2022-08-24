import React, { useState } from "react";
// import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost } from "../../redux/api/PostsRequests";
import { useSelector } from "react-redux";
import {
  BoldText,
  CommentImg,
  LikeImg,
  PostContainer,
  PostDesc,
  PostDtlContainer,
  PostImg,
  PostName,
  PostReactContainer,
  ShareImg,
  Span,
  Username,
} from "./StyledPost";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  console.log('data',data.createdAt);
  return (
    <PostContainer className="Post">
       <Username>
          <BoldText>{user.firstname} </BoldText>
        </Username>
      <PostImg
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <PostReactContainer className="postReact">
        <LikeImg src={liked ? Heart : NotLike} alt="" onClick={handleLike} />
        <CommentImg src={Comment} alt="" />
        <ShareImg src={Share} alt="" />
      </PostReactContainer>

      <Span>{likes} likes</Span>
      <PostDtlContainer className="detail">
        <PostName>
          <BoldText>{data.name} </BoldText>
        </PostName>
        <PostDesc>{data.desc}</PostDesc>
      </PostDtlContainer>
    </PostContainer>
  );
};

export default Post;
