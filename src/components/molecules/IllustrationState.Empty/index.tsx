import { IllustrationState } from "../IllustrationState";
import * as Chakra from "@chakra-ui/react";

interface IllustrationStateEmptyProps {
  loadWhat: string;
  handleOnClick: () => void;
}

export const IllustrationStateEmpty = ({
  loadWhat,
  handleOnClick,
}: IllustrationStateEmptyProps) => {
  return (
    <IllustrationState
      title={`You don't have any ${loadWhat} right now`}
      description={`Start exploring launches now.`}
      illustration="no_data.png"
      action={
        <Chakra.Button
          size="lg"
          fontWeight="regular"
          bg="transparent"
          py="6"
          px="10"
          style={{ transition: "0.5s" }}
          borderRadius="full"
          border="1px solid #FFF"
          onClick={handleOnClick}
        >
          Start Exploring
        </Chakra.Button>
      }
    />
  );
};
