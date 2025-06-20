import * as Chakra from "@chakra-ui/react";

interface IProps {
  onClick: () => void;
}
export const ViewLaunchDetails = ({ onClick }: IProps) => {
  return (
    <Chakra.Box
      pt={5}
      borderTop="1px solid rgba(59, 130, 246, 0.2)"
      position="relative"
      onClick={onClick}
    >
      <Chakra.HStack
        justify="space-between"
        align="center"
        _hover={{
          color: "#60a5fa",
          transform: "translateX(8px)",
        }}
        transition="all 0.3s ease"
        color="#94a3b8"
        fontWeight="600"
        fontSize="sm"
      >
        <Chakra.Text>View Launch Details</Chakra.Text>
        <Chakra.Box
          bg="rgba(59, 130, 246, 0.1)"
          p={2}
          borderRadius="lg"
          _groupHover={{
            bg: "rgba(59, 130, 246, 0.2)",
            transform: "translateX(4px)",
          }}
          transition="all 0.3s ease"
        >
          <Chakra.Text fontSize="lg">→</Chakra.Text>
        </Chakra.Box>
      </Chakra.HStack>
    </Chakra.Box>
  );
};
