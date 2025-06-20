import type { ICustomLink } from "../../interfaces/ICustomLink";

export interface IProps {
  wikipediaLink: string;
  webcastLink: string;
  articleLink: string;
}

export const launchDetailLinksAdapter = (payload: IProps): ICustomLink[] => {
  return [
    { label: "Article", href: payload.articleLink },
    { label: "Webcast", href: payload.webcastLink },
    { label: "Wikipedia", href: payload.wikipediaLink },
  ];
};
