import React, { useState } from "react";
import Modal from "react-modal";
import DietCalendar from "../components/diet/DietCalendar";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CommunityPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlePopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handlePopup}>팝업 열기</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closePopup}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <DietCalendar></DietCalendar>
      </Modal>
    </div>
  );
};

export default CommunityPage;
