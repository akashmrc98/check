/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function HeadLines(props) {
  return (
    <Box>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { visibility: "visible", opacity: 1, scale: 1, x: 0 },
          hidden: { visibility: "hidden", opacity: 0.5, scale: 0.5, x: -220 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Text
          color={colors.fontLightColorV2}
          fontFamily={fonts.parafont}
          fontSize={{ base: "sm", lg: "lg" }}
        >
          {props.desc}
        </Text>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { scale: 1 },
          hidden: { scale: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          maxW="320px"
          pos={"relative"}
        >
          <Box
            backgroundImage={
              "linear-gradient(to right bottom, #b80043, #c30047, #ce004b, #da0050, #e50054, #eb0358, #f2075c, #f80b60, #fa1264, #fc1868, #fd1c6d, #ff2171)"
            }
            width={"3px"}
            right={0}
            bottom={0}
            height="100%"
            pos="absolute"
            transform={"rotate(180deg)"}
            borderRadius={"2rem"}
          ></Box>
          <Box
            backgroundImage={
              "linear-gradient(to right bottom, #b80043, #c30047, #ce004b, #da0050, #e50054, #eb0358, #f2075c, #f80b60, #fa1264, #fc1868, #fd1c6d, #ff2171)"
            }
            width={"3px"}
            left={0}
            top={0}
            height="50%"
            pos="absolute"
            transform={"rotate(180deg)"}
            borderRadius={"2rem"}
          ></Box>
          <Box
            backgroundImage={
              "linear-gradient(to right bottom, #b80043, #c30047, #ce004b, #da0050, #e50054, #eb0358, #f2075c, #f80b60, #fa1264, #fc1868, #fd1c6d, #ff2171)"
            }
            width={"100%"}
            height="3px"
            pos="absolute"
            borderRadius={"2rem"}
            top={0}
            left={0}
          ></Box>
          <Box
            backgroundImage={
              "linear-gradient(to right bottom, #b80043, #c30047, #ce004b, #da0050, #e50054, #eb0358, #f2075c, #f80b60, #fa1264, #fc1868, #fd1c6d, #ff2171)"
            }
            width={"75%"}
            right={0}
            height="3px"
            pos="absolute"
            borderRadius={"2rem"}
            bottom={0}
          ></Box>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Text
              color={colors.fontLightColor}
              fontFamily={fonts.parafont}
              fontSize={{ base: "3xl", lg: "5xl" }}
              py={2}
              px={3}
              lineHeight={1}
            >
              {props.title}
            </Text>
          </motion.div>
        </Box>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -200 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Text
          color={colors.fontLightColorV2}
          fontFamily={fonts.parafont}
          fontSize={{ base: "2xl", lg: "3xl" }}
          py={2}
          px={3}
          lineHeight={0.2}
        >
          {props.subTitle}
        </Text>
      </motion.div>
    </Box>
  );
}

export default HeadLines;
