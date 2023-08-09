import { Box } from "@chakra-ui/react";
import { colors } from "../../theme/colors";

function Line(props) {
  return (
    <Box
      left={props.left}
      zIndex={0}
      right={props.right}
      position={"fixed"}
      height={"100vh"}
      width={{ base: 0, lg: "2px" }}
      bg={colors.boxBorder}
      // boxShadow={`-1px -1px 1px ${colors.highLightColor}, 1px 1px 1px ${colors.fontLightColor}`}
    ></Box>
  );
}

export default Line;
