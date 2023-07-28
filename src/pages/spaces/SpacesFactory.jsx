import ZeroScopeSpace from "./ZeroScopeSpace";
import { useParams } from "react-router";
import MusicGenSpace from "./MusicGenSpace";
import { Box } from "@chakra-ui/react";
import { colors } from "../../theme/colors";

function SpaceFactory() {
  const params = useParams();
  if (params.space === "zero-scope-space")
    return (
      <Box bg={colors.bgColor} pt={24}>
        <ZeroScopeSpace />
      </Box>
    );
  if (params.space === "musicgen-space")
    return (
      <Box bg={colors.bgColor} pt={24}>
        <MusicGenSpace />
      </Box>
    );
}

export default SpaceFactory;
