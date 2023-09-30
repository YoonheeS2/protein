// src/components/Photo.js
import React from "react";
import styled from "styled-components";

const PhotoContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  img {
    object-fit: fill;
  }
`;

const Photo = ({ imageUrl }) => {
  return (
    <PhotoContainer>
      <img src={imageUrl} alt="Instagram Post" />
    </PhotoContainer>
  );
};

export default Photo;
