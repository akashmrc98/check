import { Box, Button, Text } from "@chakra-ui/react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SceneFactoryWrapper from "../animations/SceneFactoryWrapper";
import { AnimationType } from "../animations/animationType";
import { fonts } from "../theme/fonts";
import { colors } from "../theme/colors";
import { motion } from "framer-motion";

function Scene() {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      position={"relative"}
    >
      <Box top="8%" zIndex={8} pos="absolute">
        <Box
          flexDir={"column"}
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <motion.div
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
              fontSize={{ base: "3xl", lg: "5xl", xl: "7xl" }}
              fontFamily={fonts.parafont}
              color={colors.fontLightColor}
            >
              Main Brand Logo
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
              color={colors.highLightColor}
            >
              Main Brand Logo
            </Text>
          </motion.div>
        </Box>
      </Box>
      <Button
        onClick={() => {
          let pageHeight = window.innerHeight;
          window.scrollBy(0, pageHeight - 100);
        }}
        zIndex={8}
        position={"absolute"}
        bottom={"5%"}
      >
        Scroll Down
      </Button>
      <Canvas
        style={{
          height: "100%",
        }}
        frameloop="demand"
        shadows
      >
        <SceneFactoryWrapper type={AnimationType.drone} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
        />
        <pointLight position={[10, 10, 10]} />
        <ambientLight intensity={0.1} />
      </Canvas>
    </Box>
  );
}

export default Scene;
