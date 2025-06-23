import * as Chakra from "@chakra-ui/react";
import { DetailItem } from "../DetailItem";
import { RiRocketLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { HiOutlineTag } from "react-icons/hi";

interface IProps {
  name: string;
  type: string;
  mass: string;
}

export const PayloadCard = ({ name, type, mass }: IProps) => {
  return (
    <Chakra.VStack
      bgGradient="linear-gradient(to right, rgba(128, 90, 213, 0.4), rgba(103, 72, 201, 0.3))"
      p={4}
      borderRadius="xl"
      border="1px"
      borderColor="#805AD5"
      boxShadow="md"
      color="#E9D8FD"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "translateX(6px)" }}
      gap={4}
      w="full"
      alignItems="start"
      justifyContent="start"
    >
      <DetailItem label={"Name:"} value={name} Icon={RiRocketLine} />
      <DetailItem label={"Type:"} value={type} Icon={HiOutlineTag} />
      <DetailItem label={"Mass (kg):"} value={mass} Icon={FiBox} />
    </Chakra.VStack>
  );
};
