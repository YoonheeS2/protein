import React from 'react';
import styled from 'styled-components';
import CreateHeader from './CreateHeader';
import { Gallery } from 'iconic-react';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 10px;
`;

const InputContainer = styled.div`
width:200px;
height: 30px;
`;

const InputStyle = styled.input`
    width: 300px;
`

const IconGallery = styled(Gallery)`
  margin-right: 10px;
  margin-left: 10px;
`;

const FixedContainer = styled.div`
    position: fixed;
    bottom: 0px;
    margin-bottom: 100px;
    margin-left: 10px;
`

const PostCreate = () => {
  return (
    <>
    <Container>
        <CreateHeader username={"홍길동"}></CreateHeader>
        <InputContainer><InputStyle placeholder='어떤 글을 남기시고 싶은가요?'></InputStyle></InputContainer>
    </Container>
    <FixedContainer>
            <IconGallery size={30} color="#000">
            아이콘
            </IconGallery>
        </FixedContainer>

    </>
  );
};

export default PostCreate;
