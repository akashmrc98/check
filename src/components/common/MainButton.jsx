/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import Typewriter from "typewriter-effect";

function Mainbutton() {
  const [changed, setChanged] = useState(true);

  return (
    <Box
      minW="220px"
      onMouseEnter={() => setChanged(false)}
      onMouseUp={() => setChanged(false)}
      onMouseMove={() => setChanged(false)}
      onMouseDown={() => setChanged(false)}
      onMouseUpCapture={() => setChanged(false)}
      onMouseMoveCapture={() => setChanged(false)}
      onMouseOverCapture={() => setChanged(false)}
      onMouseOutCapture={() => setChanged(true)}
      onMouseDownCapture={() => setChanged(true)}
      onMouseLeave={() => setChanged(true)}
      onMouseOver={() => setChanged(true)}
      onMouseOut={() => setChanged(true)}
      pos={"relative"}
      zIndex={24}
      display={"flex"}
      borderRadius="sm"
      boxShadow={
        !changed
          ? `0px 0px 32px ${colors.highLightColor}`
          : `0px 0px 2px ${colors.fontLightColor}`
      }
      transition={`all 200ms ease-in-out`}
    >
      <Box width="100%">
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
            pos={"relative"}
          >
            <Box
              borde
              backgroundImage={
                changed
                  ? `linear-gradient(to bottom, #ee4540, #ee4540, #ee4540, #ee4540, #ee4540, #f04d40, #f15440, #f35b41, #f66a43, #fa7745, #fc8448, #ff914d)`
                  : `linear-gradient(to right, #ff914d, #ffa360, #feb476, #fec48d, #fed3a5, #f5daa9, #ede0b0, #e5e6b9, #cae7b8, #a9e6c0, #84e5d0, #5ce1e6)`
              }
              width={"3px"}
              my={1}
              right={0}
              bottom={changed ? 0 : ""}
              top={!changed ? 0 : ""}
              height="50%"
              pos="absolute"
              transform={"rotate(180deg)"}
              borderRadius={"2rem"}
            ></Box>
            <Box
              transition={"all 200ms ease-in-out"}
              backgroundImage={
                changed
                  ? "linear-gradient(to bottom, #ee4540, #ee4540, #ee4540, #ee4540, #ee4540, #f04d40, #f15440, #f35b41, #f66a43, #fa7745, #fc8448, #ff914d)"
                  : `linear-gradient(to right, #ff914d, #ffa360, #feb476, #fec48d, #fed3a5, #f5daa9, #ede0b0, #e5e6b9, #cae7b8, #a9e6c0, #84e5d0, #5ce1e6)`
              }
              left={0}
              top={changed ? 0 : ""}
              bottom={!changed ? 0 : ""}
              height="50%"
              my={1}
              width="3px"
              pos="absolute"
              transform={"rotate(180deg)"}
              borderRadius={"2rem"}
            ></Box>
            <Box
              transition={"all 200ms ease-in-out"}
              backgroundImage={
                changed
                  ? `linear-gradient(to right, #e63e6d, #f04760, #f85451, #fb6242, #fc7231, #fc7c28, #fb861d, #f9900e, #fb960a, #fc9c06, #fea303, #ffa900);`
                  : `linear-gradient(to right, #5ce1e6, #5ce1e6, #5ce1e6, #5ce1e6, #5ce1e6, #6de3dc, #7fe5d3, #90e6ca, #b4e7bc, #d4e6b7, #ede6bb, #ffe6c7)`
              }
              width={"80%"}
              height="3px"
              pos="absolute"
              borderRadius={"2rem"}
              top={0}
              left={changed ? 0 : ""}
              right={!changed ? 0 : ""}
            ></Box>
            <Box
              transition={"all 200ms ease-in-out"}
              backgroundImage={
                changed
                  ? `linear-gradient(to top, #ff0844 0%, #ffb199 100%)`
                  : `linear-gradient(to right, #5ce1e6, #5ce1e6, #5ce1e6, #5ce1e6, #5ce1e6, #6de3dc, #7fe5d3, #90e6ca, #b4e7bc, #d4e6b7, #ede6bb, #ffe6c7)`
              }
              width={"75%"}
              right={changed ? 0 : ""}
              left={!changed ? 0 : ""}
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
                p={2}
              >
                <motion.div style={{ width: "100%" }}>
                  <Box
                    color={
                      changed ? colors.fontLightColor : colors.highLightColor
                    }
                    fontFamily={fonts.parafont}
                    fontSize={{
                      base: "2xl",
                      lg: "3xl",
                    }}
                    py={2}
                    px={3}
                    lineHeight={1}
                  >
                    <Typewriter
                      options={{
                        loop: true,
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("TRY DAPP")
                          .pauseFor(6000)
                          .deleteAll()
                          .start();
                      }}
                    />
                  </Box>{" "}
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Mainbutton;