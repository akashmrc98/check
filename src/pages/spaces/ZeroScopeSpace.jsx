import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";

function ZeroScopeSpace() {
  return (
    <Box bg={colors.bgColor}>
      <Box
        mx="auto"
        width={{ base: "100%", lg: "88%", xl: "75%" }}
        pos="relative"
      >
        <Box display={"grid"} justifyContent="center" px={2} pt={8}>
          <Text
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.highLightColor}
            mx="auto"
            fontSize={{ base: "3xl" }}
          >
            Zeroscope Text-to-Video
          </Text>
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            width="auto"
            color={colors.fontLightColor}
            mx="auto"
            fontSize={{ base: "xl" }}
          >
            A watermark-free Modelscope-based video model optimized for
            producing high-quality 16:9 compositions and a smooth video output.
          </Text>
        </Box>
        <Box
          my={8}
          h={2}
          width="100%"
          border={`1px solid ${colors.boxBorder}`}
        ></Box>
        <Grid
          width={{ base: "100%", lg: "50%" }}
          rowGap="1rem"
          columnGap={"1rem"}
          mx="auto"
          gridTemplateColumns={{
            base: "1fr",
          }}
        >
          <GridItem>
            <FormControl px={8} py={8} bg={"gray.900"}>
              <FormLabel
                fontFamily={fonts.headingFont}
                fontSize={{ base: "2xl" }}
                fontWeight="bold"
                color={colors.highLightColor}
              >
                Prompt
              </FormLabel>
              <Input
                variant={"unstyled"}
                border={`2px groove ${colors.boxBorder}`}
                p={4}
                fontFamily={fonts.parafont}
                fontSize={{ base: "xl" }}
                fontWeight="bold"
                color={colors.fontLightColor}
              />
            </FormControl>
          </GridItem>
          <Button
            size="lg"
            fontSize={{ base: "4xl" }}
            p={8}
            bg={colors.bgColor}
            boxShadow={`0 0 4px ${colors.highLightColor}`}
            color={colors.highLightColor}
            _hover={{
              color: colors.bgColor,
              bg: colors.highLightColor,
            }}
            fontFamily={fonts.headingFont}
          >
            Submit
          </Button>

          <GridItem pos="relative" minH="440px" bg={"gray.900"}>
            <Box px={2} py={1} pos="absolute" border="2px">
              <Text
                fontFamily={fonts.parafont}
                fontWeight="bold"
                color={colors.fontLightColorV2}
                fontSize={{ base: "xs" }}
              >
                Video output
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default ZeroScopeSpace;
