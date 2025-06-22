import * as Chakra from "@chakra-ui/react";
import { CustomTitle } from "../../components/atoms/CustomTitle";
import { PublicTemplate } from "../../components/templates/PublicTemplate";
import { BackgroundStars } from "../../components/molecules/BackgroundStars";
import { useLaunchDetail } from "../../hooks/useLaunchDetail";
import { DetailsSection } from "./components/DetailsSection";
import { LinksSection } from "./components/LinksSection";
import { LoadingSpinner } from "../../components/atoms/LoadingSpinner";
import { PayloadSection } from "./components/PayloadSection";
import { BreadcrumsWithAction } from "../../components/organisms/BreadcrumsWithAction";

export const PageLaunch = () => {
  const { state, methods } = useLaunchDetail();

  return (
    <PublicTemplate
      bgGradient="linear-gradient(to bottom right, #111827, #1e3a8a, #000000)"
      main={
        <Chakra.VStack w="full" h="full" gap={8}>
          <BackgroundStars />

          {state.isLoading && <LoadingSpinner />}
          {!state.isLoading && (
            <>
              <Chakra.VStack gap={2} w="full">
                <BreadcrumsWithAction
                  id={state.launch.id}
                  isLiked={state.isFavourite}
                  handleToggleLike={methods.handleToggleFavourite}
                />

                <CustomTitle title={state.launch.name} />
              </Chakra.VStack>

              <DetailsSection
                rocketDescription={state.launch.rocketDescription}
                rocketName={state.launch.rocketName}
                numberOfCores={state.launch.numberOfCores}
                numberOfReusedCores={state.launch.numberOfReusedCores}
                flightNumber={state.launch.flightNumber}
                launchPadLocation={state.launch.launchPadLocation}
                date={state.launch.date}
              />
              {!!state.launch.payloads.length && (
                <PayloadSection payloads={state.launch.payloads} />
              )}

              {!!state.launch.links.length && (
                <LinksSection links={state.launch.links} />
              )}
            </>
          )}
        </Chakra.VStack>
      }
    />
  );
};
