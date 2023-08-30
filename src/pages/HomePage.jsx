import { Box } from "@chakra-ui/react";

import { useRef } from "react";
import { colors } from "../theme/colors";

import AIComponent from "../components/home/AIComponent";
import EcoSystemComponent from "../components/home/EcoSystemComponent";
// import HomeComponent from "../components/home/HomeComponent";
// import HowComponent from "../components/home/How/HowComponent";
import MarketingComponent from "../components/home/MarketingComponent";
import PartnersComponent from "../components/home/PartnersComponent";
import TitleComponent from "../components/home/TitleComponent";
import RoadmapComponent from "../components/home/RoadmapComponent";
// import TokenComponent from "../components/home/Token/TokenComponent";
import TeamComponent from "../components/home/TeamComponent";
// import OurSolutionComponent from "../components/home/OurSolution/OurSolutionsComponent";
import Footer from "../components/common/Footer";
import FaqComponent from "../components/home/Faq";
import Line from "../components/common/Line";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import TokenComponent from "../components/home/Token/TokenComponent";
import BG from "/public/bg/1.jpg";

function HomePage() {
  const ref = useRef();

  return (
    <Box
      display={"flex"}
      flexDir="column"
      justifyContent="space-between"
      position={"relative"}
      px={{ base: 4, lg: 0 }}
      bg={colors.bgColor}
    >
      <Box
        cursor={"pointer"}
        onClick={() => window.scrollTo(0, 0)}
        position={"fixed"}
        bottom={"2%"}
        right="1%"
        zIndex={999999}
        display={{ base: "none", xl: "block" }}
      >
        <LiaArrowCircleUpSolid size={54} color={colors.highLightColor} />
      </Box>
      <Line left={"6%"} />
      <Line left={"94%"} />
      {/* <Navbar /> */}
      <TitleComponent />
      <Box className="bg_img">
        <Box
          display={"flex"}
          flexDirection="column"
          rowGap={{ base: "4rem", lg: "4rem" }}
          zIndex={4}
          width={{ base: "100%", lg: "88%" }}
          ref={ref}
          p={0}
          borderRadius="xl"
          mx="auto"
          backgroundImage={BG}
          backgroundRepeat="no-repeat"
          backgroundSize={"cover"}
          backgroundBlendMode="color"
          backgroundPosition="center"
        >
          <AIComponent />
          {/* <HomeComponent /> */}
          <MarketingComponent />
          <EcoSystemComponent />
          {/* <FeaturesComponent /> */}
          <PartnersComponent />
          <RoadmapComponent />
          <TokenComponent />

          {/* <HowComponent /> */}
          <TeamComponent />
          <FaqComponent />
        </Box>
      </Box>
      {/* <OurSolutionComponent /> */}
      <Box zIndex={9999999} className="bg_img">
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
