import * as Chakra from "@chakra-ui/react";

interface StatItemProps {
  label: string;
  value: React.ReactNode;
  color?: string;
}

export const StatItem = ({ label, value, color = "#FFF" }: StatItemProps) => (
  <Chakra.GridItem bg="#1A202C" borderRadius="lg" p={4}>
    <Chakra.Text color={color} fontSize="sm" fontWeight="bold">
      {label}
    </Chakra.Text>
    <Chakra.Text color={color} fontSize="xl" fontWeight="bold">
      {value}
    </Chakra.Text>
  </Chakra.GridItem>
);
