import React, { useState } from "react";
import Feed from "./Feed";
import PostCreate from "./PostCreate";
import moment from "moment";
import styled from "styled-components";

const WriteButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #5f89f5;
  color: white;
  font-size: 24px;
  border: none;
  position: fixed;
  bottom: 80px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const CommunityContainer = () => {
  // 초기 게시물 데이터
  const initialPosts = [
    {
      userImage: "/prett.jpg",
      username: "해피",
      caption: "오늘은 소고기가 너무 끌려서 단백질 위주의 식사!",
      imageUrl: "https://yoonhees2.github.io/protein_page/foodiimage.jpg",
      userImageUrl: "https://meet.google.com/avc-tgzr-nic?authuser=0/pro.jpg",
      comments: [
        {
          commentUsername: "일주어터",
          commentUserImageUrl:
            "https://yoonhees2.github.io/protein_page/pro.jpg",
          commentText: "오 ! 포만감 가득하겠네요~~~",
        },
      ],
      postDate: moment().format("LL"),
      onEdit: () => {
        // 수정 버튼 클릭 시 실행할 동작 추가
        // 이 함수를 원하는 대로 구현하면 됩니다.
        console.log("수정 버튼이 클릭되었습니다.");
      },
    },
    {
      username: "김연아",
      caption: "오늘은 초강도로 먹을려구요.",
      imageUrl: "https://yoonhees2.github.io/protein_page/foodddd.jpg",
      userImageUrl: "https://meet.google.com/avc-tgzr-nic?authuser=0/prett.jpg",
      comments: [
        {
          commentUsername: "테스트",
          commentUserImageUrl: "테스트",
          commentText: "테스트콘텐츠",
        },
      ],
      postDate: moment().format("LL"),
      onEdit: () => {
        // 수정 버튼 클릭 시 실행할 동작 추가
        // 이 함수를 원하는 대로 구현하면 됩니다.
        console.log("수정 버튼이 클릭되었습니다.");
      },
    },
  ];

  // posts를 useState로 관리합니다.
  const [posts, setPosts] = useState(initialPosts);
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const handleWriteButtonClick = () => {
    setIsCreatingPost(true);
  };

  const handlePostSubmission = (newPost) => {
    setPosts([newPost, ...posts]);
    setIsCreatingPost(false);
  };

  const handleDeletePost = (indexToDelete) => {
    setPosts((prevPosts) =>
      prevPosts.filter((_, index) => index !== indexToDelete)
    );
  };

  if (isCreatingPost) {
    return <PostCreate onSubmit={handlePostSubmission} />;
  }

  return (
    <div>
      {posts.map((post, index) => (
        <Feed
          key={index}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          comments={post.comments}
          userImage={post.userImageUrl}
          postDate={post.postDate}
          onDelete={() => handleDeletePost(index)}
        />
      ))}
      <WriteButton onClick={handleWriteButtonClick}>+</WriteButton>
    </div>
  );
};

export default CommunityContainer;
