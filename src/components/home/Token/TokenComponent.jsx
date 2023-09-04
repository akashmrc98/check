import { Box, Divider, Grid, GridItem } from "@chakra-ui/react";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

import HeadLines from "../../common/HeadLine";

import { colors } from "../../../theme/colors";
import { tokenomicsData } from "../../../data/tokenomicsData";

import TokenomicsCardComponent from "./TokenomicCardComponent";

function TokenComponent() {
  return (
    <Box width="100%">
      <Grid gridTemplateColumns={{ base: "1fr" }}>
        <GridItem>
          <HeadLines
            x={"80px"}
            y="30px"
            s={1.1}
            desc=""
            subTitle="$OPAI"
            title="TOKENOMICS"
          />
        </GridItem>
        <GridItem></GridItem>
      </Grid>
      <Box
        display={{ base: "grid" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        alignItems="center"
        width={"100%"}
      >
        <Box
          className="bg_img"
          width={"100%"}
          mx="auto"
          border={`1px groove ${colors.boxBorder}`}
          boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
          py={4}
          px={{ base: 4, lg: 8 }}
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
        <Box h="60vh"></Box>
      </Box>
    </Box>
  );
}

export default TokenComponent;
