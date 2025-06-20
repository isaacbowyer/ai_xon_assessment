import * as Chakra from "@chakra-ui/react";

interface DetailRowProps {
  label: string;
  value: React.ReactNode;
}

export const DetailItem = ({ label, value }: DetailRowProps) => (
  <Chakra.Flex align="center" gap={3}>
    <Chakra.Text color="#CBD5E0" fontWeight="bold">
      {label}
    </Chakra.Text>
    <Chakra.Text color="#FFF" fontWeight="bold">
      {value}
    </Chakra.Text>
  </Chakra.Flex>
);
