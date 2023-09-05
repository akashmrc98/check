import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function HighLightButton(props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Box my={2} cursor={"pointer"} pos={"relative"} py={1} px={4}>
      <Box
        pos="absolute"
        backgroundImage={`linear-gradient(to right, #e63e6d, #f04760, #f85451, #fb6242, #fc7231, #fc7c28, #fb861d, #f9900e, #fb960a, #fc9c06, #fea303, #ffa900);`}
        width="3px"
        left={0}
        bottom={0}
        height={"50%"}
      ></Box>
      <Box
        backgroundImage={`linear-gradient(to top, #ff0844 0%, #ffb199 100%)`}
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
        backgroundImage={`linear-gradient(to right, #e63e6d, #f04760, #f85451, #fb6242, #fc7231, #fc7c28, #fb861d, #f9900e, #fb960a, #fc9c06, #fea303, #ffa900);`}
        pos="absolute"
        width="2px"
        top={"-2%"}
        left={"2.5%"}
        transform={`rotate(45deg)`}
        height={"24%"}
      ></Box>

      <Box
        backgroundImage={`linear-gradient(to top, #ff0844 0%, #ffb199 100%)`}
        pos="absolute"
        width="2px"
        right={0}
        top={0}
        height={"100%"}
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
