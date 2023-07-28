import { Box } from "@chakra-ui/react";

import { useRef } from "react";
import { colors } from "../theme/colors";

import AIComponent from "../components/home/AIComponent";
import EcoSystemComponent from "../components/home/EcoSystemComponent";
import FeaturesComponent from "../components/home/FeaturesComponent";
import HomeComponent from "../components/home/HomeComponent";
import HowComponent from "../components/home/How/HowComponent";
import MarketingComponent from "../components/home/MarketingComponent";
import PartnersComponent from "../components/home/PartnersComponent";
import TitleComponent from "../components/home/TitleComponent";
import RoadmapComponent from "../components/home/RoadmapComponent";
import TokenComponent from "../components/home/Token/TokenComponent";
import TeamComponent from "../components/home/TeamComponent";
import OurSolutionComponent from "../components/home/OurSolution/OurSolutionsComponent";

function HomePage() {
  const ref = useRef();

  return (
    <Box
      display={"flex"}
      flexDir="column"
      justifyContent="space-between"
      position={"relative"}
      bg={colors.bgColor}
    >
      <TitleComponent />
      <Box width="90%" mx="auto">
        <Box
          display={"flex"}
          flexDirection="column"
          rowGap="8rem"
          zIndex={4}
          ref={ref}
          p={0}
          borderRadius="xl"
          mx="auto"
        >
          <HomeComponent />
          <AIComponent />
          <MarketingComponent />
          <FeaturesComponent />
          <PartnersComponent />
          <RoadmapComponent />
          <TokenComponent />
          <EcoSystemComponent />
          <HowComponent />
          <TeamComponent />
        </Box>
      </Box>
      <OurSolutionComponent />
    </Box>
  );
}

export default HomePage;
