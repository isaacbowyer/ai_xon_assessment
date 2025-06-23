import * as Chakra from "@chakra-ui/react";
import type { ILaunchPayload } from "../../../../interfaces/ILaunchPayload";
import { PayloadCardContainer } from "../../../../components/organisms/PayloadCardContainer";
import { CustomPagination } from "../../../../components/molecules/CustomPagination";
import { SubHeader } from "../../../../components/organisms/SubHeader";

interface IProps {
  payloads: ILaunchPayload[];
  totalPages: number;
  totalCount: number;
  currentPage: number;
  handleChangePayloadPage: (newPage: number) => void;
}

export const PayloadSection = ({
  payloads,
  totalPages,
  totalCount,
  currentPage,
  handleChangePayloadPage,
}: IProps) => {
  return (
    <Chakra.Box
      bgGradient="linear-gradient(to bottom right, rgba(128, 90, 213, 0.25), rgba(103, 72, 201, 0.2))"
      backdropFilter="blur(10px)"
      borderRadius="2xl"
      p={6}
      border="1px"
      borderColor="#4A5568"
      _hover={{ borderColor: "#4299E1", transform: "translateY(-5px)" }}
      transition="all 0.5s"
      width="full"
    >
      <Chakra.Heading size="lg" mb={6} color="#FFF">
        Payload Details
      </Chakra.Heading>

      <SubHeader
        itemsLabel="payloads"
        currentPage={currentPage}
        pageCount={totalPages}
        entriesCount={totalCount}
        currentEntries={payloads.length}
      />

      <PayloadCardContainer payloads={payloads} />

      <Chakra.HStack w="full" justifyContent="center">
        <CustomPagination
          pageCount={totalPages}
          currentPage={currentPage}
          onChangeCurrentPage={handleChangePayloadPage}
        />
      </Chakra.HStack>
    </Chakra.Box>
  );
};
