import * as Chakra from "@chakra-ui/react";
import { StatItem } from "../../../../components/molecules/StatItem";
import { DetailItem } from "../../../../components/molecules/DetailItem";
import { FaCalendar, FaPlane } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

interface IProps {
  rocketName: string;
  rocketDescription: string;
  numberOfCores: number;
  numberOfReusedCores: number;
  launchPadLocation: string;
  date: string;
  flightNumber: number;
}

export const DetailsSection = ({
  rocketDescription,
  rocketName,
  numberOfCores,
  numberOfReusedCores,
  launchPadLocation,
  date,
  flightNumber,
}: IProps) => {
  return (
    <Chakra.Box
      bgGradient="linear-gradient(to bottom, rgba(45,55,72,0.6), rgba(26,32,44,0.6))"
      backdropFilter="blur(10px)"
      borderRadius="2xl"
      p={6}
      border="1px"
      borderColor="#4A5568"
      _hover={{ borderColor: "#4299E1", transform: "translateY(-5px)" }}
      transition="all 0.5s"
      width="full"
    >
      <Chakra.Heading size="lg" mb={6} color="#FFF">
        Launch Details
      </Chakra.Heading>

      <Chakra.Box
        bgGradient="linear-gradient(to right, rgba(49,130,206,0.3), rgba(128,90,213,0.3))"
        borderRadius="xl"
        p={4}
        mb={6}
        border="1px"
        borderColor="#4299E1"
      >
        <Chakra.Flex align="center" mb={3} gap={4}>
          <Chakra.Box>
            <Chakra.Heading size="md" color="#FFF">
              {rocketName}
            </Chakra.Heading>
            <Chakra.Text fontSize="sm" color="#FFF">
              {rocketDescription}
            </Chakra.Text>
          </Chakra.Box>
        </Chakra.Flex>

        <Chakra.Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={4}
          mt={4}
        >
          <StatItem label="Cores" value={numberOfCores} color="#9F7AEA" />
          <StatItem
            label="Reused Cores"
            value={numberOfReusedCores}
            color="#48BB78"
          />
        </Chakra.Grid>
      </Chakra.Box>

      <Chakra.Stack gap={4}>
        <DetailItem
          label="Launchpad:"
          value={launchPadLocation}
          Icon={FaLocationPin}
        />
        <DetailItem label="Date:" value={date} Icon={FaCalendar} />
        <DetailItem
          label="Flight Number:"
          value={`#${flightNumber}`}
          Icon={FaPlane}
        />
      </Chakra.Stack>
    </Chakra.Box>
  );
};
