import { useRef } from "react";
import type { ReactNode } from "react";
import * as Chakra from "@chakra-ui/react";
import { NavBar } from "../../organisms/NavBar";

interface IProps {
  main: ReactNode;
}

export const PublicTemplate = ({ main }: IProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Chakra.VStack
      ref={scrollRef}
      overflowY="auto"
      h="100vh"
      w="100vw"
      justifyContent="space-between"
      backgroundGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
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
      <Chakra.VStack maxW="1200px" width="full" overflow="visible">
        <NavBar />
        {main}
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
