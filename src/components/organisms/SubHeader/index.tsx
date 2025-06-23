import * as Chakra from "@chakra-ui/react";

export interface SubHeaderProps {
  pageCount: number;
  currentPage: number;
  itemsLabel: string;
  currentEntries?: number;
  entriesCount?: number;
}

export const SubHeader = (props: SubHeaderProps) => {
  const currentPageDisplay = props.currentPage;
  const pageCountDisplay = props.pageCount;
  const entriesCountDisplay = props.entriesCount || 0;
  const currentEntriesDisplay = props.currentEntries || entriesCountDisplay;
  const itemType = props.itemsLabel;

  return (
    <Chakra.HStack w="full" justify="space-between" minH="5vh">
      <Chakra.Text fontSize="sm" color="#FFF">
        Displaying {currentEntriesDisplay} of {entriesCountDisplay} {itemType}
      </Chakra.Text>

      <Chakra.Text fontSize="sm" color="#FFF">
        Page {currentPageDisplay} of {pageCountDisplay}
      </Chakra.Text>
    </Chakra.HStack>
  );
};
