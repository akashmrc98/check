/* eslint-disable react/prop-types */
import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import HeadLines from "../components/HeadLine";

import { Tokenomics } from "../data/TokenomicsData";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

function PropViewer(props) {
  return (
    <Flex my={4} flexDir={"row"} justifyContent="space-between">
      <Text
        fontSize={{ base: "", lg: "xl" }}
        fontFamily={fonts.headingFont}
        color={colors.fontLightColor}
      >
        {props.keyv}
      </Text>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "", lg: "xl" }}
        fontFamily={fonts.parafont}
        color={colors.fontLightColorV2}
      >
        {props.value}
      </Text>
    </Flex>
  );
}

function TokenSection() {
  return (
    <Box width="100%">
      <Grid gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        <GridItem></GridItem>
        <GridItem p={12}>
          <HeadLines desc="" subTitle="TKN" title="TOKENOMICS" />
        </GridItem>
      </Grid>
      <Box
        display={{ base: "grid" }}
        gridTemplateColumns={{ base: "1fr ", lg: "1fr 1fr" }}
        alignItems="center"
      >
        <Box
          border={`1px groove ${colors.boxBorder}`}
          py={4}
          borderLeft={0}
          borderRight={0}
          px={8}
        >
          {Tokenomics.map((t, i) => (
            <Box key={i}>
              <PropViewer value={t.value} keyv={t.key} />
            </Box>
          ))}
          <Divider />
          <Box>
            <PropViewer keyv="SELL TAX" value="3%" />
            <PropViewer keyv="BUY TAX" value="3%" />
          </Box>
        </Box>
        <Box h="60vh">
          <Canvas
            style={{
              height: "100%",
            }}
            frameloop="demand"
            shadows
          >
            <OrbitControls
              enableZoom={false}
              enableRotate={true}
              enableDamping={false}
              enablePan={false}
            />
            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.1} />
          </Canvas>
        </Box>
      </Box>
    </Box>
  );
}

export default TokenSection;
