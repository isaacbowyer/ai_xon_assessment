import * as Chakra from "@chakra-ui/react";
import { CustomTitle } from "../../components/atoms/CustomTitle";
import { PublicTemplate } from "../../components/templates/PublicTemplate";
import { useUpcomingLaunches } from "../../hooks/useUpcomingLaunches";
import { AdvancedFilter } from "../../components/organisms/AdvancedFilter";
import { LaunchCardContainer } from "../../components/organisms/LaunchCardContainer";
import { LoadingSpinner } from "../../components/atoms/LoadingSpinner";
import { IllustrationStateEmpty } from "../../components/molecules/IllustrationState.Empty";
import { SubHeader } from "../../components/organisms/SubHeader";
import { CustomPagination } from "../../components/molecules/CustomPagination";

export const PageUpcomingLaunches = () => {
  const { state, methods } = useUpcomingLaunches();

  return (
    <PublicTemplate
      bgGradient="linear-gradient(to bottom right, #1a202c, #2d3748, #1a202c)"
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
            <>
              <SubHeader
                itemsLabel="launches"
                currentPage={state.currentPage}
                pageCount={state.totalPages}
                entriesCount={state.count}
                currentEntries={state.launches.length}
              />

              <LaunchCardContainer
                items={state.launches}
                currentPage={state.currentPage}
                totalPages={state.totalPages}
                isFavourite={methods.isFavouriteLaunch}
                handleToggleFavourite={methods.handleToggleFavouriteLaunch}
                handleNavigateToDetail={methods.handleNavigateToLaunchDetail}
                handleChangeCurrentPage={methods.handleChangeCurrentPage}
              />

              <CustomPagination
                pageCount={state.totalPages}
                currentPage={state.currentPage}
                onChangeCurrentPage={methods.handleChangeCurrentPage}
              />
            </>
          )}
        </Chakra.VStack>
      }
    />
  );
};
