import React from "react";
import Feed from "./Feed";
import moment from "moment";
import { Add } from "iconic-react";

const CommunityContainer = () => {
  const buttonStyle = {
    backgroundColor: "#5F89F5",
    color: "white",
    padding: "25px",
    borderRadius: "50%",
    cursor: "pointer",
    position: "fixed",
    right: "5px",
    bottom: "80px",
  };

  const posts = [
    {
      username: "NullpointE",
      caption: "This is a sample post caption.",
      imageUrl: "https://picsum.photos/seed/picsum/400/400",
      comments: [
        {
          commentUsername: "테스트",
          commentUserImageUrl: "테스트",
          commentText: "테스트콘텐츠",
        },
      ],
      postDate: moment().format("LL"),
    },
    {
      username: "Skymill2000",
      caption: "상세 내역이 들어갑니다.",
      imageUrl: "https://picsum.photos/seed/picsum/400/400",
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
  return (
    <div>
      <button style={buttonStyle}>
        <Add size={30} color="white" style={{ fontSize: "60px" }} />
      </button>
      {posts.map((post, index) => (
        <Feed
          key={index}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          comments={post.comments}
          userImage={post.imageUrl}
          postDate={post.postDate}
        />
      ))}
    </div>
  );
};

export default CommunityContainer;
