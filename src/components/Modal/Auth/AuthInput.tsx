import { authModalState } from "@/src/atoms/authModalAtom";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import Signup from "./Signup";

type AuthInputProps = {};

const AuthInput: React.FC<AuthInputProps> = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction={"column"} align="center" width={"100%"} mt={4}>
      {modalState.type === "login" && <Login />}
      {modalState.type === "signup" && <Signup />}
    </Flex>
  );
};
export default AuthInput;
