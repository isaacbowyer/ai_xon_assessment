import * as Chakra from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface DetailRowProps {
  label: string;
  value: string;
  Icon: IconType;
}

export const DetailItem = ({ label, value, Icon }: DetailRowProps) => (
  <Chakra.Flex
    direction={{ base: "column", md: "row" }}
    align={{ base: "flex-start", md: "center" }}
    gap={{ base: 1, md: 3 }}
  >
    <Chakra.Flex align="center" gap={2}>
      <Icon color="#FFF" />
      <Chakra.Text color="#CBD5E0" fontWeight="bold">
        {label}
      </Chakra.Text>
    </Chakra.Flex>

    <Chakra.Text color="#FFF" fontWeight="bold" pl={{ base: 6, md: 0 }}>
      {value}
    </Chakra.Text>
  </Chakra.Flex>
);
