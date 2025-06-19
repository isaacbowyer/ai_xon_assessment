import * as Chakra from "@chakra-ui/react";

interface IProps {
  bgColor?: string;
  color?: string;
  label: string;
}

export const CustomBadge = ({
  label,
  bgColor = "#10b981",
  color = "#FFF",
}: IProps) => {
  return (
    <Chakra.Badge
      bg={bgColor}
      color={color}
      fontSize="xs"
      fontWeight="800"
      px={4}
      py={2}
      borderRadius="full"
      textTransform="uppercase"
      letterSpacing="wider"
    >
      {label}
    </Chakra.Badge>
  );
};
