import * as Chakra from "@chakra-ui/react";

interface IProps {
  payloads: string[];
}

export const PayloadSection = ({ payloads }: IProps) => {
  const bgGradientMain =
    "linear-gradient(to bottom right, rgba(128, 90, 213, 0.25), rgba(103, 72, 201, 0.2))";

  const cardGradient =
    "linear-gradient(to right, rgba(128, 90, 213, 0.4), rgba(103, 72, 201, 0.3))";

  return (
    <Chakra.Box
      bgGradient={bgGradientMain}
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
        Payload Details
      </Chakra.Heading>

      <Chakra.Stack gap={4}>
        {payloads.map((payload, index) => (
          <Chakra.Box
            key={index}
            bgGradient={cardGradient}
            p={4}
            borderRadius="xl"
            border="1px"
            borderColor="#805AD5"
            boxShadow="md"
            color="#E9D8FD"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "translateX(6px)" }} // subtle right shift
          >
            <Chakra.Text fontSize="md" fontWeight="medium">
              {payload}
            </Chakra.Text>
          </Chakra.Box>
        ))}
      </Chakra.Stack>
    </Chakra.Box>
  );
};
