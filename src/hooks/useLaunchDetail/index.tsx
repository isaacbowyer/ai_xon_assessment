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
import { useState } from "react";
import { calculatePagesQuantity } from "../../utils/calculatePagesQuanity";
import { paginateData } from "../../utils/paginateData";
import { SERVICES_LIMITS } from "../../data/service";

export const useLaunchDetail = () => {
  const { id } = useParams();
  const [currentPayloadPage, setCurrentPayloadPage] = useState<number>(1);

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

  const handleSetPayloadPage = (newPage: number) => {
    setCurrentPayloadPage(newPage);
  };

  const totalCount = payloads?.length || 0;
  const totalPages = calculatePagesQuantity(
    totalCount,
    SERVICES_LIMITS.EXPANDED_LIMIT
  );

  const paginatedPayloads = paginateData({
    data: payloads || [],
    currentPage: currentPayloadPage,
    itemsPerPage: SERVICES_LIMITS.EXPANDED_LIMIT,
  });

  const formattedLaunch = launchDetailAdapter({
    payloads: paginatedPayloads,
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
      currentPayloadPage: currentPayloadPage,
      totalPages: totalPages,
      count: totalCount,
      isFavourite: isFavourite(formattedLaunch.id),
    },
    methods: {
      handleToggleFavourite: handleToggleFavourite,
      handleChangeCurrentPage: handleSetPayloadPage,
    },
  };
};
