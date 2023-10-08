import React from "react";
import styled from "styled-components";
import CreateHeader from "./CreateHeader";
import { Gallery } from "iconic-react";

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

const IconGallery = styled(Gallery)`
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 14px;
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
        <IconGallery size={30} color="#000">
          아이콘
        </IconGallery>
      </FixedContainer>
    </>
  );
};

export default PostCreate;
