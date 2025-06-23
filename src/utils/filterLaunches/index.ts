import type { IFilterCategory } from "../../interfaces/IFilterCategory";
import type { IUpcomingLaunch } from "../../interfaces/IUpcomingLaunch";

interface IPayload {
  launches: IUpcomingLaunch[];
  favourties: string[];
  activeFilter: IFilterCategory;
}
export const filterLaunches = (payload: IPayload): IUpcomingLaunch[] => {
  if (!payload.launches) return [];

  if (payload.activeFilter === "All") return payload.launches;

  return payload.launches.filter((launch) =>
    payload.favourties.includes(launch.id)
  );
};
