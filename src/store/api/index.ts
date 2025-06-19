import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ILaunch } from "../../interfaces/ILaunch";
import type { ILaunchAPIResponse } from "../../interfaces/ILaunchAPIResponse";
import { upcomingLaunchAdapter } from "../../utils/upcomingLaunchAdapter";

export const spacexApi = createApi({
  reducerPath: "spacexApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/",
  }),
  tagTypes: ["Launch", "Upcoming"],
  endpoints: (builder) => ({
    getUpcomingLaunches: builder.query<ILaunch[], void>({
      query: () => "launches/upcoming",
      providesTags: ["Upcoming"],
      transformResponse: (response: ILaunchAPIResponse[]) => {
        return response.map((launch) => upcomingLaunchAdapter(launch));
      },
    }),
  }),
});

export const { useGetUpcomingLaunchesQuery } = spacexApi;
