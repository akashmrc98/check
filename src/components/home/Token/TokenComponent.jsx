import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import HeadLines from "../../common/HeadLine";

import { colors } from "../../../theme/colors";
import { tokenomicsData } from "../../../data/tokenomicsData";

import TokenomicsCardComponent from "./TokenomicCardComponent";

function TokenComponent() {
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
          {tokenomicsData.map((t, i) => (
            <Box key={i}>
              <TokenomicsCardComponent value={t.value} keyv={t.key} />
            </Box>
          ))}
          <Divider />
          <Box>
            <TokenomicsCardComponent keyv="SELL TAX" value="3%" />
            <TokenomicsCardComponent keyv="BUY TAX" value="3%" />
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

export default TokenComponent;
