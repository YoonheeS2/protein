import React, { useState } from "react";
import styled from "styled-components";
import FeedHeader from "./FeedHeader"; // 여기를 CreateHeader에서 FeedHeader로 변경했습니다.
import { Camera } from "iconic-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputStyle = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  resize: none;
`;

const ImageBox = styled.div`
  width: 70px;
  height: 70px;
  display: inline-block;
  margin: 5px;
  background-color: #f2f2f2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBoxes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const UploadButton = styled.button`
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const BackButton = styled.button`
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 10px;
  position: absolute;
  top: 10px;
  left: 10px; // 뒤로가기 버튼을 왼쪽 상단에 배치
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const PostCreate = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [postContent, setPostContent] = useState("");

  const handleImageChange = (index) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...uploadedImages];
        newImages[index] = reader.result;
        setUploadedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handleUploadClick = () => {
    const newPost = {
      username: "홍길동",
      caption: postContent,
      imageUrl: uploadedImages[0],
      userImageUrl: "/pro.jpg",
      comments: [],
      postDate: new Date().toLocaleString(),
    };
    onSubmit(newPost);
  };

  const handleGoBack = () => {
    navigate(-1); // 뒤로가기 버튼 클릭 시 이전 페이지로 이동
  };

  return (
    <Container>
      <UploadButton onClick={handleUploadClick}>올리기</UploadButton>
      <FeedHeader username={"홍길동"} userImageUrl="/pro.jpg">
        <BackButton onClick={handleGoBack}>뒤로가기</BackButton>
      </FeedHeader>
      <InputContainer>
        <InputStyle
          placeholder="어떤 글을 남기시고 싶은가요?"
          value={postContent}
          onChange={handleContentChange}
        />
        <ImageBoxes>
          {uploadedImages.map((image, index) => (
            <ImageBox as="label" key={index} htmlFor={`imageUpload${index}`}>
              {image ? (
                <img
                  src={image}
                  alt="uploaded"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : index === 0 ? (
                <Camera />
              ) : null}
              <HiddenFileInput
                type="file"
                id={`imageUpload${index}`}
                onChange={handleImageChange(index)}
                accept="image/*"
              />
            </ImageBox>
          ))}
        </ImageBoxes>
      </InputContainer>
    </Container>
  );
};

export default PostCreate;
