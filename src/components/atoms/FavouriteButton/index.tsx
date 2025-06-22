import * as Chakra from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

interface IProps {
  isLiked: boolean;
  onToggleClick: () => void;
}

export const FavouriteButton = ({ isLiked, onToggleClick }: IProps) => {
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
      bg={isLiked ? "rgba(239, 68, 68, 0.2)" : "rgba(55, 65, 81, 0.5)"}
      color={isLiked ? "#f87171" : "#9ca3af"}
      borderColor={isLiked ? "rgba(239, 68, 68, 0.5)" : "rgba(75, 85, 99, 0.5)"}
    >
      <Chakra.Icon
        as={FaHeart}
        boxSize={5}
        transition="all 0.3s ease"
        color={isLiked ? "red.400" : "gray.400"}
      />
      <Chakra.Text>{isLiked ? "Liked" : "Like"}</Chakra.Text>
    </Chakra.Button>
  );
};
