import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const getFavouriteBtnStyles = (isLiked: boolean) => {
  const bgColor = validateOptionsBasedOnBoolean(
    isLiked,
    "rgba(239, 68, 68, 0.2)",
    "rgba(55, 65, 81, 0.5)"
  );
  const color = validateOptionsBasedOnBoolean(isLiked, "#F87171", "#9CA3AF");
  const borderColor = validateOptionsBasedOnBoolean(
    isLiked,
    "rgba(239, 68, 68, 0.5)",
    "rgba(75, 85, 99, 0.5)"
  );

  return {
    bgColor,
    color,
    borderColor,
  };
};
