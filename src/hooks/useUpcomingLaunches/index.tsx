import { useState } from "react";
import type { IFilterCategory } from "../../interfaces/IFilterCategory";
import { useGetUpcomingLaunchesQuery } from "../../store/api";
import { useFavouritesContext } from "../../context/useGetFavourites";
import { filterLaunches } from "../../utils/filterLaunches";
import { useNavigate } from "react-router-dom";
import { calculatePagesQuantity } from "../../utils/calculatePagesQuanity";
import { SERVICES_LIMITS } from "../../data/service";
import { paginateData } from "../../utils/paginateData";

const INITAL_STATE: IUseUpcomingLaunchesState = {
  activeFilter: "All",
  currentLaunchesPage: 1,
};

export const useUpcomingLaunches = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<IUseUpcomingLaunchesState>(INITAL_STATE);

  const categories: IFilterCategory[] = ["All", "Favourites"];

  const handleSetActiveFilter = (newFilter: IFilterCategory) => {
    setState((prev) => ({
      ...prev,
      activeFilter: newFilter,
    }));
  };

  const handleSetCurrentPage = (newPage: number) => {
    setState((prev) => ({
      ...prev,
      currentLaunchesPage: newPage,
    }));
  };

  const handleNavigateToLaunchDetail = (id: string) => {
    navigate(`/launches/${id}`);
    setState(INITAL_STATE);
  };

  const { favourites, isFavourite, handleToggleFavourite } =
    useFavouritesContext();

  const { data: launches, isLoading: isLaunchesLoading } =
    useGetUpcomingLaunchesQuery();

  const filteredLaunches = filterLaunches({
    launches: launches || [],
    favourties: favourites,
    activeFilter: state.activeFilter,
  });

  const totalCount = launches?.length || 0;
  const totalPages = calculatePagesQuantity(totalCount);

  const paginatedData = paginateData({
    data: filteredLaunches,
    currentPage: state.currentLaunchesPage,
    itemsPerPage: SERVICES_LIMITS.DEFAULT_LIMIT,
  });

  const isSearchEmpty =
    state.activeFilter !== "All" && filteredLaunches.length === 0;

  return {
    state: {
      launches: paginatedData,
      categories: categories,
      activeCategory: state.activeFilter,
      isLoading: isLaunchesLoading,
      isSearchEmpty: isSearchEmpty,
      hasResults: !isLaunchesLoading && filteredLaunches.length > 0,
      currentPage: state.currentLaunchesPage,
      totalPages: totalPages,
      count: totalCount,
    },
    methods: {
      handleChangeActiveCategory: handleSetActiveFilter,
      handleToggleFavouriteLaunch: handleToggleFavourite,
      handleChangeCurrentPage: handleSetCurrentPage,
      handleNavigateToLaunchDetail: handleNavigateToLaunchDetail,
      isFavouriteLaunch: isFavourite,
    },
  };
};

interface IUseUpcomingLaunchesState {
  activeFilter: IFilterCategory;
  currentLaunchesPage: number;
}
