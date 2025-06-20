import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";
import { LaunchCard } from "../../molecules/LaunchCard";
import type { IUpcomingLaunch } from "../../../interfaces/IUpcomingLaunch";

const MotionGrid = motion.create(Chakra.Grid);

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

interface IProps {
  items: IUpcomingLaunch[];
  isFavourite: (id: string) => boolean;
  handleToggleFavourite: (id: string) => void;
  handleNavigateToDetail: (id: string) => void;
}

export const LaunchCardContainer = ({
  items,
  isFavourite,
  handleToggleFavourite,
  handleNavigateToDetail,
}: IProps) => {
  return (
    <Chakra.VStack alignItems="start" justifyContent="start" width="full">
      <MotionGrid
        width="full"
        layout
        gap={8}
        gridTemplateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {items.map((item) => (
          <LaunchCard
            key={item.id}
            flightNumber={item.flightNumber}
            name={item.name}
            rocketType={item.rocketType}
            numberOfCores={item.numberOfCores}
            isFavourite={isFavourite(item.id)}
            date={item.date}
            onToggleFavourite={() => handleToggleFavourite(item.id)}
            onClick={() => handleNavigateToDetail(item.id)}
          />
        ))}
      </MotionGrid>
    </Chakra.VStack>
  );
};
