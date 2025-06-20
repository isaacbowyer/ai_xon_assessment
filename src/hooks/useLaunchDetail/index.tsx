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

export const useLaunchDetail = () => {
  const { id } = useParams();

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

  const formattedLaunch = launchDetailAdapter({
    payloads: payloads || [],
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
    },
    methods: {},
  };
};
