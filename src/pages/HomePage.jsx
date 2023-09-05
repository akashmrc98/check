import { Box } from "@chakra-ui/react";
import { colors } from "../theme/colors";
import { LiaArrowCircleUpSolid } from "react-icons/lia";

import Navbar from "../components/common/Navbar";

import TitleComponent from "../components/home/TitleComponent";
import AIComponent from "../components/home/AIComponent";
import EcoSystemComponent from "../components/home/EcoSystemComponent";
import MarketingComponent from "../components/home/MarketingComponent";
import PartnersComponent from "../components/home/PartnersComponent";
import RoadmapComponent from "../components/home/RoadmapComponent";
import TeamComponent from "../components/home/TeamComponent";
import TokenComponent from "../components/home/Token/TokenComponent";
import FaqComponent from "../components/home/Faq";
import Footer from "../components/common/Footer";
import Feat from "../components/home/FeaturesComponent";
import Sol from "../components/home/OurSolution/OurSolutionsComponent";

import BG from "/public/bg/16.jpg";

import { Element } from "react-scroll";

function HomePage() {
  return (
    <Box
      display={"flex"}
      flexDir="column"
      justifyContent="space-between"
      position={"relative"}
      bg={colors.bgColor}
    >
      <Box
        cursor={"pointer"}
        onClick={() => window.scrollTo(0, 0)}
        position={"fixed"}
        bottom={"2%"}
        right="1%"
        zIndex={999999999999}
        display={{ base: "none", xl: "block" }}
      >
        <LiaArrowCircleUpSolid size={54} color={colors.highLightColor} />
      </Box>
      <Navbar />
      <TitleComponent />
      <Box
        zIndex={9999999999999}
        backgroundImage={BG}
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        backgroundBlendMode="color"
        backgroundPosition="center"
        backgroundClip={"border-box"}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          rowGap={{ base: "4rem", lg: "4rem" }}
          zIndex={4}
          width={{ base: "100%", lg: "88%" }}
          mx="auto"
          border={0}
          outline={0}
          p={4}
        >
          <Element name="AI">
            <AIComponent />
          </Element>
          <MarketingComponent />
          <Element name="ECO">
            <EcoSystemComponent />
          </Element>
          <Feat />
          {/* <How /> */}
          <Sol />
          <PartnersComponent />
          <Element name="ROAD">
            <RoadmapComponent />
          </Element>
          <Element name="TOKEN">
            <TokenComponent />
          </Element>
          <Element name="TEAM">
            <TeamComponent />
          </Element>
          <FaqComponent />
        </Box>
      </Box>
      <Box zIndex={9999999}>
        <Footer />
      </Box>
    </Box>
  );
}

export default HomePage;
