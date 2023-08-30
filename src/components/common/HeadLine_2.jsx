/* eslint-disable react/prop-types */
import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function HeadLines2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index === 4) setIndex(0);
      else setIndex(index + 1);
    }, 4000);
  }, [index]);

  return (
    <Box pos={"relative"} zIndex={24} display={"flex"}>
      <Box width="100%">
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
          <AnimatePresence>
            <motion.div>
              {[...titlesMapSectionOne][index].map((b, k) => (
                <motion.div
                  style={{
                    display: "inline-block",
                    fontWeight: "bolder",
                  }}
                  key={k}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "tween",
                    stiffness: 260,
                    damping: 20,
                    delay: Math.random(0, titlesMapSectionTwo[index].length),
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <Text
                    color={colors.fontLightColorV2}
                    fontFamily={fonts.headingFont}
                    textAlign="right"
                    fontSize={{
                      base: "xl",
                      lg: "2xl",
                      xl: "3xl",
                      "2xl": "5xl",
                    }}
                    pb={4}
                  >
                    {b}
                  </Text>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
              backgroundImage={
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
              >
                <motion.div className="bg_img" style={{ width: "100%" }}>
                  <Box
                    color={colors.fontLightColor}
                    fontFamily={fonts.headingFont}
                    fontSize={{
                      base: "2xl",
                      lg: "3xl",
                      xl: "4xl",
                      "2xl": "6xl",
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
          <Box
            border={`2px solid ${colors.boxBorder}`}
            borderLeft={0}
            borderTop={0}
            borderLeftColor={colors.highLightColor}
            bg={colors.bgColor}
            px={4}
          >
            {titlesMapSectionTwo[index].map((b, k) => (
              <motion.div
                style={{
                  display: "inline-block",
                  fontWeight: "bolder",
                }}
                key={k}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  stiffness: 260,
                  damping: 20,
                  delay: Math.random(0, titlesMapSectionTwo[index].length),
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Text
                  px={0}
                  color={colors.fontLightColorV2}
                  fontFamily={fonts.headingFont}
                  fontSize={{ base: "2xl", lg: "4xl", xl: "5xl" }}
                  className="grad_txt"
                >
                  {b}
                </Text>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HeadLines2;

const titlesMapSectionTwo = [
  ["w", "o", "r", "l", "d"],
  ["e", "c", "o", "s", "y", "t", "e", "m"],
  ["p", "o", "w", "e", "r"],
  ["f", "u", "t", "u", "r", "e"],
  ["f", "r", "o", "n", "t", "i", "e", "r"],
];

const titlesMapSectionOne = [
  [
    "E",
    "v",
    "e",
    "r",
    "y",
    "t",
    "h",
    "i",
    "n",
    "g",
    "\u00A0",
    "a",
    "b",
    "o",
    "u",
    "t",
  ],
  ["E", "x", "a", "p", "a", "n", "d", "i", "n", "g", "\u00A0", "t", "h", "e"],
  ["H", "a", "r", "n", "e", "s", "s", "i", "n", "g", "\u00A0", "t", "h", "e"],
  ["P", "i", "o", "n", "e", "e", "r", "i", "n", "g", "\u00A0", "t", "h", "e"],
  ["P", "u", "s", "h", "i", "n", "g", "\u00A0", "t", "h", "e"],
];
