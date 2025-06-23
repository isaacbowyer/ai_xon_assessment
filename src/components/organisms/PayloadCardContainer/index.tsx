import * as Chakra from "@chakra-ui/react";
import type { ILaunchPayload } from "../../../interfaces/ILaunchPayload";
import { PayloadCard } from "../../molecules/PayloadCard";

interface IProps {
  payloads: ILaunchPayload[];
}

export const PayloadCardContainer = ({ payloads }: IProps) => {
  return (
    <Chakra.Stack>
      {payloads.map((payload, index) => (
        <PayloadCard
          key={index}
          mass={payload.massKg}
          name={payload.name}
          type={payload.type}
        />
      ))}
    </Chakra.Stack>
  );
};
