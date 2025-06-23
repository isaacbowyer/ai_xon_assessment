import type { ICustomLink } from "../../interfaces/ICustomLink";

export interface IProps {
  wikipediaLink?: string;
  webcastLink?: string;
  articleLink?: string;
}

export const launchDetailLinksAdapter = (payload: IProps): ICustomLink[] => {
  return [
    payload.articleLink && { label: "Article", href: payload.articleLink },
    payload.webcastLink && { label: "Webcast", href: payload.webcastLink },
    payload.wikipediaLink && {
      label: "Wikipedia",
      href: payload.wikipediaLink,
    },
  ].filter(Boolean) as ICustomLink[];
};
