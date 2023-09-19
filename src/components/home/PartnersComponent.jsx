import { colors } from "../../theme/colors";
import { motion } from "framer-motion";
import { partnersData } from "../../data/partnersData";
import { Box, Flex, Image } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";
import HeadLines from "../../components/common/HeadLine";
import Partner from "/public/icons/headline/partners.png";

function PartnersComponent() {
  return (
    <Box
      flexDirection={{ base: "column-reverse", lg: "row" }}
      display={"flex"}
      justifyContent="flex-start"
      zIndex={1}
      alignItems={{ base: "", xl: "center" }}
      columnGap="3rem"
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
          boxShadow={`-3px -3px 6px ${colors.fontLightColorV2}, 6px 6px 12px ${colors.boxEndColor}`}
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
      <Box>
        <HeadLines img={Partner} desc="" subTitle="" title="PARTNERS" />
      </Box>
    </Box>
  );
}
export default PartnersComponent;
