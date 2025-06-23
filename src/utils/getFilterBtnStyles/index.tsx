import { validateOptionsBasedOnBoolean } from "../validateOptionsBasedOnBoolean";

export const getFilterBtnStyles = (isActive: boolean) => {
  // NORMAL STATE
  const borderColor = validateOptionsBasedOnBoolean(
    isActive,
    "transparent",
    "rgba(255, 255, 255, 0.1)"
  );
  const bgColor = validateOptionsBasedOnBoolean(
    isActive,
    "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 212, 0.2))",
    "rgba(255, 255, 255, 0.05)"
  );
  const color = validateOptionsBasedOnBoolean(isActive, "white", "#CBD5E0");

  // HOVER STATE
  const hoverBgColor = validateOptionsBasedOnBoolean(
    isActive,
    "linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(255, 0, 212, 0.3))",
    "rgba(255, 255, 255, 0.1)"
  );
  const hoverBorderColor = validateOptionsBasedOnBoolean(
    isActive,
    "transparent",
    "rgba(255, 255, 255, 0.2)"
  );
  const hoverShadow = validateOptionsBasedOnBoolean(
    isActive,
    "0 10px 30px rgba(0, 212, 255, 0.3)",
    "0 5px 20px rgba(255, 255, 255, 0.1)"
  );

  return {
    normalState: {
      borderColor: borderColor,
      bgColor: bgColor,
      color: color,
    },
    hoverState: {
      borderColor: hoverBorderColor,
      bgColor: hoverBgColor,
      shadow: hoverShadow,
    },
  };
};
