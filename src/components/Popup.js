import ReactModal from "react-modal";
import React from "react";
import styled from "styled-components";
import close_icon from "../assets/images/pop-up-close.svg";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    maxWidth: "90vw",
    width: "100%",
    height: "auto",
    maxHeight: "100%",
    padding: "0px 18px 0px 0px",
    fontWeight: "500",
    zIndex: "500",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
    zIndex: "500",
  },
};

function Popup({ isOpen, setOpen, children }) {
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClick}
      contentLabel="Modal Here"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <S.PopupContent>
        <div className="popClose" onClick={handleClick} />

        <div className="content">
          <h1>Compare</h1>
          <div className="line" />
          {children}
        </div>
      </S.PopupContent>
    </ReactModal>
  );
}

export default Popup;

const S = {};

S.PopupContent = styled.div`
  .popClose {
    float: right;
    height: 15px;
    width: 15px;
    background-repeat: no-repeat;
    content: "";
    cursor: pointer;
    margin-top: 21px;
    background-image: url(${close_icon});
  }

  p {
    font-family: "Noto Serif", Arial;
    font-size: 16px;
  }
  h1 {
    width: 100%;
    font-family: "Montserrat", Arial;
    font-size: 28px;
    font-weight: 800;
  }
  h2 {
    width: 100%;
    font-family: "Montserrat", Arial;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 5px;
  }

  .line {
    border-bottom: 0.5px solid #d9d9d9;
    margin: 20px 0;
  }

  .content {
    padding: 40px 0px 40px 40px;

    .block {
      margin: 30px 0;
    }
  }
`;
