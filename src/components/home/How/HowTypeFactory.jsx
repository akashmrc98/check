import PlanBoxComponent from "./Sub/PlanBoxComponent";
import SimpleBoxComponent from "./Sub/SimpleBoxComponent";
import AlternateBoxComponent from "./Sub/AlternateBoxComponent";

import { Box } from "@chakra-ui/react";

function HowTypeFactory(props) {
  const { steps, l } = props;

  return (
    <Box pt={8} pl={8}>
      {steps.map((s, i) => {
        if (s.type === "SIMPLE")
          return <SimpleBoxComponent l={l} i={i + 1} key={i} {...s} />;
        if (s.type === "ALTERNATIVE")
          return <AlternateBoxComponent l={l} i={i + 1} key={i} {...s} />;
        if (s.type === "PLAN")
          return <PlanBoxComponent l={l} key={i} i={i + 1} {...s} />;
      })}
    </Box>
  );
}

export default HowTypeFactory;
