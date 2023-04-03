import { Flex } from "@chakra-ui/react";
import { authModalState } from "@component/src/atoms/authModalAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction="column" align="center" width="100%" mt={4}>
      {modalState.view === "login" && <Login />}
      {/* {modalState.view === "signup" && <SignUp />} */}
    </Flex>
  );
};
export default AuthInputs;
