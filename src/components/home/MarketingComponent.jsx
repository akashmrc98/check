import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { partnersData } from "../../data/partnersData";
import { Box, Flex, Image } from "@chakra-ui/react";

import HeadLines from "../common/HeadLine";
import Marquee from "react-fast-marquee";

function MarketingComponent() {
  return (
    <Box
      zIndex={4}
      flexDirection={{ base: "column-reverse", lg: "row" }}
      display={"flex"}
      justifyContent={{ md: "flex-start" }}
      alignItems={{ base: "", xl: "center" }}
      columnGap="3rem"
    >
      <motion.div
        zIndex={4}
        style={{ width: "100%" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { visibility: "visible", opacity: 1, x: 0 },
          hidden: { visibility: "hidden", opacity: 0, x: -220 },
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
          p={4}
          className="bg_img"
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
      <Box
        display={"flex"}
        justifyContent={{ base: "flex-start", md: "flex-end" }}
      >
        <HeadLines
          x="80px"
          y="40px"
          s={1.1}
          desc=""
          subTitle=""
          title="MARKETING"
        />
      </Box>
    </Box>
  );
}
export default MarketingComponent;
