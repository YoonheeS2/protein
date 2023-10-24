import React from "react";
import Feed from "./Feed";
import moment from "moment";
import styled from "styled-components";

// 스타일 컴포넌트로 원형 버튼 스타일 작성
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
  const posts = [
    {
      username: "행복티비",
      caption: "오늘은 소고기가 너무 끌려서 단백질 위주의 식사!",
      imageUrl: "/foodiimage.jpg",
      userImageUrl: "/pro.jpg",
      comments: [
        {
          commentUsername: "일주어터",
          commentUserImageUrl: "/pro.jpg",
          commentText: "오 ! 포만감 가득하겠네요~~~",
        },
      ],
      postDate: moment().format("LL"),
    },
    {
      username: "사랑티비",
      caption: "오늘은 초강도로 먹을려구요.",
      imageUrl: "/foodddd.jpg",
      userImageUrl: "/prett.jpg",

      comments: [
        {
          commentUsername: "테스트",
          commentUserImageUrl: "테스트",
          commentText: "테스트콘텐츠",
        },
      ],
      postDate: moment().format("LL"),
    },
  ];

  const handleWriteButtonClick = () => {
    // 글쓰기 페이지나 모달 창을 열기 위한 로직 작성
    console.log("글쓰기 버튼 클릭!");
  };

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
        />
      ))}
      <WriteButton onClick={handleWriteButtonClick}>+</WriteButton>
    </div>
  );
};

export default CommunityContainer;
