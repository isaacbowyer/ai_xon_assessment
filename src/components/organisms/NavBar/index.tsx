import * as Chakra from "@chakra-ui/react";
import { CustomLogo } from "../../atoms/CustomLogo";
import { LINKS } from "../../../data/links";
import { CustomNavLink } from "../../atoms/CustomNavLink";
import { useState } from "react";
import { getNavLinkColor } from "../../../utils/getNavLinkColor";

export const NavBar = () => {
  const [hoveredLabel, setHoveredLabel] = useState<string>("");

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
                color={getNavLinkColor({
                  hoverColor: "#707070",
                  color: "#FFF",
                  label: link.label,
                  hoveredLabel: hoveredLabel,
                })}
                onMouseEnter={() => setHoveredLabel(link.label)}
                onMouseLeave={() => setHoveredLabel("")}
              />
            );
          })}
        </Chakra.HStack>
      </Chakra.HStack>
    </Chakra.HStack>
  );
};
