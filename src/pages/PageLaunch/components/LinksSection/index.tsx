import * as Chakra from "@chakra-ui/react";
import { CustomLink } from "../../../../components/atoms/CustomLink";
import type { ICustomLink } from "../../../../interfaces/ICustomLink";

interface IProps {
  links: ICustomLink[];
}

export const LinksSection = ({ links }: IProps) => {
  return (
    <Chakra.Box
      bgGradient="linear-gradient(to bottom right, rgba(255, 115, 64, 0.25), rgba(255, 166, 90, 0.2))"
      backdropFilter="blur(10px)"
      borderRadius="2xl"
      p={6}
      border="1px"
      borderColor="#FF8F3E"
      _hover={{ borderColor: "#4299E1", transform: "translateY(-5px)" }}
      transition="all 0.5s"
      width="full"
    >
      <Chakra.Heading size="lg" mb={6} color="#FFF">
        Links
      </Chakra.Heading>

      <Chakra.Stack gap={4}>
        {links.map((link, index) => (
          <CustomLink key={index} label={link.label} href={link.href} />
        ))}
      </Chakra.Stack>
    </Chakra.Box>
  );
};
