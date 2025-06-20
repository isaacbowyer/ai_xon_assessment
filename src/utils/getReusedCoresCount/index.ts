import type { ICore } from "../../interfaces/ICore";

export const getReusedCoresCount = (cores: ICore[]) => {
  if (!cores) return 0;

  return cores.filter((core) => core.reused)?.length;
};
