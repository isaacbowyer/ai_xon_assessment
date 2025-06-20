import * as Chakra from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { displayRocketAndCores } from "../../../utils/displayRocketAndCores";

interface IProps {
  date: string;
  rocketType: string;
  numberOfCores: number;
}
export const LaunchCardMissionDetails = ({
  date,
  rocketType,
  numberOfCores,
}: IProps) => {
  return (
    <Chakra.VStack align="stretch" gap={3} mb={6}>
      <Chakra.HStack
        p={4}
        bg="rgba(71, 85, 105, 0.15)"
        borderRadius="xl"
        border="1px solid rgba(71, 85, 105, 0.2)"
        _hover={{
          bg: "rgba(59, 130, 246, 0.1)",
          borderColor: "rgba(59, 130, 246, 0.3)",
          transform: "translateX(4px)",
        }}
        transition="all 0.2s ease"
        fontSize="sm"
      >
        <Chakra.Box
          p={2}
          bg="rgba(59, 130, 246, 0.2)"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Chakra.Icon as={MdCalendarToday} color="#60A5FA" size="sm" />
        </Chakra.Box>
        <Chakra.Text color="#E2E8F0" fontWeight="600">
          {date}
        </Chakra.Text>
      </Chakra.HStack>

      <Chakra.HStack
        p={4}
        bg="rgba(71, 85, 105, 0.15)"
        borderRadius="xl"
        border="1px solid rgba(71, 85, 105, 0.2)"
        _hover={{
          bg: "rgba(139, 92, 246, 0.1)",
          borderColor: "rgba(139, 92, 246, 0.3)",
          transform: "translateX(4px)",
        }}
        transition="all 0.2s ease"
        fontSize="sm"
      >
        <Chakra.Box
          p={2}
          bg="rgba(139, 92, 246, 0.2)"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Chakra.Icon as={FaRocket} color="#A78BFA" size="sm" />
        </Chakra.Box>
        <Chakra.Text color="#E2E8F0" fontWeight="700">
          {displayRocketAndCores(rocketType, numberOfCores)}
        </Chakra.Text>
      </Chakra.HStack>
    </Chakra.VStack>
  );
};
