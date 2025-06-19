import * as Chakra from "@chakra-ui/react";
import { CustomLogo } from "../../atoms/CustomLogo";
import { LINKS } from "../../../data/links";
import { CustomNavLink } from "../../atoms/CustomNavLink";

export const NavBar = () => {
  return (
    <Chakra.HStack as="nav" w="full">
      <Chakra.HStack w="full" justifyContent="space-between">
        <CustomLogo />
        <Chakra.HStack as="ul" listStyleType="none" gap={6}>
          {LINKS.NAV_BAR.map((link) => {
            return (
              <CustomNavLink
                key={link.label}
                href={link.href}
                label={link.label}
                color={"#FFF"}
              />
            );
          })}
        </Chakra.HStack>
      </Chakra.HStack>
    </Chakra.HStack>
  );
};
