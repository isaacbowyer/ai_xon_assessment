import * as Chakra from "@chakra-ui/react";
import { CustomTitle } from "../../components/atoms/CustomTitle";
import { PublicTemplate } from "../../components/templates/PublicTemplate";
import { useUpcomingLaunches } from "../../hooks/useUpcomingLaunches";
import { AdvancedFilter } from "../../components/organisms/AdvancedFilter";
import { LaunchCardContainer } from "../../components/organisms/LaunchCardContainer";

export const PageUpcomingLaunches = () => {
  const { state, methods } = useUpcomingLaunches();

  return (
    <PublicTemplate
      main={
        <Chakra.VStack w="full" h="full" gap={4}>
          <CustomTitle title="UPCOMING LAUNCHES" />

          <AdvancedFilter
            name="Filter Launches"
            activeFilter={state.activeCategory}
            categories={state.categories}
            handleChangeActiveFilter={methods.handleChangeActiveCategory}
          />

          <LaunchCardContainer
            items={state.launches}
            isFavourite={methods.isFavouriteLaunch}
            handleToggleFavourite={methods.handleToggleFavouriteLaunch}
            handleNavigateToDetail={methods.handleNavigateToLaunchDetail}
          />
        </Chakra.VStack>
      }
    />
  );
};
