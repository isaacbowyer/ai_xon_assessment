import * as Chakra from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface IProps {
  href: string;
  label: string;
  color?: string;
  hoverColor?: string;
  fontWeight?: string;
}

export const CustomNavLink = ({
  href,
  label,
  color = "#111",
  hoverColor = "#228BE6",
  fontWeight = "bold",
}: IProps) => {
  return (
    <RouterLink to={href}>
      <Chakra.Text
        letterSpacing="0.5px"
        lineHeight="1.25"
        fontWeight={fontWeight}
        fontSize="lg"
        color={color}
        _hover={{
          color: hoverColor,
          transform: "translateY(-5px)",
        }}
        transition="all 0.5s ease"
      >
        {label}
      </Chakra.Text>
    </RouterLink>
  );
};
