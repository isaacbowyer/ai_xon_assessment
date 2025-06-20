import * as Chakra from "@chakra-ui/react";
import { CustomLink } from "../../../../components/atoms/CustomLink";
import type { ICustomLink } from "../../../../interfaces/ICustomLink";

interface IProps {
  links: ICustomLink[];
}

export const LinksSection = ({ links }: IProps) => {
  const bgGradientMain =
    "linear-gradient(to bottom right, rgba(255, 126, 95, 0.7), rgba(254, 180, 123, 0.7))";

  return (
    <Chakra.Box
      bgGradient={bgGradientMain}
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
