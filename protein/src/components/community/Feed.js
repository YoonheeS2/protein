import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Photo from "./Photo";
import Comment from "./Comment";
import FeedHeader from "./FeedHeader";
import FeedController from "./FeedController";

const PostContainer = styled.div`
  background-color: #fff;
  position: relative;
`;

const Username = styled.span`
  font-weight: bold;
`;

const Caption = styled.p`
  margin-top: 6px;
  font-size: 13px;
  margin-left: 10px;
  margin-bottom: 15px;
`;

const ActionMenu = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 5;
  top: 0;
  right: 0px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 16px;
  padding: 5px;
  width: 100%;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Feed = ({
  username,
  caption,
  imageUrl,
  comments,
  userImage,
  postDate,
  onEdit,
  onDelete,
}) => {
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedCaption, setEditedCaption] = useState(caption);

  const actionMenuRef = useRef(null);

  const handleEditClick = () => {
    setEditMode(true);
    setShowActionMenu(false);
  };

  const handleSaveClick = () => {
    onEdit(editedCaption);
    setEditMode(false);
  };

  const handleDeleteClick = () => {
    onDelete();
    setShowActionMenu(false);
  };

  const toggleActionMenu = () => {
    setShowActionMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        actionMenuRef.current &&
        !actionMenuRef.current.contains(event.target)
      ) {
        setShowActionMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PostContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FeedHeader
          username={username}
          userImage={userImage}
          postDate={postDate}
        />
        {editMode ? (
          <button style={{ marginRight: "5px" }} onClick={handleSaveClick}>
            저장
          </button>
        ) : (
          <button style={{ marginRight: "5px" }} onClick={toggleActionMenu}>
            수정
          </button>
        )}
        {showActionMenu && (
          <ActionMenu ref={actionMenuRef}>
            <ActionButton onClick={handleEditClick}>수정</ActionButton>
            <ActionButton onClick={handleDeleteClick}>삭제</ActionButton>
          </ActionMenu>
        )}
      </div>
      <Photo imageUrl={imageUrl} />
      <FeedController />
      {editMode ? (
        <textarea
          value={editedCaption}
          onChange={(e) => setEditedCaption(e.target.value)}
          style={{
            width: "100%",
            height: "auto",
            minHeight: "50px",
            borderRadius: "5px",
            padding: "5px",
            fontSize: "13px",
            marginLeft: "10px",
            marginBottom: "15px",
          }}
        />
      ) : (
        <Caption>{caption}</Caption>
      )}
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

Feed.propTypes = {
  username: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  userImage: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
};

Feed.defaultProps = {
  onEdit: () => {
    console.warn("onEdit function is not provided.");
  },
};

export default Feed;
