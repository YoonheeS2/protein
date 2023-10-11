import React from "react";
import styled from "styled-components";
import CreateHeader from "./CreateHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
  padding-bottom: 550px;
`;

const InputContainer = styled.div`
  width: 200px;
  height: 30px;
  justify-content: flex-start;
`;

const InputStyle = styled.textarea`
  width: 380px;
  height: 300px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  font-size: 18px;
  font-weight: bold;
`;

const FixedContainer = styled.div`
  position: fixed;
  bottom: 0px;
  margin-bottom: 110px;
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
`;
const AddImageButton = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: #1da1f2;
  cursor: pointer;
  border-radius: 50%;
  padding: 10px;
  margin-left: auto;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  border-top: 1px solid #d8d8d8;
  min-width: 390px;
  width: 100%;
`;

const ImageUploadLabel = styled.label`
  font-size: 16px;
  margin-left: 10px;
  color: #1da1f2;
  cursor: pointer;
`;

const ImageUploadInput = styled.input`
  display: none;
`;

const PublishButton = styled.button`
  background-color: #1da1f2;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 315px;
  margin-top: 11px;
`;

const PostCreate = () => {
  return (
    <>
      <Container>
        <CreateHeader username={"홍길동"}></CreateHeader>
        <InputContainer>
          <InputStyle placeholder="어떤 글을 남기시고 싶은가요?"></InputStyle>
        </InputContainer>
      </Container>
      <FixedContainer>
        <AddImageButton>+</AddImageButton>
        <ImageUploadLabel htmlFor="image-upload">사진 추가</ImageUploadLabel>

        <ImageUploadContainer>
          <ImageUploadInput type="file" id="image-upload" />
        </ImageUploadContainer>

        <PublishButton>게시</PublishButton>
      </FixedContainer>
    </>
  );
};

export default PostCreate;
