export interface IRocketAPIResponse {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  height: ISize;
  diameter: ISize;
  mass: {
    kg: number;
    lb: number;
  };
  first_stage: IFirstStage;
  second_stage: ISecondStage;
  engines: IEngine;
  landing_legs: {
    number: number;
    material: string | null;
  };
  payload_weights: IPayloadWeight[];
  flickr_images: string[];
}

interface IFirstStage {
  thrust_sea_level: IThrust;
  thrust_vacuum: IThrust;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}

interface ISecondStage {
  thrust: IThrust;
  payloads: {
    composite_fairing: {
      height: ISize;
      diameter: ISize;
    };
    option_1: string;
  };
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}

interface IEngine {
  isp: {
    sea_level: number;
    vacuum: number;
  };
  thrust_sea_level: IThrust;
  thrust_vacuum: IThrust;
  number: number;
  type: string;
  version: string;
  layout: string | null;
  engine_loss_max: number | null;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
}

interface IPayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

interface ISize {
  meters: number;
  feet: number;
}

interface IThrust {
  kN: number;
  lbf: number;
}
