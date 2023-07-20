import { colors } from "./theme/colors";

import { Box, ChakraProvider, Container } from "@chakra-ui/react";

import TitleSection from "./sections/TitleSection";
import HomeSection from "./sections/HomeSection";
import AISection from "./sections/AISection";
import FeaturesSection from "./sections/FeaturesSection";
import MarketingSection from "./sections/MarketingSection";
import PartnersSection from "./sections/PartnersSection";
import RoadmapSection from "./sections/RoadmapSection";
import TokenSection from "./sections/TokenSection";

import OurSolutionsSection from "./sections/OurSolutionsSection";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { Canvas } from "@react-three/fiber";

import { Model } from "./animations/Robot/Robot";
import { useRef, useState } from "react";
import EcoSystemSection from "./sections/EcoSystemSection";
import HowSection from "./sections/HowSection";

function App() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 3250]);
  const translateYSpring = useSpring(translateY, {
    stiffness: 100,
    bounce: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const ctranslateY = useTransform(translateYSpring, (value) => {
    return value;
  });
  const [look, setLook] = useState({
    x: 0,
    y: 0,
  });

  return (
    <ChakraProvider>
      <Box
        display={"flex"}
        flexDir="column"
        justifyContent="space-between"
        position={"relative"}
        bg={colors.bgColor}
      >
        <Box>
          <Box
            display={"flex"}
            flexDirection="column"
            rowGap="8rem"
            zIndex={4}
            ref={ref}
            p={0}
            borderRadius="xl"
            maxW={{ xl: "88%" }}
            mx="auto"
          >
            <TitleSection />
            <HomeSection />
            <AISection />
            <MarketingSection />
            <FeaturesSection />
            <PartnersSection />
            <RoadmapSection />
            <TokenSection />
            <EcoSystemSection />
            <HowSection />
          </Box>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { x: 0 },
              hidden: { x: 400 },
            }}
            transition={{
              type: "spring",
              stiffness: 130,
              damping: 10,
              velocity: 50,
            }}
            style={{
              height: "100vh",
              width: "100%",
              y: ctranslateY,
            }}
          >
            <Canvas
              shadows
              onPointerMove={(e) => {
                setLook({
                  x: e.movementX,
                  y: e.movementY,
                });
              }}
            >
              <Model look={look} />
              <pointLight />
              <directionalLight />
              <ambientLight />
            </Canvas>
          </motion.div>
        </Box>
        <OurSolutionsSection />
        <Line left={"6%"} />
        <Line left={"50%"} />
        <Line right={"6%"} />
      </Box>
    </ChakraProvider>
  );
}

function Line(props) {
  return (
    <Box
      left={props.left}
      zIndex={3}
      right={props.right}
      position={"fixed"}
      height={"100vh"}
      width=".5px"
      bg={colors.boxBorder}
    ></Box>
  );
}

export default App;
