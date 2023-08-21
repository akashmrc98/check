import { Box, Grid, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
// import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import Line from "../common/Line";
import Spline from "@splinetool/react-spline";
import HeadLines from "../common/HeadLine";

// import { Canvas } from "@react-three/fiber";
// import { Model } from "../../animations/Robot/Robot";
// import BG from "/public/bg/6.jpg";

function TitleComponent() {
  // const [look, setLook] = useState({
  //   x: 0,
  //   y: 0,
  // });
  const titlesMapSectionOne = [
    [
      "E",
      "v",
      "e",
      "r",
      "y",
      "t",
      "h",
      "i",
      "n",
      "g",
      "\u00A0",
      "a",
      "b",
      "o",
      "u",
      "t",
    ],
    ["E", "x", "a", "p", "a", "n", "d", "i", "n", "g", "\u00A0", "t", "h", "e"],
    ["H", "a", "r", "n", "e", "s", "s", "i", "n", "g", "\u00A0", "t", "h", "e"],
    ["P", "i", "o", "n", "e", "e", "r", "i", "n", "g", "\u00A0", "t", "h", "e"],
    ["P", "u", "s", "h", "i", "n", "g", "\u00A0", "t", "h", "e"],
  ];
  const titlesMapSectionTwo = [
    ["w", "o", "r", "l", "d"],
    ["e", "c", "o", "s", "y", "t", "e", "m"],
    ["p", "o", "w", "e", "r"],
    ["f", "u", "t", "u", "r", "e"],
    ["f", "r", "o", "n", "t", "i", "e", "r"],
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index === 4) setIndex(0);
      else setIndex(index + 1);
    }, 4000);
  }, [index]);

  return (
    <Box
      pos="relative"
      minH={{ base: "60vh", md: "80vh", lg: "100vh" }}
      // backgroundRepeat={"no-repeat"}
      // backgroundSize="cover"
      // backgroundImage={BG}
    >
      <Box
        top="10%"
        mx="auto"
        zIndex={400}
        pos="absolute"
        height={"100vh"}
        width="100vw"
      >
        <Spline scene="https://prod.spline.design/elhD9V7FEHnblHz0/scene.splinecode" />
      </Box>
      <Box
        minH={{ base: "60vh", md: "80vh", lg: "100vh" }}
        display="flex"
        alignItems="center"
        mx="auto"
        zIndex={1}
        width={{ base: "90%", lg: "80%" }}
      >
        <Line left={"6%"} />
        <Line left={"94%"} />
        <Grid
          justifyContent={"space-between"}
          width="100%"
          pt={{ base: 32, lg: 0 }}
          templateColumns={{ base: "1fr 1fr" }}
        >
          <Box display={"flex"} justifyContent="flex-start">
            <HeadLines
              desc="UNLEASH THE POWER OF"
              subTitle="AI"
              title="Blockchain"
            />
          </Box>
          <Box display={"flex"} justifyContent="flex-end">
            <HeadLines
              desc="UNLEASH THE POWER OF"
              subTitle="AI"
              title="Blockchain"
            />
          </Box>
          {/* <Box
            display={"flex"}
            justifyContent="center"
            flexDir={"column"}
            width="100%"
          > */}
          {/* <motion.div style={{ width: "100%" }}>
              <Box
                cursor={"none"}
                fontWeight={"bold"}
                fontFamily={fonts.headingFont}
                fontSize={{ base: "4xl", lg: "6xl", xl: "8xl" }}
                fontStyle="italic"
                color={colors.fontLightColor}
              >
                <AnimatePresence>
                  <motion.div>
                    {[...titlesMapSectionOne][index].map((b, k) => (
                      <motion.div
                        style={{
                          display: "inline-block",
                          fontWeight: "bolder",
                        }}
                        key={k}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "tween",
                          stiffness: 260,
                          damping: 20,
                          delay: Math.random(
                            0,
                            titlesMapSectionTwo[index].length
                          ),
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      >
                        {b}
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </Box>{" "}
              <Text
                cursor={"none"}
                fontWeight={"bold"}
                fontSize={{ base: "3xl", lg: "4xl", xl: "6xl" }}
                fontFamily={fonts.parafont}
                color={colors.highLightColor}
                className="grad_txt"
              >
                Blockchain AI
              </Text>
              <Box
                cursor={"none"}
                fontWeight={"bold"}
                fontFamily={fonts.headingFont}
                fontSize={{ base: "4xl", lg: "6xl", xl: "8xl" }}
                fontStyle="italic"
                color={colors.fontLightColor}
              >
                {titlesMapSectionTwo[index].map((b, k) => (
                  <motion.div
                    style={{
                      display: "inline-block",
                      fontWeight: "bolder",
                    }}
                    key={k}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "tween",
                      stiffness: 260,
                      damping: 20,
                      delay: Math.random(0, titlesMapSectionTwo[index].length),
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    {b}
                  </motion.div>
                ))}
              </Box>{" "}
            </motion.div> */}
          {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1, scale: 1, y: 0 },
                hidden: { opacity: 0, scale: 0, y: 220 },
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
              }}
            >
              <Text
                cursor={"none"}
                fontWeight={"bold"}
                fontSize={{ base: "md", lg: "lg", xl: "2xl" }}
                fontFamily={fonts.headingFont}
                color={colors.fontLightColorV2}
              >
                {`Explore the Realm of Next-Gen AI`}
              </Text>
            </motion.div> */}
          {/* </Box> */}
          {/* <motion.div
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
          </motion.div> */}
        </Grid>
      </Box>
    </Box>
  );
}

export default TitleComponent;
