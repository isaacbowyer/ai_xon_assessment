import type { IUpcomingLaunch } from "../../interfaces/IUpcomingLaunch";
import type { IUpcomingLaunchAPIResponse } from "../../interfaces/IUpcomingLaunchAPIResponse";
import { formatDate } from "../formatDate";
import { getRocketType } from "../getRocketType";

export const upcomingLaunchAdapter = (
  launch: IUpcomingLaunchAPIResponse
): IUpcomingLaunch => {
  return {
    id: launch.id,
    name: launch.name,
    flightNumber: launch.flight_number,
    date: formatDate(launch.date_local),
    rocketType: getRocketType(launch.cores.length),
    numberOfCores: launch.cores.length,
  };
};
