import { Box, Grid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

import { Canvas } from "@react-three/fiber";
import { Model } from "../../animations/Robot/Robot";
import BG from "/public/bg/6.jpg";

function TitleComponent() {
  const [look, setLook] = useState({
    x: 0,
    y: 0,
  });
  return (
    <Box
      minH="100vh"
      backgroundRepeat={"no-repeat"}
      backgroundSize="cover"
      backgroundImage={BG}
    >
      <Box mx="auto" zIndex={1} width="90%">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
          <Box
            display={"flex"}
            justifyContent="center"
            flexDir={"column"}
            width="100%"
          >
            <motion.div
              style={{ width: "100%" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              initial={{
                opacity: 0,
                scale: 0,
                y: -220,
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
                fontFamily={fonts.headingFont}
                fontSize={{ base: "3xl", lg: "6xl", xl: "8xl" }}
                fontStyle="italic"
                color={colors.fontLightColor}
              >
                Pushing The
              </Text>
              <Text
                cursor={"none"}
                fontWeight={"bold"}
                fontSize={{ base: "3xl", lg: "5xl", xl: "7xl" }}
                fontFamily={fonts.parafont}
                color={colors.highLightColor}
              >
                AI & AGI
              </Text>
              <Text
                cursor={"none"}
                fontWeight={"bold"}
                fontSize={{ base: "3xl", lg: "6xl", xl: "8xl" }}
                fontStyle="italic"
                fontFamily={fonts.headingFont}
                color={colors.fontLightColor}
              >
                Frontier
              </Text>
            </motion.div>
            <motion.div
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
                fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
                fontFamily={fonts.headingFont}
                color={colors.fontLightColorV2}
              >
                Welcome to the Next Generation of Decentralized AI
              </Text>
            </motion.div>
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
        </Grid>
      </Box>
    </Box>
  );
}

export default TitleComponent;
