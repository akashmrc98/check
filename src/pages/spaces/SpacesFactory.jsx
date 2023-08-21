import { Box } from "@chakra-ui/react";
import { colors } from "../../theme/colors";
import { useParams } from "react-router";

import TextGenSpace from "./TextGenSpace";
import MusicGenSpace from "./MusicGenSpace";
import ChatGenSpace from "./ChatGenSpace";
import ImageGenSpace from "./ImageGenSpace";

function SpaceFactory() {
  const params = useParams();
  if (params.space === "chatgen-space")
    return (
      <Box bg={colors.bgColor} pt={24}>
        <ChatGenSpace />
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
