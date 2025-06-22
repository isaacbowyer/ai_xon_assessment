import type { IPayloadAPIResponse } from "../../interfaces/IPayloadAPIResponse";

export const launchDetailPayloadsAdapter = (
  payloads: IPayloadAPIResponse[]
) => {
  return payloads?.map((payload) => {
    const hasMass = !!payload.mass_kg;

    if (hasMass) {
      return `${payload.name}, (${payload.type}, ${payload.mass_kg}kg)`;
    }

    return `${payload.name}, (${payload.type})`;
  });
};
