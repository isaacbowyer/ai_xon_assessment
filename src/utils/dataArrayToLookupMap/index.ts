export function dataArrayToLookUpMap<T extends { id: string }>(
  array: T[] | undefined
): Record<string, T> {
  if (!array) return {};
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, T>);
}
