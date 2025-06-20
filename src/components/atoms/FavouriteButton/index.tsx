import * as Chakra from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { validateOptionsBasedOnBoolean } from "../../../utils/validateOptionsBasedOnBoolean";

interface IProps {
  isFavourite: boolean;
  onToggleFavourite: (e: any) => void;
}
export const FavouriteButton = ({ isFavourite, onToggleFavourite }: IProps) => {
  const color = validateOptionsBasedOnBoolean(
    isFavourite,
    "rgba(239, 68, 68, 0.2)",
    "rgba(148, 163, 184, 0.6)"
  );

  const bgColor = validateOptionsBasedOnBoolean(
    isFavourite,
    "rgba(239, 68, 68, 0.2)",
    "rgba(148, 163, 184, 0.1)"
  );

  return (
    <Chakra.IconButton
      aria-label="Toggle favourite"
      onClick={(e) => {
        e.stopPropagation();
        onToggleFavourite();
      }}
      variant="ghost"
      size="lg"
      color={color}
      bg={bgColor}
      borderRadius="2xl"
      border="1px solid"
      borderColor={bgColor}
      _hover={{
        color: "#ef4444",
        transform: "scale(1.15) rotate(-5deg)",
        bg: "rgba(239, 68, 68, 0.2)",
        borderColor: "rgba(239, 68, 68, 0.2)",
        boxShadow: "0 8px 25px rgba(239, 68, 68, 0.2)",
      }}
      transition="all 0.3s ease-in-out"
    >
      <FaHeart size="18px" />
    </Chakra.IconButton>
  );
};
