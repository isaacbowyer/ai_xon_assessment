import * as Chakra from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface IProps {
  href?: string;
}

export const CustomLogo = ({ href = "/" }: IProps) => {
  return (
    <RouterLink to={href}>
      <Chakra.Image src={"/spacex_logo.png"} width={"180px"} height={"60px"} />
    </RouterLink>
  );
};
