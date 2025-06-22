import { useState } from "react";
import type { IFilterCategory } from "../../interfaces/IFilterCategory";
import { useGetUpcomingLaunchesQuery } from "../../store/api";
import { useFavouritesContext } from "../../context/useGetFavourites";
import { filterLaunches } from "../../utils/filterLaunches";
import { useNavigate } from "react-router-dom";

export const useUpcomingLaunches = () => {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState<IFilterCategory>("All");

  const categories: IFilterCategory[] = ["All", "Favourites"];

  const handleSetActiveFilter = (category: IFilterCategory) => {
    setActiveFilter(category);
  };

  const handleNavigateToLaunchDetail = (id: string) => {
    navigate(`/launches/${id}`);
  };

  const { favourites, isFavourite, handleToggleFavourite } =
    useFavouritesContext();

  const { data: launches, isLoading: isLaunchesLoading } =
    useGetUpcomingLaunchesQuery();

  const data = filterLaunches({
    launches: launches || [],
    favourties: favourites,
    activeFilter: activeFilter,
  });

  return {
    state: {
      launches: data,
      categories: categories,
      activeCategory: activeFilter,
      isLoading: isLaunchesLoading,
      isSearchEmpty: activeFilter !== "All" && data.length === 0,
      hasResults: !isLaunchesLoading && data.length > 0,
    },
    methods: {
      handleChangeActiveCategory: handleSetActiveFilter,
      handleToggleFavouriteLaunch: handleToggleFavourite,
      handleNavigateToLaunchDetail: handleNavigateToLaunchDetail,
      isFavouriteLaunch: isFavourite,
    },
  };
};
