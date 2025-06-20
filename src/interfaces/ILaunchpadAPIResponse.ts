export interface ILaunchpadAPIResponse {
  id: string;
  name: string;
  full_name: string;
  locality: string;
  region: string;
  timezone: string;
  latitude: number;
  longitude: number;
  launch_attempts: number;
  launch_successes: number;
  rockets: string[];
  launches: string[];
  status: string;
  details: string;
  images: {
    large: string[];
  };
}
