import { Box } from "@chakra-ui/react";

import { useRef } from "react";
import { colors } from "../theme/colors";

import AIComponent from "../components/home/AIComponent";
import EcoSystemComponent from "../components/home/EcoSystemComponent";
import HomeComponent from "../components/home/HomeComponent";
import HowComponent from "../components/home/How/HowComponent";
import MarketingComponent from "../components/home/MarketingComponent";
import PartnersComponent from "../components/home/PartnersComponent";
import TitleComponent from "../components/home/TitleComponent";
import RoadmapComponent from "../components/home/RoadmapComponent";
import TokenComponent from "../components/home/Token/TokenComponent";
import TeamComponent from "../components/home/TeamComponent";
import OurSolutionComponent from "../components/home/OurSolution/OurSolutionsComponent";
import Footer from "../components/common/Footer";
import FaqComponent from "../components/home/Faq";
import Navbar from "../components/common/Navbar";

function HomePage() {
  const ref = useRef();

  return (
    <Box
      display={"flex"}
      flexDir="column"
      justifyContent="space-between"
      position={"relative"}
      // className="bg_img"
      bg={colors.bgColor}
      px={{ base: 4, lg: 0 }}
    >
      <Navbar />
      <TitleComponent />
      <Box>
        <Box
          display={"flex"}
          flexDirection="column"
          rowGap={{ base: "2rem", lg: "3rem" }}
          zIndex={4}
          width={{ base: "100%", lg: "88%" }}
          ref={ref}
          p={0}
          borderRadius="xl"
          mx="auto"
        >
          <HomeComponent />
          <AIComponent />
          <MarketingComponent />
          <EcoSystemComponent />
          {/* <FeaturesComponent /> */}
          <PartnersComponent />
          <RoadmapComponent />

          {/* <HowComponent /> */}
          <TeamComponent />
          <FaqComponent />
        </Box>
      </Box>
      {/* <OurSolutionComponent /> */}
      <Footer />
    </Box>
  );
}

export default HomePage;
