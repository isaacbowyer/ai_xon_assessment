import type { ILaunch } from "../../interfaces/ILaunch";
import type { ILaunchAPIResponse } from "../../interfaces/ILaunchAPIResponse";

export const upcomingLaunchAdapter = (launch: ILaunchAPIResponse): ILaunch => {
  return {
    id: launch.id,
    name: launch.name,
    date: new Date(launch.date_utc),
    details: launch.details,
    rocket: launch.rocket,
    location: launch.launchpad,
    flightNumber: launch.flight_number,
  };
};
