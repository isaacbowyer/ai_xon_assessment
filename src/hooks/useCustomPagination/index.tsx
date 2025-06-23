import { useState, useMemo } from "react";
import { SERVICES_LIMITS } from "../../data/service";
import { calculatePagesQuantity } from "../../utils/calculatePagesQuanity";
import { paginateData } from "../../utils/paginateData";

const DEFAULT_PAGE = 1;

interface IProps<T> {
  data: T[];
  itemsPerPage?: number;
}

export const useCustomPagination = <T,>({
  data,
  itemsPerPage = SERVICES_LIMITS.DEFAULT_LIMIT,
}: IProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);

  const handleSetCurrentPage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const totalCount = data.length;
  const totalPages = calculatePagesQuantity(totalCount, itemsPerPage);

  const paginatedData = useMemo(() => {
    return paginateData({
      data,
      currentPage,
      itemsPerPage,
    });
  }, [data, currentPage, itemsPerPage]);

  return {
    state: {
      currentPage: currentPage,
      totalPages: totalPages,
      items: paginatedData,
    },
    methods: {
      handleChangeCurrentPage: handleSetCurrentPage,
    },
  };
};
