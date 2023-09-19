/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function HeadLines2() {
  const [index, setIndex] = useState(0);
  const [changed, setChanged] = useState(false);

  setTimeout(() => {
    setChanged(false);
    if (index === 4) setIndex(0);
    else setIndex(index + 1);
    setChanged(true);
  }, 6000);

  return (
    <Box pos={"relative"} px={4} zIndex={24} display={"flex"}>
      <Box width="100%">
        <motion.div
          animate={{
            opacity: changed ? 1 : 0,
          }}
          transition={{
            type: "tween",
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          <Text
            display={"inline"}
            color={colors.fontLightColorV2}
            fontFamily={fonts.headingFont}
            textAlign="right"
            fontSize={{
              base: "xl",
              lg: "2xl",
              xl: "4xl",
              "2xl": "6xl",
            }}
            pb={4}
          >
            {titles[index][0]}
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
            display={"grid"}
            justifyContent="center"
            alignItems={"center"}
            bg={colors.bgColor}
            pos={"relative"}
          >
            <Box
              backgroundimage={
                "linear-gradient(to right, #ff914d, #ffa360, #feb476, #fec48d, #fed3a5, #f5daa9, #ede0b0, #e5e6b9, #cae7b8, #a9e6c0, #84e5d0, #5ce1e6)"
              }
              width={"3px"}
              right={0}
              top={0}
              height="50%"
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
              height="100%"
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
              left={0}
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
              <Box
                display={"flex"}
                justifyContent="center"
                flexDir={"column"}
                width="100%"
                boxShadow={`3px 3px 6px ${colors.fontLightColorV2}, -6px -6px 12px ${colors.boxEndColor}`}
              >
                <motion.div
                  width="100%"
                  className="bg_img"
                  style={{ width: "100%" }}
                >
                  <Box
                    color={colors.fontLightColor}
                    fontFamily={fonts.headingFont}
                    fontSize={{
                      base: "2xl",
                      lg: "3xl",
                      xl: "5xl",
                      "2xl": "7xl",
                    }}
                    py={2}
                    px={3}
                    lineHeight={1}
                  >
                    {"BLOCKCHAIN AI"}
                  </Box>{" "}
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: ".2rem",
            justifyContent: "flex-end",
          }}
          animate={{
            opacity: changed ? 1 : 0,
          }}
          transition={{
            type: "tween",
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          <Box
            borderLeft={0}
            borderTop={0}
            borderLeftColor={colors.highLightColor}
            px={4}
          >
            <Text
              px={0}
              display={"inline"}
              color={colors.fontLightColorV2}
              fontFamily={fonts.parafont}
              fontSize={{ base: "2xl", lg: "4xl", xl: "5xl" }}
            >
              {titles[index][1]}
            </Text>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HeadLines2;

const titles = [
  ["Everything about", "world"],
  ["Exapanding the", "ecosytem"],
  ["Harnessing the", "power"],
  ["Pioneering the", "future"],
  ["Pushing the", "frontier"],
];
