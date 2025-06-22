import ReactPaginate from "react-paginate";
import * as Chakra from "@chakra-ui/react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { validateOptionsBasedOnBoolean } from "../../../utils/validateOptionsBasedOnBoolean";
import styles from "./CustomPagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onChangeCurrentPage: (page: number) => void;
}

export const CustomPagination = ({
  pageCount,
  currentPage,
  onChangeCurrentPage,
}: PaginationProps) => {
  const onClick = (e: any) => {
    onChangeCurrentPage(e.selected + 1);
  };

  const initialPage = validateOptionsBasedOnBoolean(
    currentPage <= 0,
    currentPage,
    currentPage - 1
  );

  return (
    <Chakra.HStack w="fit-content" minH="10vh">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        previousLabel={<Chakra.Icon as={HiOutlineChevronLeft} />}
        nextLabel={<Chakra.Icon as={HiOutlineChevronRight} />}
        pageLinkClassName={styles.pageClassName}
        className={styles.pagination}
        activeLinkClassName={styles.activeClassName}
        nextLinkClassName={styles.nextAndPrevious}
        previousLinkClassName={styles.nextAndPrevious}
        breakLabel="..."
        breakLinkClassName={styles.breakLinkClassName}
        initialPage={initialPage}
      />
    </Chakra.HStack>
  );
};
