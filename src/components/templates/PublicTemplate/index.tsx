import { useRef } from "react";
import type { ReactNode } from "react";
import * as Chakra from "@chakra-ui/react";
import { NavBar } from "../../organisms/NavBar";

interface IProps {
  main: ReactNode;
  bgGradient: string;
}

export const PublicTemplate = ({ main, bgGradient }: IProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Chakra.VStack
      ref={scrollRef}
      overflowY="auto"
      h="100vh"
      w="100vw"
      justifyContent="space-between"
      backgroundGradient={bgGradient}
      px={4}
      css={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#77C7FF",
          borderRadius: "24px",
        },
      }}
    >
      <Chakra.VStack maxW="1200px" width="full" overflow="visible" pb={4}>
        <NavBar />
        {main}
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
