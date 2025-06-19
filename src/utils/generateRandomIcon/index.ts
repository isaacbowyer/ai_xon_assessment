const ICONS = ["🚀", "🛰️", "☄️"];

export const generateRandomIcon = () => {
  return ICONS[Math.floor(Math.random() * ICONS.length)];
};
