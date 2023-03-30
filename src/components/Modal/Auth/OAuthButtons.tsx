import { Flex, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" mb={4} width="100%">
      <Button
        variant={"oauth"}
        mb={2}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} alt="google" />
        Continue with Google
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
//public/images/googlelogo.png
///Users/yashsharma/clones/reddit-clone/public/images/googlelogo.png
