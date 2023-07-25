import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { partnersData } from "../../data/PartnersData";
import { Box, Flex, Image } from "@chakra-ui/react";

import HeadLines from "../common/HeadLine";
import Marquee from "react-fast-marquee";

function MarketingComponent() {
  return (
    <Box
      zIndex={4}
      flexDir={{ base: "column", lg: "row" }}
      display={"flex"}
      justifyContent={{ md: "flex-start" }}
      alignItems={"center"}
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
          p={4}
          borderLeft={0}
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
        py={8}
        px={8}
      >
        <HeadLines desc="" subTitle="" title="MARKETING" />
      </Box>
    </Box>
  );
}
export default MarketingComponent;
