import { colors } from "./theme/colors";

import AISection from "./sections/AISection";
import HomeSection from "./sections/HomeSection";
import EcoSystemSection from "./sections/EcoSystemSection";
import PartnersSection from "./sections/PartnersSection";

import { Box, Container, ChakraProvider } from "@chakra-ui/react";

import Scene from "./components/Scene";
import MarketingSection from "./sections/MarketingSection";
import TokenSection from "./sections/TokenSection";
import RoadmapSection from "./sections/RoadmapSection";

function App() {
  return (
    <ChakraProvider>
      <Box bg={colors.bgColor}>
        <Scene />
        <Container
          p={0}
          mb={8}
          minH="100vh"
          maxW={{
            base: "100%",
            lg: "990px",
            xl: "70%",
          }}
          border="1px"
          borderColor={colors.boxBorder}
          borderRadius={"xl"}
          pos="relative"
          display={"flex"}
          flexDir="column"
          rowGap={{ base: "8rem" }}
        >
          <HomeSection />
          <AISection />
          <MarketingSection />
          <EcoSystemSection />
          <PartnersSection />
          <RoadmapSection />
          <TokenSection />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
