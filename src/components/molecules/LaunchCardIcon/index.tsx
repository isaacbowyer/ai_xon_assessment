import * as Chakra from "@chakra-ui/react";
import { generateRandomIcon } from "../../../utils/generateRandomIcon";

export const LaunchCardIcon = () => {
  return (
    <Chakra.Box
      position="relative"
      bg="linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"
      p={4}
      borderRadius="2xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="0 12px 40px rgba(59, 130, 246, 0.4)"
      _hover={{
        transform: "rotate(5deg) scale(1.05)",
      }}
      transition="transform 0.3s ease"
    >
      <Chakra.Text
        fontSize="3xl"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      >
        {generateRandomIcon()}
      </Chakra.Text>
    </Chakra.Box>
  );
};
