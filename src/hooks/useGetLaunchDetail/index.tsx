import {
  useGetLaunchpadByIdQuery,
  useGetPayloadsByIdsQuery,
  useGetRocketByIdQuery,
  useGetUpcomingLaunchByIdQuery,
} from "../../store/api";
import { dataArrayToLookUpMap } from "../../utils/dataArrayToLookupMap";

export const useGetLaunches = () => {
  const { data: launch, isLoading: isLaunchLoading } =
    useGetUpcomingLaunchByIdQuery("");

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

  const payloadsMap = dataArrayToLookUpMap(payloads);

  const isLoading =
    isLaunchLoading ||
    isRocketLoading ||
    isLaunchpadLoading ||
    isPayloadsLoading;

  return {
    state: {
      launch: launch,
      isLoading: isLoading,
    },
    methods: {},
  };
};
