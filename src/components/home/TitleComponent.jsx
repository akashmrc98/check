import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import HeadLines from "../common/HeadLine";
import HeadLines2 from "../common/HeadLine_2";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function TitleComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index === 4) setIndex(0);
      else setIndex(index + 1);
    }, 4000);
  }, [index]);

  return (
    <Box
      width="100%"
      pos="relative"
      minH={{ base: "60vh", md: "80vh", lg: "100vh" }}
    >
      <Box bottom={"8%"} width="100%" pos={"absolute"} zIndex={999}>
        <Flex
          cursor={"pointer"}
          flexDirection={"column"}
          alignItems="center"
          rowGap={"1rem"}
          display="flex"
          onClick={() => {
            window.scrollBy(0, 800);
          }}
          justifyContent={"center"}
        >
          <span className="mouse">
            <span className="move"></span>
          </span>
          <Text
            fontFamily={fonts.parafont}
            fontSize={"xl"}
            fontWeight={"bold"}
            color={colors.boxBorder}
          >
            Scroll Down
          </Text>
        </Flex>
      </Box>
      <Box
        minH={{ base: "60vh", md: "80vh", lg: "100vh" }}
        display="flex"
        alignItems="center"
        mx="auto"
        zIndex={9999}
        bg={colors.bgColor}
        px={{ base: 0, lg: 12 }}
      >
        <Grid
          justifyContent={"space-between"}
          width="100%"
          pt={{ base: 32, lg: 0 }}
          templateColumns={{ base: "1fr 1fr" }}
        >
          <Box display={"flex"} justifyContent="flex-start">
            <HeadLines
              desc="UNLEASH THE POWER OF"
              subTitle="AI"
              title="Blockchain"
            />
          </Box>
          <Box display={"flex"} justifyContent="flex-end">
            <HeadLines2
              desc="UNLEASH THE POWER OF"
              subTitle="AI"
              title="Blockchain"
            />
          </Box>
        </Grid>
      </Box>

      <Box
        top="0%"
        mx="auto"
        zIndex={400}
        pos="absolute"
        height={"100vh"}
        width="100vw"
        onClick={() => scroll()}
        onWheel={() => scroll()}
        cursor="pointer"
      >
        <Spline scene="https://prod.spline.design/1DglKtaHKqrB0uWn/scene.splinecode" />
      </Box>
    </Box>
  );
}

export default TitleComponent;
