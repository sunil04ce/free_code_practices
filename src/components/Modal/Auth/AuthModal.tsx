import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { authModalState } from "@component/src/atoms/authModalAtom";
import AuthInputs from "./AuthInputs";

const AuthModal: React.FC = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalState, setModalState] = useRecoilState(authModalState);

  const closeHandler = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={closeHandler}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
              border="1px solid red"
            >
              {/* <OAuthButtons /> */}
              <AuthInputs />
              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
