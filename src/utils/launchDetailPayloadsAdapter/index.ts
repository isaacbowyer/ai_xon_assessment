import type { ILaunchPayload } from "../../interfaces/ILaunchPayload";
import type { IPayloadAPIResponse } from "../../interfaces/IPayloadAPIResponse";
import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const launchDetailPayloadsAdapter = (
  payloads: IPayloadAPIResponse[]
): ILaunchPayload[] => {
  return payloads?.map((payload) => {
    const hasMass = !!payload.mass_kg;
    return {
      name: payload.name,
      type: payload.type,
      massKg: validateOptionsBasedOnBoolean(
        hasMass,
        `${payload.mass_kg}`,
        "Unknown"
      ),
    };
  });
};
