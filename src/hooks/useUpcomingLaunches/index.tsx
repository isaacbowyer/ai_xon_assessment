import { useState } from "react";
import type { IFilterCategory } from "../../interfaces/IFilterCategory";
import { useGetUpcomingLaunchesQuery } from "../../store/api";

export const useUpcomingLaunches = () => {
  const [activeFilter, setActiveFilter] = useState<IFilterCategory>("All");

  const categories: IFilterCategory[] = ["All", "Favourites"];

  const handleSetActiveFilter = (category: IFilterCategory) => {
    setActiveFilter(category);
  };

  const { data: launches, isLoading: isLaunchesLoading } =
    useGetUpcomingLaunchesQuery();

  return {
    state: {
      launches: launches,
      categories: categories,
      activeCategory: activeFilter,
      isLoading: isLaunchesLoading,
    },
    methods: {
      handleChangeActiveCategory: handleSetActiveFilter,
    },
  };
};
