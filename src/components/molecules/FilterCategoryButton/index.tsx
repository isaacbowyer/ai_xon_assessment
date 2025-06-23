import * as Chakra from "@chakra-ui/react";
import type { IFilterCategory } from "../../../interfaces/IFilterCategory";
import { getFilterBtnStyles } from "../../../utils/getFilterBtnStyles";
import { FaRocket, FaHeart } from "react-icons/fa";
import { validateOptionsBasedOnBoolean } from "../../../utils/validateOptionsBasedOnBoolean";

interface IProps {
  item: IFilterCategory;
  activeFilter: IFilterCategory;
  handleChangeActiveFilter: (item: IFilterCategory) => void;
}

export const FilterCategoryButton = ({
  item,
  activeFilter,
  handleChangeActiveFilter,
}: IProps) => {
  const isActive = activeFilter === item;

  const { normalState, hoverState } = getFilterBtnStyles(isActive);
  const isAllFilter = item === "All";
  const Icon = validateOptionsBasedOnBoolean(isAllFilter, FaRocket, FaHeart);

  return (
    <Chakra.Button
      size="sm"
      position="relative"
      px={6}
      py={3}
      border="1px solid"
      borderColor={normalState.borderColor}
      bg={normalState.bgColor}
      backdropFilter="blur(10px)"
      color={normalState.color}
      fontWeight="bold"
      borderRadius="full"
      overflow="hidden"
      _hover={{
        bg: hoverState.bgColor,
        borderColor: hoverState.borderColor,
        transform: "translateY(-2px)",
        shadow: hoverState.shadow,
      }}
      _active={{
        transform: "translateY(0px)",
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      onClick={() => handleChangeActiveFilter(item)}
    >
      <Chakra.HStack gap={2}>
        <Chakra.Icon as={Icon} boxSize={4} />
        <Chakra.Text fontSize="12px">{item}</Chakra.Text>
      </Chakra.HStack>
    </Chakra.Button>
  );
};
