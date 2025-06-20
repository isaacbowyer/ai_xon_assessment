import { FaRocket, FaSatellite, FaMeteor } from "react-icons/fa";

const ICONS = [FaRocket, FaSatellite, FaMeteor];

export const generateRandomIcon = () => {
  return ICONS[Math.floor(Math.random() * ICONS.length)];
};
