import * as Chakra from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";

interface IProps {
  href: string;
  label: string;
}
export const CustomLink = ({ href, label }: IProps) => {
  return (
    <Chakra.Link
      href={href}
      color="#FFF"
      alignItems="center"
      gap={2}
      _hover={{ textDecoration: "underline" }}
      _focus={{ outline: "none" }}
    >
      <FaLink color="#CBD5E0" />
      {label}
    </Chakra.Link>
  );
};
