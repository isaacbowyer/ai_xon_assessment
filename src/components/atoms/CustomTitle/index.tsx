import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Chakra.Box);

interface IProps {
  title: string;
}

export const CustomTitle = ({ title }: IProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
      w="full"
    >
      <Chakra.VStack
        textAlign={{ base: "center", md: "start" }}
        align={{ base: "center", md: "start" }}
        justifyContent={{ base: "center", md: "start" }}
        width="full"
        gap={2}
      >
        <Chakra.Text
          fontWeight="bold"
          fontSize="4xl"
          bgGradient="linear-gradient(to right,#00B5D8, #805AD5, #D53F8C)"
          bgClip="text"
          color="transparent"
        >
          {title}
        </Chakra.Text>

        <Chakra.Box
          w="80px"
          h="4px"
          bgGradient="linear-gradient(to right, #00B5D8, #805AD5, #D53F8C)"
          borderRadius="full"
        />
      </Chakra.VStack>
    </MotionBox>
  );
};
