import { Box, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

import HeadLines from "../../common/HeadLine";

import { colors } from "../../../theme/colors";
import { tokenomicsData } from "../../../data/tokenomicsData";

import TokenomicsCardComponent from "./TokenomicCardComponent";
import { fonts } from "../../../theme/fonts";

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
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          overflow={"hidden"}
        >
          <iframe
            style={{ minHeight: "60vh", minWidth: "100vw" }}
            title="charts"
            srcDoc={chart}
          />
        </Box>
      </Box>
      <Grid
        mt={12}
        templateColumns={{
          base: "1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        className="bg_img"
        width={"100%"}
        mx="auto"
        border={`1px groove ${colors.boxBorder}`}
        boxShadow={`-2px -2px 4px -1px ${colors.highLightColor}, 2px 2px 4px -1px ${colors.fontLightColor}, -2px 2px 4px -1px ${colors.highLightColor}, 2px -2px 4px -1px ${colors.fontLightColor}`}
        py={4}
        px={{ base: 4, lg: 8 }}
        rowGap="1rem"
      >
        {data.map((d, i) => (
          <Box key={i}>
            <Flex columnGap="1rem" alignItems={"center"}>
              <Box minH="8" minW="8" borderRadius={"md"} bg={d.color}></Box>
              <Text
                fontFamily={fonts.specialFont}
                fontSize={{ base: "md" }}
                color={colors.highLightColor}
              >
                {d.key}
              </Text>
              <Text
                fontFamily={fonts.headingFont}
                fontWeight="bolder"
                fontSize={{ base: "md" }}
                color={colors.fontLightColor}
              >
                {d.value}%
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

const data = [
  {
    key: "ECOSYSTEM",
    value: 30,
    color: "#ff6000",
  },
  {
    key: "PRESALE",

    value: 20,
    color: "#ff6f16",
  },
  {
    key: "MARKETING",
    value: 15,
    color: "#ff7d27",
  },
  {
    key: "LIQUIDITY",
    value: 12,

    color: "#ff8a36",
  },

  {
    key: "CEX LISTING",
    value: 9,

    color: "#ff9645",
  },
  {
    key: "NULS SCO",
    value: 5,
    color: "#ffa154",
  },
  {
    key: "ADVISORS",
    value: 4,
    color: "#ffac63",
  },
  {
    key: "AIR DROPS AND GIVEAWAYS",
    value: 3,
    color: "#ffb673",
  },
  {
    key: "PARTNERSHIP",
    value: 2,
    color: "#ffc387",
  },
];

const chart = `
<!DOCTYPE html>
<html lang="zxx">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Renderverse</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
      * {
        font-family: Staatliches;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      #chartdiv {
        margin: auto;
        display: block;
        min-height: 100vh;
        max-width: 100vw;
        overflow: hidden;
        display: flex;
      }
      body {
        background-color: black;
      }
    </style>
  </head>

  <body>
    <div id="chartdiv"></div>
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>

    <script>
      am5.ready(function () {
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");

        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([am5themes_Animated.new(root)]);

        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            radius: am5.percent(80),
            innerRadius: am5.percent(55),
            layout: root.horizontalLayout,
          })
        );

        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            name: "Series",
            valueField: "value",
            categoryField: "key",
          })
        );

        series
          .get("colors")
          .set("colors", [
            am5.color(0xff6000),
            am5.color(0xff6f16),
            am5.color(0xff7d27),
            am5.color(0xff8a36),
            am5.color(0xff9645),
            am5.color(0xffa154),
            am5.color(0xffac63),
            am5.color(0xffb673), 
            am5.color(0xffc387), 
          ]);

        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        series.data.setAll([
          {
            key: "ECOSYSTEM AND STAKING REWARDS",
            value: 30,
          },
          {
            key: "PRESALE",
            value: 20,
          },
          {
            key: "MARKETING",
            value: 15,
          },
          {
            key: "LIQUIDITY",
            value: 12,
          },

          {
            key: "CEX LISTING",
            value: 9,
          },
          {
            key: "NULS SCO",
            value: 5,
          },
          {
            key: "ADVISORS",
            value: 4,
          },
          {
            key: "AIR DROPS AND GIVEAWAYS",
            value: 3,
          },
          {
            key: "PARTNERSHIP",
            value: 2,
          },
        ]);

        // Disabling labels and ticks
        series.labels.template.set("visible", false);
        series.ticks.template.set("visible", false);

        // Adding gradients
        series.slices.template.set("strokeOpacity", 0);
        series.slices.template.set(
          "fillGradient",
          am5.RadialGradient.new(root, {
            stops: [
              {
                brighten: 1,
              },
              {
                brighten: -0.7,
              },
              {
                brighten: 1,
              },
              {
                brighten: -0.9,
              },
            ],
          })
        );
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        series.appear(1000, 100);
      });
      am5.ready();
    </script>
  </body>
</html>

`;

export default TokenComponent;
