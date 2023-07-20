import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

function TitleSection() {
  return (
    <Box width="100%">
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
  );
}

export default TitleSection;
