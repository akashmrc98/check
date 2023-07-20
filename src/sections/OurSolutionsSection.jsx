/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";

import { Canvas } from "@react-three/fiber";
import { Model as Bot } from "../animations/Bot/Bot";
import { solutionsData } from "../data/OurSolutionData";

import HeadLines from "../components/HeadLine";

function OurSolutionsSection() {
  const init = {
    scale: 0.015,
    rotation: [Math.PI / 4, -1, 0],
    position: [0, -0.4, 0],
    animate: false,
  };
  const [animate, setAnimate] = useState({ ...init });
  console.log(animate);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const sceneYProgress = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    [false, true]
  );
  const sceneYPos = useTransform(scrollYProgress, [0.0, 0.2], [0, 500]);
  const sceneYPosSpring = useSpring(sceneYPos, {
    stiffness: 100,
    bounce: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const sceneYMove = useTransform(sceneYPosSpring, (value) => value);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.3) {
      setAnimate({ ...init });
    }
    if (latest > 0.3) {
      setAnimate({
        ...init,
        animate: true,
      });
    }
  });

  return (
    <Box width={"100%"} pos={"relative"} ref={ref}>
      <motion.div
        transition={{
          type: "spring",
          stiffness: 130,
          damping: 10,
          duration: 1,
        }}
        animate={{
          position: !sceneYProgress.current ? "relative" : "fixed",
          zIndex: 8,
          left: 0,
          right: 0,
          margin: "auto",
          top: "-20%",
          y: !sceneYProgress ? 0 : sceneYMove,
        }}
        style={{
          y: !sceneYProgress ? 0 : sceneYMove,
          position: !sceneYProgress.current ? "relative" : "fixed",
        }}
      >
        <Canvas
          camera={{
            position: [0, 2, -5],
          }}
          frameloop="always"
          shadows
          style={{ height: "50vh" }}
        >
          <Bot />
          <pointLight />
          <ambientLight />
          <directionalLight />
        </Canvas>
      </motion.div>

      <motion.div
        transition={{
          type: "inertia",
          stiffness: 130,
          damping: 10,
          velocity: 50,
        }}
        style={{ maxWidth: "95%", margin: "auto" }}
      >
        <Section />
      </motion.div>
    </Box>
  );
}

export default OurSolutionsSection;

function Section() {
  return (
    <Box width="92.5%" mx="auto">
      <HeadLines px={24} title="Our Mission" />
      <Grid borderRadius={"xl"}>
        {solutionsData.map((sol, i) => (
          <Box
            borderTop={i === 0 ? `none` : `1px groove ${colors.boxBorder}`}
            borderBottom={"0"}
            borderBottomRadius={i === solutionsData.length - 1 ? "xl" : "none"}
            display={"flex"}
            justifyContent="space-between"
            key={i}
          >
            <Box p={4} width="100%" display={"grid"} rowGap="2rem">
              <Text
                color={colors.highLightColor}
                fontFamily={fonts.headingFont}
                fontSize={{ base: "6xl" }}
              >
                {sol.title}
              </Text>
              <Text
                color={colors.fontLightColorV2}
                fontFamily={fonts.parafont}
                fontSize={{ base: "2xl" }}
              >
                {sol.subTitle}
              </Text>
            </Box>
            <Box width="100%"></Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems="flex-end"
              justifyContent={"center"}
              borderLeft={`1px groove ${colors.boxBorder}`}
              width="100%"
            >
              {sol.tags.map((tag, j) => (
                <Box
                  width="100%"
                  borderBottom={`1px groove ${colors.boxBorder}`}
                  borderTop={
                    j === 0 ? `1px groove ${colors.boxBorder}` : "none"
                  }
                  p={4}
                  key={j}
                >
                  <Text
                    color={colors.fontLightColor}
                    fontFamily={fonts.parafont}
                    fontWeight="bold"
                    textAlign={"right"}
                  >
                    {tag}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
