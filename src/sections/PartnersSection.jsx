import { Box, Flex, Image } from "@chakra-ui/react";
import { partnersData } from "../data/PartnersData";

import { colors } from "../theme/colors";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";
import HeadLines from "../components/HeadLine";

function PartnersSection() {
  return (
    <Box
      flexDirection={{ base: "column", lg: "row" }}
      display={"flex"}
      justifyContent="flex-start"
      alignItems={"center"}
    >
      <Box py={8} px={8}>
        <HeadLines desc="" subTitle="" title="PARTNERS" />
      </Box>
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
          borderLeftRadius={{ base: 0, lg: "xl" }}
          border={`3px solid ${colors.boxBorder}`}
          borderStyle="groove"
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
    </Box>
  );
}
export default PartnersSection;
