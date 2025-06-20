import type { ICustomLink } from "./ICustomLink";

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
  payloads: string[];
  links: ICustomLink[];
}
