import * as Chakra from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { FavouriteButton } from "../../atoms/FavouriteButton";

interface IProps {
  isLiked: boolean;
  id: string;
  handleToggleLike: (id: string) => void;
}

export const BreadcrumsWithAction = ({
  isLiked,
  id,
  handleToggleLike,
}: IProps) => {
  return (
    <Chakra.HStack w="full" justifyContent="space-between">
      <Chakra.Link href="/">
        <Chakra.HStack color="#FFF" gap={0}>
          <BiChevronRight size={16} />
          <Chakra.Text fontSize="md">Back to Launches</Chakra.Text>
        </Chakra.HStack>
      </Chakra.Link>

      <FavouriteButton
        isLiked={isLiked}
        onToggleClick={() => handleToggleLike(id)}
      />
    </Chakra.HStack>
  );
};
