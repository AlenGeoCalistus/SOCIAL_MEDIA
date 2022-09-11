import React, { useState } from "react";
import { format } from "timeago.js";
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
  LikeText,
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
import { Avatar, Box, IconButton } from "@mui/material";
import {
  FavoriteBorderRounded,
  FavoriteRounded,
  InsertCommentOutlined,
} from "@mui/icons-material";

const Post = ({ data }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  // console.log("created dateeeee", data.createdAt);
  console.log("postss", data);
  console.log('userr',user.following);
  return (
    <>
     {/* {user._id === data.userId &&( */}
          {/* // <BoldText>{user.firstname}</BoldText> */}
    <PostContainer className="Post">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar src={user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"}
            />
        <Username>
          <BoldText>{user.firstname} </BoldText>
          {/* {user._id === data.userId &&(
          <BoldText>{user.firstname}</BoldText>)} */}
          <LikeText style={{ marginLeft: "5px" }}>
            {format(data.createdAt)}
          </LikeText>
        </Username>
      </Box>
      <PostImg
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />
      <PostDtlContainer className="detail">
        <PostName>
          <BoldText>{data.name} </BoldText>
        </PostName>
        <PostDesc>{data.desc}</PostDesc>
      </PostDtlContainer>

      <PostReactContainer className="postReact">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleLike}>
            {" "}
            {liked ? <FavoriteRounded sx={{color:'#8224e3'}}/> : <FavoriteBorderRounded />}{" "}
          </IconButton>
          <LikeText>{likes} likes</LikeText>
          <IconButton>
            <InsertCommentOutlined />{" "}
          </IconButton>
          <LikeText>2 Comments</LikeText>
        </Box>
        {/* <IconButton onClick={handleLike}> {liked?<FavoriteOutlined/>:<FavoriteBorderOutlined/> } </IconButton> */}
        {/* <LikeImg src={liked ? Heart : NotLike} alt="" onClick={handleLike} /> */}
        {/* <LikeText>{likes} likes</LikeText> */}
        {/* <CommentImg src={Comment} alt="" />
        <ShareImg src={Share} alt="" /> */}
      </PostReactContainer>
    </PostContainer>
    {/* )} */}
    </>
  );
};

export default Post;
