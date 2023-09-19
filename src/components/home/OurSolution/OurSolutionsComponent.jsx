import { useRef } from "react";
import { Box } from "@chakra-ui/react";

import { motion } from "framer-motion";

import OurSolutionContentComponent from "./OurSolutionContentComponent";

function OurSolutionComponent() {
  const ref = useRef(null);

  return (
    <Box width={"100%"} pos={"relative"} ref={ref}>
      <motion.div
        transition={{
          type: "inertia",
          stiffness: 130,
          damping: 10,
          velocity: 50,
        }}
      >
        <OurSolutionContentComponent />
      </motion.div>
    </Box>
  );
}

export default OurSolutionComponent;
