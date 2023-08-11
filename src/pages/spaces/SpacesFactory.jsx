import { Box } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { useParams } from "react-router";

import TextGenSpace from "./TextGenSpace";
import MusicGenSpace from "./MusicGenSpace";
import ZeroScopeSpace from "./ZeroScopeSpace";
import ImageGenSpace from "./ImageGenSpace";

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
  if (params.space === "textgen-space")
    return (
      <Box bg={colors.bgColor} pt={24}>
        <TextGenSpace />
      </Box>
    );
  if (params.space === "imggen-space")
    return (
      <Box bg={colors.bgColor} pt={24}>
        <ImageGenSpace />
      </Box>
    );
}

export default SpaceFactory;
