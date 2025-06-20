import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IUpcomingLaunchAPIResponse } from "../../interfaces/IUpcomingLaunchAPIResponse";
import type { ILaunchpadAPIResponse } from "../../interfaces/ILaunchpadAPIResponse";
import type { IPayloadAPIResponse } from "../../interfaces/IPayloadAPIResponse";
import { upcomingLaunchAdapter } from "../../utils/upcomingLaunchAdapter";
import type { IUpcomingLaunch } from "../../interfaces/IUpcomingLaunch";
import type { IRocketAPIResponse } from "../../interfaces/IRocketAPIResponse";

export const spacexApi = createApi({
  reducerPath: "spacexApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/",
  }),
  tagTypes: ["Rocket", "Launchpad", "Upcoming"],
  endpoints: (builder) => ({
    // fetch multiple upcoming launches
    getUpcomingLaunches: builder.query<IUpcomingLaunch[], void>({
      query: () => "launches/upcoming",
      providesTags: ["Upcoming"],
      transformResponse: (response: IUpcomingLaunchAPIResponse[]) => {
        return response.map((launch) => upcomingLaunchAdapter(launch));
      },
    }),

    // fetch single upcoming launch
    getUpcomingLaunchById: builder.query<IUpcomingLaunchAPIResponse, string>({
      query: (id) => `launches/${id}`,
      providesTags: ["Upcoming"],
    }),

    // Fetch single rocket by ID (one per launch)
    getRocketById: builder.query<IRocketAPIResponse, string>({
      query: (id) => `rockets/${id}`,
      providesTags: ["Rocket"],
    }),

    // Fetch single launchpad by ID (one per launch)
    getLaunchpadById: builder.query<ILaunchpadAPIResponse, string>({
      query: (id) => `launchpads/${id}`,
      providesTags: ["Launchpad"],
    }),

    // Fetch multiple payloads by IDs (many per launch)
    getPayloadsByIds: builder.query<IPayloadAPIResponse[], string[]>({
      query: (ids) => {
        return `payloads?${ids.map((id) => `id=${id}`).join("&")}`;
      },
    }),
  }),
});

export const {
  useGetUpcomingLaunchesQuery,
  useGetUpcomingLaunchByIdQuery,
  useGetRocketByIdQuery,
  useGetLaunchpadByIdQuery,
  useGetPayloadsByIdsQuery,
} = spacexApi;
