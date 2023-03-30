import { auth } from "@/src/firebase/clientApp";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthInput from "./AuthInput";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  const handleClose = useCallback(() => {
    setModalState((prevState) => ({ ...prevState, open: false }));
  }, [setModalState]);

  useEffect(() => {
    if (user) {
      handleClose();
    }
  }, [user, handleClose]);

  const toggleView = (type: string) => {
    setModalState({
      ...modalState,
      type: type as typeof modalState.type,
    });
  };

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>
            {modalState.type === "login" && "Login"}
            {modalState.type === "signup" && "Sign Up"}
            {modalState.type === "resetPassword" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Flex
              direction={"column"}
              align="center"
              justify={"center"}
              width="70%"
            >
              {modalState.type === "login" || modalState.type === "signup" ? (
                <>
                  <OAuthButtons />
                  <Text color={"gray.500"} fontWeight={"700"}>
                    OR
                  </Text>
                  <AuthInput />
                </>
              ) : (
                <ResetPassword toggleView={toggleView} />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
