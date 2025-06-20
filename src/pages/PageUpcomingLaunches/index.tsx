import * as Chakra from "@chakra-ui/react";
import { CustomTitle } from "../../components/atoms/CustomTitle";
import { PublicTemplate } from "../../components/templates/PublicTemplate";
import { useUpcomingLaunches } from "../../hooks/useUpcomingLaunches";
import { AdvancedFilter } from "../../components/organisms/AdvancedFilter";
import { LaunchCardContainer } from "../../components/organisms/LaunchCardContainer";
import { LoadingSpinner } from "../../components/atoms/LoadingSpinner";
import { IllustrationStateEmpty } from "../../components/molecules/IllustrationState.Empty";

export const PageUpcomingLaunches = () => {
  const { state, methods } = useUpcomingLaunches();
  return (
    <PublicTemplate
      main={
        <Chakra.VStack w="full" h="full" gap={8}>
          <CustomTitle title="LAUNCHES" />

          <AdvancedFilter
            name="Filter Launches"
            activeFilter={state.activeCategory}
            categories={state.categories}
            handleChangeActiveFilter={methods.handleChangeActiveCategory}
          />

          {state.isLoading && <LoadingSpinner />}

          {state.isSearchEmpty && (
            <IllustrationStateEmpty
              loadWhat="favourite launches"
              handleOnClick={() => methods.handleChangeActiveCategory("All")}
            />
          )}

          {state.hasResults && (
            <LaunchCardContainer
              items={state.launches}
              isFavourite={methods.isFavouriteLaunch}
              handleToggleFavourite={methods.handleToggleFavouriteLaunch}
              handleNavigateToDetail={methods.handleNavigateToLaunchDetail}
            />
          )}
        </Chakra.VStack>
      }
    />
  );
};
