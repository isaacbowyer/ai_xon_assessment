import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const displayRocketAndCores = (
  rocketType: string,
  numberOfCores: number
): string => {
  const isNotOneCore = numberOfCores !== 1;
  const numberOfCoresMessage = validateOptionsBasedOnBoolean(
    isNotOneCore,
    "s",
    ""
  );

  return `${rocketType} • (${numberOfCores} core${numberOfCoresMessage})`;
};
