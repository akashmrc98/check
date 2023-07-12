import { Model as Tokyo } from "./Tokyo/Tokyo";
import { Model as Drone } from "./Buster/Buster_drone";
import { Model as Destiny2 } from "./Destiny2/Destiny_2";
import { Model as Token } from "./Token/Token";
import { AnimationType } from "./animationType";

const map = [
  {
    model: Tokyo,
    type: AnimationType.tokyo,
  },
  {
    model: Drone,
    type: AnimationType.drone,
  },
  {
    model: Destiny2,
    type: AnimationType.destiny2,
  },
  {
    model: Token,
    type: AnimationType.token,
  },
];

function SceneFactoryWrapper(_props) {
  let Scene = null;
  for (let i = 0; i < map.length; i++)
    if (map[i].type === _props.type) Scene = map[i].model;
  return <Scene />;
}

export default SceneFactoryWrapper;
