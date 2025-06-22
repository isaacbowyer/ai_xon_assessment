import { SERVICES_LIMITS } from "../../data/service";

export const calculatePagesQuantity = (
  count: number,
  perPage: number = SERVICES_LIMITS.DEFAULT_LIMIT
): number => {
  return Math.ceil(count / perPage);
};
