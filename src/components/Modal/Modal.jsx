import { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const ModalContainer = styled.div``;

const Modal = ({ modalController }) => {
  const [loginPart, setLoginPart] = useState(true);
  console.log("Modal Called");
  console.log(modalController);
  return (
    <ModalContainer>
      {loginPart ? (
        <LoginModal closeModal={modalController} loginModal={setLoginPart} />
      ) : (
        <RegisterModal closeModal={modalController} loginModal={setLoginPart} />
      )}
    </ModalContainer>
  );
};

export default Modal;
