import type { IconType } from "react-icons";
import { FaRocket, FaSatellite, FaMeteor } from "react-icons/fa";

const ICONS = [FaRocket, FaSatellite, FaMeteor];

export const generateRandomIcon = (): IconType => {
  return ICONS[Math.floor(Math.random() * ICONS.length)];
};
