import { fonts } from "../../theme/fonts";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import SRC from "/public/ai_section/1.jpg";

import HeadLines from "../common/HeadLine";

function FeaturesComponent() {
  return (
    <Box p={4} pos="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { visibility: "visible", opacity: 1, scale: 1 },
          hidden: { visibility: "hidden", opacity: 0, scale: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Grid>
          <Grid gridTemplateColumns={{ base: "1fr 0", xl: "1fr 1fr" }}>
            <Flex justifyContent={"flex-start"}>
              <HeadLines
                desc="UTILITIES"
                subTitle="$OPAI"
                title="OUR MISSION"
              />
              <Box></Box>
            </Flex>
          </Grid>
          <Grid
            width="100%"
            justifyContent={"space-between"}
            alignItems="center"
            gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr" }}
            rowGap={{ base: "2rem" }}
            mt={6}
          >
            <Box width="100%">
              <Text
                fontFamily={fonts.headingFont}
                color={colors.highLightColor}
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos velit impedit quibusdam voluptas quasi accusantium
                rem cum est sed sapiente, et asperiores praesentium iste quo.
                Asperiores hic cumque id fuga.
              </Text>
            </Box>
            <Box display={"flex"} justifyContent="center" width="100%">
              <Image maxW={{ base: "360", xl: "512" }} src={SRC} />
            </Box>
          </Grid>
          <Box my={24}></Box>
          <Grid
            gridTemplateColumns={{ base: "0fr 1fr", xl: "1fr 1fr" }}
            justifyContent=""
          >
            <Box></Box>
            <Flex justifyContent={"flex-end"}>
              <HeadLines desc="UTILITIES" subTitle="$OPAI" title="OUR VISION" />
            </Flex>
          </Grid>
          <Grid
            width="100%"
            justifyContent={"space-between"}
            alignItems="center"
            gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr" }}
            rowGap={{ base: "2rem" }}
            mt={6}
          >
            <Box display={"flex"} justifyContent="center" width="100%">
              <Image maxW={{ base: "360", xl: "512" }} src={SRC} />
            </Box>
            <Box width="100%">
              <Text
                fontFamily={fonts.headingFont}
                color={colors.highLightColor}
                fontWeight="bold"
                fontSize={{ base: "xl", md: "2xl" }}
                textAlign="right"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos velit impedit quibusdam voluptas quasi accusantium
                rem cum est sed sapiente, et asperiores praesentium iste quo.
                Asperiores hic cumque id fuga.
              </Text>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}

export default FeaturesComponent;
