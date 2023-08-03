import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function HighLightButton(props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box cursor={"pointer"} pos={"relative"} p={2} px={8}>
      <Box
        pos="absolute"
        backgroundImage={`linear-gradient(to top, #63b7af, #00accf, #0098f5, #4872fb, #c400c6);`}
        width="3px"
        left={0}
        bottom={0}
        height={"50%"}
      ></Box>
      <Box
        backgroundImage={`linear-gradient(to left, #a8eb12, #00dc7f, #00c2c4, #00a0de, #0078c5, #0071bb, #006bb0, #0064a6, #007baf, #0091b1, #31a5b0, #63b7af)`}
        pos="absolute"
        width="89%"
        bottom={0}
        left={0}
        height={"2px"}
      ></Box>
      <Box
        backgroundImage={`linear-gradient(to right, #e63e6d, #f04760, #f85451, #fb6242, #fc7231, #fc7c28, #fb861d, #f9900e, #fb960a, #fc9c06, #fea303, #ffa900);`}
        pos="absolute"
        width="95%"
        top={0}
        right={0}
        height={"2px"}
      ></Box>
      <Box
        backgroundImage={`linear-gradient(to top, #ff0844 0%, #ffb199 100%)`}
        pos="absolute"
        width="2px"
        top={"-2%"}
        left={"2.5%"}
        transform={`rotate(45deg)`}
        height={"24%"}
      ></Box>
      <Box
        backgroundImage={`linear-gradient(to bottom, #ffa900, #f0bb00, #ddcb00, #c6dc00, #a8eb12);`}
        pos="absolute"
        width="2px"
        right={0}
        top={0}
        height={"66%"}
      ></Box>
      <Box
        bg={`#A8EB12`}
        pos="absolute"
        width="2px"
        bottom={"-6%"}
        right={"5%"}
        transform={`rotate(45deg)`}
        height={"50%"}
      ></Box>
      <Box
        onTouchEnd={() => setIsHover(false)}
        onTouchStart={() => setIsHover(true)}
      >
        <motion.div
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          style={{
            rotate: isHover ? 180 : 0,
          }}
        >
          <Text
            width={"100%"}
            mx="auto"
            fontFamily={fonts.headingFont}
            fontWeight="bold"
            color={colors.highLightColor}
            fontSize={{ base: "3xl" }}
          >
            {props.title}
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
}

export default HighLightButton;
