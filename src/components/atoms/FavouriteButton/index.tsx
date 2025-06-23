import * as Chakra from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { getFavouriteBtnStyles } from "../../../utils/getFavouriteBtnStyles";

interface IProps {
  isLiked: boolean;
  onToggleClick: () => void;
}

export const FavouriteButton = ({ isLiked, onToggleClick }: IProps) => {
  const { borderColor, bgColor, color } = getFavouriteBtnStyles(isLiked);

  return (
    <Chakra.Button
      onClick={onToggleClick}
      display="flex"
      alignItems="center"
      gap={2}
      px={4}
      py={2}
      borderRadius="full"
      borderWidth="1px"
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        borderColor: "#FFF",
        color: "#FFF",
      }}
      bg={bgColor}
      color={color}
      borderColor={borderColor}
    >
      <Chakra.Icon
        as={FaHeart}
        boxSize={5}
        transition="all 0.3s ease"
        color={color}
      />
      <Chakra.Text>{isLiked ? "Liked" : "Like"}</Chakra.Text>
    </Chakra.Button>
  );
};
