export const getRocketType = (numberOfCores: number): string => {
  if (numberOfCores === 3) {
    return "Falcon Heavy";
  } else if (numberOfCores === 1) {
    return "Falcon 9";
  }
  return "Unknown";
};
