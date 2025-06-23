import type { ICustomLink } from "./ICustomLink";
import type { ILaunchPayload } from "./ILaunchPayload";

export interface ILaunchDetail {
  id: string;
  flightNumber: number;
  name: string;
  date: string;
  rocketName: string;
  rocketDescription: string;
  numberOfCores: number;
  numberOfReusedCores: number;
  launchPadLocation: string;
  payloads: ILaunchPayload[];
  links: ICustomLink[];
}
