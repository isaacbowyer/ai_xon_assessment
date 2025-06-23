import * as Chakra from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { validateOptionsBasedOnBoolean } from "../../../utils/validateOptionsBasedOnBoolean";
import type { IconType } from "react-icons";

interface IProps {
  isLiked: boolean;
  onToggleClick: () => void;
  Icon: IconType;
}
export const CustomIconButton = ({ isLiked, onToggleClick, Icon }: IProps) => {
  const color = validateOptionsBasedOnBoolean(
    isLiked,
    "rgba(239, 68, 68, 0.2)",
    "rgba(148, 163, 184, 0.6)"
  );

  const bgColor = validateOptionsBasedOnBoolean(
    isLiked,
    "rgba(239, 68, 68, 0.2)",
    "rgba(148, 163, 184, 0.1)"
  );

  return (
    <Chakra.IconButton
      aria-label="Toggle favourite"
      onClick={(e) => {
        e.stopPropagation();
        onToggleClick();
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
      <Icon size="18px" />
    </Chakra.IconButton>
  );
};
