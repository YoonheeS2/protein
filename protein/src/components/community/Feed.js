// src/components/Feed.js
import React from "react";
import styled from "styled-components";
import Photo from "./Photo";
import Comment from "./Comment";
import FeedHeader from "./FeedHeader";
import FeedController from "./FeedController";

const PostContainer = styled.div`
  background-color: #fff;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Caption = styled.p`
  margin-top: 8px;
  margin-left: 14px;
`;

const Feed = ({
  username,
  caption,
  imageUrl,
  comments,
  userImage,
  postDate,
}) => {
  return (
    <PostContainer>
      <FeedHeader
        username={username}
        userImage={userImage}
        postDate={postDate}
      ></FeedHeader>
      <Photo imageUrl={imageUrl} />
      <FeedController></FeedController>
      <Caption>{caption}</Caption>
      {comments.map(
        ({ commentUsername, commentUserImageUrl, commentText }, index) => (
          <Comment
            key={index}
            commentUserImageUrl={commentUserImageUrl}
            commentUsername={commentUsername}
            commentText={commentText}
          />
        )
      )}
    </PostContainer>
  );
};

export default Feed;
