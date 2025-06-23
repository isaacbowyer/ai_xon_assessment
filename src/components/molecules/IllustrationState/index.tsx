import React from "react";
import * as Chakra from "@chakra-ui/react";

export interface IIllustrationState {
  title: string;
  description?: string;
  illustration?: string;
  action?: React.ReactElement;
}

export const IllustrationState = ({
  title,
  description,
  illustration,
  action,
}: IIllustrationState) => {
  return (
    <Chakra.VStack w="full" gap="8" py="16" data-testid="illustration-state">
      <Chakra.Image w="full" maxW="400px" src={illustration} alt={title} />
      <Chakra.VStack w="full" align="center">
        <Chakra.Text textAlign="center" fontSize="4xl" color="#FFF">
          {title}
        </Chakra.Text>
        <Chakra.Text maxW="600px" fontSize="lg" textAlign="center" color="#FFF">
          {description}
        </Chakra.Text>
      </Chakra.VStack>
      {action}
    </Chakra.VStack>
  );
};
