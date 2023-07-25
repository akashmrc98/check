import ZeroScopeSpace from "./ZeroScopeSpace";
import { useParams } from "react-router";
import MusicGenSpace from "./MusicGenSpace";

function SpaceFactory() {
  const params = useParams();
  if (params.space === "zero-scope-space") return <ZeroScopeSpace />;
  if (params.space === "musicgen-space") return <MusicGenSpace />;
}

export default SpaceFactory;
