import * as Chakra from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { LaunchCardIcon } from "../LaunchCardIcon";
import { FavouriteButton } from "../../atoms/FavouriteButton";
import { ViewLaunchDetails } from "../ViewLaunchDetails";
import { CustomBadge } from "../../atoms/CustomBadge";
import { LaunchCardMissionDetails } from "../LaunchCardMissionDetails";

interface IProps {
  flightNumber: number;
  name: string;
  date: string;
  rocketType: string;
  numberOfCores: number;
  isFavourite: boolean;
  onToggleFavourite: () => void;
  onClick: () => void;
}

export const LaunchCard = ({
  flightNumber,
  name,
  date,
  rocketType,
  numberOfCores,
  isFavourite,
  onToggleFavourite,
  onClick,
}: IProps) => {
  return (
    <Chakra.Box
      bg="rgba(15, 23, 42, 0.95)"
      backdropFilter="blur(20px)"
      borderRadius="3xl"
      p={8}
      cursor="pointer"
      border="1px solid rgba(148, 163, 184, 0.1)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.4)"
      transition="all 0.4s ease-in-out"
      _hover={{
        transform: "translateY(-12px) scale(1.03)",
        boxShadow:
          "0 32px 64px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.2)",
        bg: "rgba(15, 23, 42, 0.98)",
        borderColor: "rgba(59, 130, 246, 0.3)",
      }}
      onClick={onClick}
      overflow="hidden"
    >
      <Chakra.Flex justify="space-between" align="flex-start" mb={8}>
        <LaunchCardIcon />

        <FavouriteButton
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
      </Chakra.Flex>

      <Chakra.Box mb={5}>
        <CustomBadge label="SUCCESSFUL" />
      </Chakra.Box>

      <Chakra.Heading
        size="xl"
        fontWeight="800"
        mb={4}
        lineHeight="1.2"
        bgColor="#F8FAFC"
        bgClip="text"
        letterSpacing="-0.02em"
      >
        {name}
      </Chakra.Heading>

      <Chakra.Box mb={6}>
        <Chakra.Text
          fontSize="md"
          fontWeight="700"
          letterSpacing="widest"
          display="inline-block"
          p={3}
          bg="rgba(59, 130, 246, 0.08)"
          borderRadius="xl"
          border="1px solid rgba(59, 130, 246, 0.2)"
          color="#60a5fa"
        >
          #FLIGHT {flightNumber}
        </Chakra.Text>
      </Chakra.Box>

      <LaunchCardMissionDetails
        date={date}
        rocketType={rocketType}
        numberOfCores={numberOfCores}
      />

      <ViewLaunchDetails onClick={onClick} />
    </Chakra.Box>
  );
};
