import { useState } from "react";
import type { IFilterCategory } from "../../interfaces/IFilterCategory";
import { useGetUpcomingLaunchesQuery } from "../../store/api";
import { useFavouritesContext } from "../../context/useGetFavourites";
import { filterLaunches } from "../../utils/filterLaunches";
import { useNavigate } from "react-router-dom";
import { useCustomPagination } from "../useCustomPagination";

const DEFAULT_FILTER: IFilterCategory = "All";

export const useUpcomingLaunches = () => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] =
    useState<IFilterCategory>(DEFAULT_FILTER);

  const categories: IFilterCategory[] = ["All", "Favourites"];

  const handleSetActiveFilter = (newFilter: IFilterCategory) => {
    setActiveFilter(newFilter);
  };
  const handleNavigateToLaunchDetail = (id: string) => {
    navigate(`/launches/${id}`);
    setActiveFilter(DEFAULT_FILTER);
  };

  const { favourites, isFavourite, handleToggleFavourite } =
    useFavouritesContext();

  const { data: launches, isLoading: isLaunchesLoading } =
    useGetUpcomingLaunchesQuery();

  const filteredLaunches = filterLaunches({
    launches: launches || [],
    favourties: favourites,
    activeFilter: activeFilter,
  });

  const { state: paginatedState, methods: paginatedMethods } =
    useCustomPagination({
      data: filteredLaunches,
    });

  const isSearchEmpty = activeFilter !== "All" && filteredLaunches.length === 0;

  return {
    state: {
      launches: paginatedState.items,
      categories: categories,
      activeCategory: activeFilter,
      isLoading: isLaunchesLoading,
      isSearchEmpty: isSearchEmpty,
      hasResults: !isLaunchesLoading && filteredLaunches.length > 0,
      currentPage: paginatedState.currentPage,
      totalPages: paginatedState.totalPages,
      count: launches?.length || 0,
    },
    methods: {
      handleChangeActiveCategory: handleSetActiveFilter,
      handleToggleFavouriteLaunch: handleToggleFavourite,
      handleChangeCurrentPage: paginatedMethods.handleChangeCurrentPage,
      handleNavigateToLaunchDetail: handleNavigateToLaunchDetail,
      isFavouriteLaunch: isFavourite,
    },
  };
};
