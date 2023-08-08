import { colors } from "../../theme/colors";
import { motion } from "framer-motion";
import { partnersData } from "../../data/partnersData";
import { Box, Flex, Image } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";
import HeadLines from "../../components/common/HeadLine";

function PartnersComponent() {
  return (
    <Box
      flexDirection={{ base: "column", lg: "row" }}
      display={"flex"}
      justifyContent="flex-start"
      alignItems={"center"}
      zIndex={1}
    >
      <motion.div
        style={{ width: "100%" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { visibility: "visible", opacity: 1, x: 0 },
          hidden: { visibility: "hidden", opacity: 0, x: 220 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Box
          borderRightRadius={{ base: 0, lg: "xl" }}
          border={`1px solid ${colors.boxBorder}`}
          borderStyle="groove"
          boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
          bg={colors.bgColor}
          p={4}
        >
          <Marquee>
            <Flex justifyContent={"space-evenly"} columnGap="1rem">
              {partnersData.map((d, i) => (
                <Image mx={4} src={d} key={i} />
              ))}
            </Flex>
          </Marquee>
        </Box>
      </motion.div>
      <Box py={8} px={8}>
        <HeadLines
          x="80px"
          y="40px"
          s={1.1}
          desc=""
          subTitle=""
          title="PARTNERS"
        />
      </Box>
    </Box>
  );
}
export default PartnersComponent;
