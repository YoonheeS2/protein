import React, { useState } from "react";
import styled from "styled-components";
import CreateHeader from "./CreateHeader";
import { Camera } from "iconic-react";

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

const HiddenFileInput = styled.input`
  display: none;
`;

const PostCreate = () => {
  const [uploadedImages, setUploadedImages] = useState([
    null,
    null,
    null,
    null,
  ]);

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

  return (
    <Container>
      <UploadButton>올리기</UploadButton>
      <CreateHeader username={"홍길동"} />
      <InputContainer>
        <InputStyle placeholder="어떤 글을 남기시고 싶은가요?" />
        <ImageBoxes>
          {uploadedImages.map((image, index) => (
            <ImageBox as="label" key={index} for={`imageUpload${index}`}>
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
