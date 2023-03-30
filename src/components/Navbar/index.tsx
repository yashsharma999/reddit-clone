import { auth } from "@/src/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height={"44px"} padding={"6px 12px"}>
      <Flex mr={2}>
        <Image
          src="/images/redditlogo.png"
          alt="reddi_logo"
          display={{
            base: "none",
            md: "unset",
          }}
        />
        <Image
          src="/images/redditFace.svg"
          alt="reddit_logo_mobile"
          display={{
            base: "unset",
            md: "none",
          }}
        />
      </Flex>
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
