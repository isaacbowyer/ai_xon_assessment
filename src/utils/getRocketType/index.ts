export const getRocketType = (numberOfCores: number) => {
  if (numberOfCores === 3) {
    return "Falcon Heavy";
  } else if (numberOfCores === 1) {
    return "Falcon 9";
  }
  return "Unknown";
};
