import { Box } from "@chakra-ui/react";

import { colors } from "../theme/colors";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { Model } from "../animations/Robot/Robot";

import Line from "../components/common/Line";

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
    <Box
      display={"flex"}
      flexDir="column"
      justifyContent="space-between"
      position={"relative"}
      bg={colors.bgColor}
    >
      <Box width="88%" mx="auto">
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
          <TitleComponent />
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
      <OurSolutionComponent />
      <Line left={"6%"} />
      <Line left={"50%"} />
      <Line right={"6%"} />
    </Box>
  );
}

export default HomePage;
