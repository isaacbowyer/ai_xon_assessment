import { useParams } from "react-router-dom";
import {
  useGetLaunchpadByIdQuery,
  useGetPayloadsByIdsQuery,
  useGetRocketByIdQuery,
  useGetUpcomingLaunchByIdQuery,
} from "../../store/api";
import { launchDetailAdapter } from "../../utils/launchDetailAdapter";
import type { IRocketAPIResponse } from "../../interfaces/IRocketAPIResponse";
import type { ILaunchpadAPIResponse } from "../../interfaces/ILaunchpadAPIResponse";
import type { IUpcomingLaunchAPIResponse } from "../../interfaces/IUpcomingLaunchAPIResponse";
import { useFavouritesContext } from "../../context/useGetFavourites";
import { SERVICES_LIMITS } from "../../data/service";
import { useCustomPagination } from "../useCustomPagination";

export const useLaunchDetail = () => {
  const { id } = useParams();

  const { handleToggleFavourite, isFavourite } = useFavouritesContext();

  const { data: launch, isLoading: isLaunchLoading } =
    useGetUpcomingLaunchByIdQuery(id || "", {
      skip: !id,
    });

  const { data: rocket, isLoading: isRocketLoading } = useGetRocketByIdQuery(
    launch?.rocket || "",
    {
      skip: !launch?.rocket,
    }
  );

  const { data: launchpad, isLoading: isLaunchpadLoading } =
    useGetLaunchpadByIdQuery(launch?.launchpad || "", {
      skip: !launch?.launchpad,
    });

  const { data: payloads, isLoading: isPayloadsLoading } =
    useGetPayloadsByIdsQuery(launch?.payloads || [], {
      skip: !launch?.payloads || launch.payloads.length === 0,
    });

  const { state: paginatedState, methods: paginatedMethods } =
    useCustomPagination({
      data: payloads || [],
      itemsPerPage: SERVICES_LIMITS.EXPANDED_LIMIT,
    });

  const formattedLaunch = launchDetailAdapter({
    payloads: paginatedState.items,
    rocket: rocket || ({} as IRocketAPIResponse),
    launchpad: launchpad || ({} as ILaunchpadAPIResponse),
    launch: launch || ({} as IUpcomingLaunchAPIResponse),
  });

  const isLoading =
    isLaunchLoading ||
    isRocketLoading ||
    isLaunchpadLoading ||
    isPayloadsLoading;

  return {
    state: {
      launch: formattedLaunch,
      isLoading: isLoading,
      currentPayloadPage: paginatedState.currentPage,
      totalPages: paginatedState.totalPages,
      count: payloads?.length || 0,
      isFavourite: isFavourite(formattedLaunch.id),
    },
    methods: {
      handleToggleFavourite: handleToggleFavourite,
      handleChangeCurrentPage: paginatedMethods.handleChangeCurrentPage,
    },
  };
};
