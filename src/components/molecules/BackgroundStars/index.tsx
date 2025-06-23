import * as Chakra from "@chakra-ui/react";

export const BackgroundStars = () => (
  <Chakra.Box position="fixed" inset="0" overflow="hidden" pointerEvents="none">
    <Chakra.Box
      position="absolute"
      top="5rem"
      left="15rem"
      w="0.5rem"
      h="0.5rem"
      bg="blue.400"
      borderRadius="full"
      animation="pulse 2s infinite"
    />
    <Chakra.Box
      position="absolute"
      top="10rem"
      right="5rem"
      w="0.25rem"
      h="0.25rem"
      bg="purple.400"
      borderRadius="full"
      animation="ping 1s infinite"
    />
    <Chakra.Box
      position="absolute"
      bottom="5rem"
      left="25%"
      w="0.375rem"
      h="0.375rem"
      bg="pink.400"
      borderRadius="full"
      animation="bounce 1s infinite"
    />
    <Chakra.Box
      position="absolute"
      bottom="10rem"
      right="33.3333%"
      w="0.25rem"
      h="0.25rem"
      bg="blue.300"
      borderRadius="full"
      animation="pulse 2s infinite"
    />
    <Chakra.Box
      position="absolute"
      top="50%"
      left="50%"
      w="0.125rem"
      h="0.125rem"
      bg="white"
      borderRadius="full"
      animation="ping 1s infinite"
    />
  </Chakra.Box>
);
