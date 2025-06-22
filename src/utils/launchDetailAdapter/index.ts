import type { ILaunchDetail } from "../../interfaces/ILaunchDetail";
import type { ILaunchpadAPIResponse } from "../../interfaces/ILaunchpadAPIResponse";
import type { IPayloadAPIResponse } from "../../interfaces/IPayloadAPIResponse";
import type { IRocketAPIResponse } from "../../interfaces/IRocketAPIResponse";
import type { IUpcomingLaunchAPIResponse } from "../../interfaces/IUpcomingLaunchAPIResponse";
import { formatDate } from "../formatDate";
import { getReusedCoresCount } from "../getReusedCoresCount";
import { launchDetailLinksAdapter } from "../launchDetailLinksAdapter";
import { launchDetailPayloadsAdapter } from "../launchDetailPayloadsAdapter";

interface IProps {
  payloads: IPayloadAPIResponse[];
  rocket: IRocketAPIResponse;
  launch: IUpcomingLaunchAPIResponse;
  launchpad: ILaunchpadAPIResponse;
}

export const launchDetailAdapter = ({
  payloads,
  rocket,
  launch,
  launchpad,
}: IProps): ILaunchDetail => {
  return {
    id: launch.id,
    flightNumber: launch.flight_number,
    name: launch.name,
    date: formatDate(launch.date_local),
    rocketName: rocket.name,
    rocketDescription: rocket.description || "Unknown",
    numberOfCores: launch.cores?.length || 0,
    numberOfReusedCores: getReusedCoresCount(launch.cores),
    launchPadLocation: `${launchpad.region}, ${launchpad.locality}`,
    payloads: launchDetailPayloadsAdapter(payloads),
    links: launchDetailLinksAdapter({
      wikipediaLink: launch?.links?.wikipedia || "",
      webcastLink: launch?.links?.webcast || "",
      articleLink: launch?.links?.article || "",
    }),
  };
};
