/* eslint-disable react/prop-types */
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function HeadLines(props) {
  return (
    <Box pos={"relative"} zIndex={24} display={"flex"}>
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
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center ",
          }}
        >
          <Text
            color={colors.fontLightColorV2}
            fontFamily={fonts.specialFont}
            fontSize={{ base: "sm", lg: "lg" }}
            fontWeight="bold"
          >
            {props.desc}
          </Text>
          <Flex
            mr={1}
            boxShadow={`-2px -2px 4px ${colors.fontLightColorV2}, 3px 3px 6px ${colors.boxEndColor}`}
            maxW="16"
            maxH="16"
            borderTopRadius="10rem"
            py={2}
            px={1}
          >
            <Image src={props.img} />
          </Flex>{" "}
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
            display={"grid"}
            justifyContent="center"
            alignItems={"center"}
            bg={colors.bgColor}
            pos={"relative"}
            boxShadow={`-1px -1px 2px ${colors.fontLightColorV2}, 1px 2px 4px ${colors.boxEndColor}`}
          >
            <Box
              backgroundImage={
                "linear-gradient(to right, #ff914d, #ffa360, #feb476, #fec48d, #fed3a5, #f5daa9, #ede0b0, #e5e6b9, #cae7b8, #a9e6c0, #84e5d0, #5ce1e6)"
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
                "linear-gradient(to bottom, #ee4540, #ee4540, #ee4540, #ee4540, #ee4540, #f04d40, #f15440, #f35b41, #f66a43, #fa7745, #fc8448, #ff914d)"
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
                "linear-gradient(to right, #ff6000, #ff6f16, #ff7d27, #ff8a36, #ff9645, #ffa154, #ffac63, #ffb673, #ffc387, #ffcf9b, #ffdbb1, #ffe6c7)"
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
                "linear-gradient(to right, #5ce1e6, #5ce1e6, #5ce1e6, #5ce1e6, #5ce1e6, #6de3dc, #7fe5d3, #90e6ca, #b4e7bc, #d4e6b7, #ede6bb, #ffe6c7)"
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
              className="bg_img"
            >
              <Text
                color={colors.fontLightColor}
                fontFamily={fonts.headingFont}
                fontSize={{ base: "4xl", lg: "6xl" }}
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            columnGap: ".2rem",
          }}
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
            fontSize={{ base: "2xl", lg: "4xl" }}
            fontWeight="bold"
            py={6}
            px={6}
            borderLeftColor={colors.highLightColor}
            lineHeight={0.2}
            className="grad_txt"
            boxShadow={`-2px -2px 4px ${colors.fontLightColorV2}, 3px 3px 6px ${colors.boxEndColor}`}
          >
            {/* {props.subTitle} */}
            $OPAI
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HeadLines;
