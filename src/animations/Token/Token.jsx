import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials, animations } = useGLTF("/token-transformed.glb");
  const { actions, names, ref } = useAnimations(animations);

  useEffect(() => {
    actions[names[0]].fadeIn(4).play();
    return () => actions[names[0]].fadeOut(0).play();
  }, [actions, names]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Animated" scale={0.01} userData={{ name: "Animated" }}>
          <group
            name="Robot"
            position={[2.687, 2.478, -3.845]}
            userData={{ name: "Robot" }}
          >
            <group
              name="Interior_Lining"
              position={[-2.633, -0.042, 3.845]}
              userData={{ name: "Interior_Lining" }}
            >
              <mesh
                name="Interior_Lining_Chest_Material_0"
                geometry={nodes.Interior_Lining_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Interior_Lining_Chest_Material_0" }}
              />
            </group>
            <group
              name="Robot_1"
              position={[-2.661, 0.258, 3.807]}
              userData={{ name: "Robot" }}
            >
              <mesh
                name="Robot_Robot_Material_0"
                geometry={nodes.Robot_Robot_Material_0.geometry}
                material={materials.Robot_Material}
                userData={{ name: "Robot_Robot_Material_0" }}
              />
            </group>
          </group>
          <group
            name="Bolt2"
            position={[3.529, 3.195, 1.97]}
            userData={{ name: "Bolt2" }}
          >
            <mesh
              name="Bolt2_Chest_Material_0"
              geometry={nodes.Bolt2_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Bolt2_Chest_Material_0" }}
            />
          </group>
          <group
            name="Bolt1"
            position={[3.529, 3.195, -1.97]}
            userData={{ name: "Bolt1" }}
          >
            <mesh
              name="Bolt1_Chest_Material_0"
              geometry={nodes.Bolt1_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Bolt1_Chest_Material_0" }}
            />
          </group>
          <group
            name="Chest_Lid"
            position={[-3.604, 3.421, -3.234]}
            userData={{ name: "Chest_Lid" }}
          >
            <group
              name="Lid_Interior"
              position={[3.604, 0.472, 3.234]}
              userData={{ name: "Lid_Interior" }}
            >
              <mesh
                name="Lid_Interior_Chest_Material_0"
                geometry={nodes.Lid_Interior_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Lid_Interior_Chest_Material_0" }}
              />
            </group>
            <group
              name="Chest_Lid_1"
              position={[3.704, 1.242, 3.234]}
              userData={{ name: "Chest_Lid" }}
            >
              <mesh
                name="Chest_Lid_Chest_Material_0"
                geometry={nodes.Chest_Lid_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Chest_Lid_Chest_Material_0" }}
              />
            </group>
            <group
              name="Lid_Bar_Locks"
              position={[3.604, 1.522, 3.234]}
              userData={{ name: "Lid_Bar_Locks" }}
            >
              <group
                name="Lock1"
                position={[0.442, 0, 3.615]}
                userData={{ name: "Lock1" }}
              >
                <mesh
                  name="Lock1_Chest_Material_0"
                  geometry={nodes.Lock1_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Lock1_Chest_Material_0" }}
                />
              </group>
              <group
                name="Lock2"
                position={[-0.442, 0, 3.615]}
                userData={{ name: "Lock2" }}
              >
                <mesh
                  name="Lock2_Chest_Material_0"
                  geometry={nodes.Lock2_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Lock2_Chest_Material_0" }}
                />
              </group>
              <group
                name="Lock3"
                position={[-0.442, 0, -3.615]}
                userData={{ name: "Lock3" }}
              >
                <mesh
                  name="Lock3_Chest_Material_0"
                  geometry={nodes.Lock3_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Lock3_Chest_Material_0" }}
                />
              </group>
              <group
                name="Lock4"
                position={[0.442, 0, -3.615]}
                userData={{ name: "Lock4" }}
              >
                <mesh
                  name="Lock4_Chest_Material_0"
                  geometry={nodes.Lock4_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Lock4_Chest_Material_0" }}
                />
              </group>
            </group>
            <group
              name="Back_Hinges"
              position={[0.381, 0.186, 3.234]}
              userData={{ name: "Back_Hinges" }}
            >
              <mesh
                name="Back_Hinges_Chest_Material_0"
                geometry={nodes.Back_Hinges_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Back_Hinges_Chest_Material_0" }}
              />
            </group>
            <group
              name="Buttons"
              position={[7.067, 0.741, 0.558]}
              userData={{ name: "Buttons" }}
            >
              <group
                name="_1"
                position={[-0.062, 0.175, 0.173]}
                userData={{ name: "_1" }}
              >
                <mesh
                  name="_1_Chest_Material_0"
                  geometry={nodes._1_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_1_Chest_Material_0" }}
                />
              </group>
              <group
                name="_2"
                position={[-0.062, 0.175, 0]}
                userData={{ name: "_2" }}
              >
                <mesh
                  name="_2_Chest_Material_0"
                  geometry={nodes._2_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_2_Chest_Material_0" }}
                />
              </group>
              <group
                name="_3"
                position={[-0.102, 0.175, -0.173]}
                userData={{ name: "_3" }}
              >
                <mesh
                  name="_3_Chest_Material_0"
                  geometry={nodes._3_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_3_Chest_Material_0" }}
                />
              </group>
              <group
                name="_4"
                position={[-0.062, 0, 0.173]}
                userData={{ name: "_4" }}
              >
                <mesh
                  name="_4_Chest_Material_0"
                  geometry={nodes._4_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_4_Chest_Material_0" }}
                />
              </group>
              <group
                name="_5"
                position={[-0.062, 0, 0]}
                userData={{ name: "_5" }}
              >
                <mesh
                  name="_5_Chest_Material_0"
                  geometry={nodes._5_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_5_Chest_Material_0" }}
                />
              </group>
              <group
                name="_6"
                position={[-0.062, 0, -0.173]}
                userData={{ name: "_6" }}
              >
                <mesh
                  name="_6_Chest_Material_0"
                  geometry={nodes._6_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_6_Chest_Material_0" }}
                />
              </group>
              <group
                name="_7"
                position={[-0.062, -0.175, 0.173]}
                userData={{ name: "_7" }}
              >
                <mesh
                  name="_7_Chest_Material_0"
                  geometry={nodes._7_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_7_Chest_Material_0" }}
                />
              </group>
              <group
                name="_8"
                position={[-0.062, -0.175, 0]}
                userData={{ name: "_8" }}
              >
                <mesh
                  name="_8_Chest_Material_0"
                  geometry={nodes._8_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_8_Chest_Material_0" }}
                />
              </group>
              <group
                name="_9"
                position={[-0.062, -0.175, -0.173]}
                userData={{ name: "_9" }}
              >
                <mesh
                  name="_9_Chest_Material_0"
                  geometry={nodes._9_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "_9_Chest_Material_0" }}
                />
              </group>
            </group>
            <group
              name="Gears"
              position={[3.604, -3.421, 3.234]}
              userData={{ name: "Gears" }}
            >
              <group
                name="Gear1"
                position={[2.759, 4.164, 4.299]}
                userData={{ name: "Gear1" }}
              >
                <mesh
                  name="Gear1_Chest_Material_0"
                  geometry={nodes.Gear1_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Gear1_Chest_Material_0" }}
                />
              </group>
              <group
                name="Gear2"
                position={[2.759, 4.164, -4.299]}
                userData={{ name: "Gear2" }}
              >
                <mesh
                  name="Gear2_Chest_Material_0"
                  geometry={nodes.Gear2_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Gear2_Chest_Material_0" }}
                />
              </group>
              <group
                name="Gear3"
                position={[-2.759, 4.164, 4.299]}
                userData={{ name: "Gear3" }}
              >
                <mesh
                  name="Gear3_Chest_Material_0"
                  geometry={nodes.Gear3_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Gear3_Chest_Material_0" }}
                />
              </group>
              <group
                name="Gear4"
                position={[-2.759, 4.164, -4.299]}
                userData={{ name: "Gear4" }}
              >
                <mesh
                  name="Gear4_Chest_Material_0"
                  geometry={nodes.Gear4_Chest_Material_0.geometry}
                  material={materials.Chest_Material}
                  userData={{ name: "Gear4_Chest_Material_0" }}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="Springs" scale={0.01} userData={{ name: "Springs" }}>
          <group
            name="L_Top"
            position={[0.009, 0.841, -5.966]}
            userData={{ name: "L_Top" }}
          >
            <mesh
              name="L_Top_Chest_Material_0"
              geometry={nodes.L_Top_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "L_Top_Chest_Material_0" }}
            />
          </group>
          <group
            name="L_Bot"
            position={[0.009, 0.841, 5.966]}
            userData={{ name: "L_Bot" }}
          >
            <mesh
              name="L_Bot_Chest_Material_0"
              geometry={nodes.L_Bot_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "L_Bot_Chest_Material_0" }}
            />
          </group>
          <group
            name="R_Top"
            position={[0.01, 3.705, -5.966]}
            userData={{ name: "R_Top" }}
          >
            <mesh
              name="R_Top_Chest_Material_0"
              geometry={nodes.R_Top_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "R_Top_Chest_Material_0" }}
            />
          </group>
          <group
            name="R_Bot"
            position={[0.01, 3.705, 5.966]}
            userData={{ name: "R_Bot" }}
          >
            <mesh
              name="R_Bot_Chest_Material_0"
              geometry={nodes.R_Bot_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "R_Bot_Chest_Material_0" }}
            />
          </group>
        </group>
        <group
          name="Front_Valve"
          scale={0.01}
          userData={{ name: "Front_Valve" }}
        >
          <group
            name="Knob"
            position={[3.034, 1.032, 0.621]}
            userData={{ name: "Knob" }}
          >
            <mesh
              name="Knob_Chest_Material_0"
              geometry={nodes.Knob_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Knob_Chest_Material_0" }}
            />
          </group>
        </group>
        <group name="L_Gears" scale={0.01} userData={{ name: "L_Gears" }}>
          <group
            name="Large1"
            position={[3.018, 1.424, 3.681]}
            userData={{ name: "Large1" }}
          >
            <mesh
              name="Large1_Chest_Material_0"
              geometry={nodes.Large1_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Large1_Chest_Material_0" }}
            />
          </group>
          <group
            name="Large2"
            position={[3.018, 2.071, 2.574]}
            userData={{ name: "Large2" }}
          >
            <mesh
              name="Large2_Chest_Material_0"
              geometry={nodes.Large2_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Large2_Chest_Material_0" }}
            />
          </group>
          <group
            name="Medium"
            position={[2.99, 2.886, 3.533]}
            userData={{ name: "Medium" }}
          >
            <mesh
              name="Medium_Chest_Material_0"
              geometry={nodes.Medium_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Medium_Chest_Material_0" }}
            />
          </group>
          <group
            name="Small1"
            position={[2.944, 2.318, 3.245]}
            userData={{ name: "Small1" }}
          >
            <mesh
              name="Small1_Chest_Material_0"
              geometry={nodes.Small1_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Small1_Chest_Material_0" }}
            />
          </group>
          <group
            name="Small2"
            position={[2.927, 2.288, 3.801]}
            userData={{ name: "Small2" }}
          >
            <mesh
              name="Small2_Chest_Material_0"
              geometry={nodes.Small2_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Small2_Chest_Material_0" }}
            />
          </group>
          <group
            name="Small3"
            position={[2.927, 2.754, 2.77]}
            userData={{ name: "Small3" }}
          >
            <mesh
              name="Small3_Chest_Material_0"
              geometry={nodes.Small3_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Small3_Chest_Material_0" }}
            />
          </group>
        </group>
        <group name="R_Gears" scale={0.01} userData={{ name: "R_Gears" }}>
          <group
            name="Large1_1"
            position={[3.018, 1.424, -3.681]}
            userData={{ name: "Large1" }}
          >
            <mesh
              name="Large1_Chest_Material_0_1"
              geometry={nodes.Large1_Chest_Material_0_1.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Large1_Chest_Material_0" }}
            />
          </group>
          <group
            name="Large2_1"
            position={[3.018, 2.071, -2.574]}
            userData={{ name: "Large2" }}
          >
            <mesh
              name="Large2_Chest_Material_0_1"
              geometry={nodes.Large2_Chest_Material_0_1.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Large2_Chest_Material_0" }}
            />
          </group>
          <group
            name="Medium_1"
            position={[2.99, 2.886, -3.533]}
            userData={{ name: "Medium" }}
          >
            <mesh
              name="Medium_Chest_Material_0_1"
              geometry={nodes.Medium_Chest_Material_0_1.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Medium_Chest_Material_0" }}
            />
          </group>
          <group
            name="Small1_1"
            position={[2.944, 2.318, -3.245]}
            userData={{ name: "Small1" }}
          >
            <mesh
              name="Small1_Chest_Material_0_1"
              geometry={nodes.Small1_Chest_Material_0_1.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Small1_Chest_Material_0" }}
            />
          </group>
          <group
            name="Small2_1"
            position={[2.927, 2.288, -3.801]}
            userData={{ name: "Small2" }}
          >
            <mesh
              name="Small2_Chest_Material_0_1"
              geometry={nodes.Small2_Chest_Material_0_1.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Small2_Chest_Material_0" }}
            />
          </group>
          <group
            name="Small3_1"
            position={[2.927, 2.754, -2.77]}
            userData={{ name: "Small3" }}
          >
            <mesh
              name="Small3_Chest_Material_0_1"
              geometry={nodes.Small3_Chest_Material_0_1.geometry}
              material={materials.Chest_Material}
              userData={{ name: "Small3_Chest_Material_0" }}
            />
          </group>
        </group>
        <group
          name="Locking_Mechanism"
          scale={0.01}
          userData={{ name: "Locking_Mechanism" }}
        >
          <group
            name="Lock_Head"
            position={[3.645, 3.454, 0]}
            userData={{ name: "Lock_Head" }}
          >
            <group
              name="Mount"
              position={[-0.225, 0, 0]}
              userData={{ name: "Mount" }}
            >
              <mesh
                name="Mount_Chest_Material_0"
                geometry={nodes.Mount_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Mount_Chest_Material_0" }}
              />
            </group>
            <group
              name="Lock_Handle1"
              position={[0.819, -0.043, -0.001]}
              userData={{ name: "Lock_Handle1" }}
            >
              <mesh
                name="Lock_Handle1_Chest_Material_0"
                geometry={nodes.Lock_Handle1_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Lock_Handle1_Chest_Material_0" }}
              />
            </group>
            <group
              name="Lock_Handle2"
              position={[0.819, -0.043, -0.001]}
              userData={{ name: "Lock_Handle2" }}
            >
              <mesh
                name="Lock_Handle2_Chest_Material_0"
                geometry={nodes.Lock_Handle2_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Lock_Handle2_Chest_Material_0" }}
              />
            </group>
            <group
              name="Lock_Handle3"
              position={[0.819, -0.043, -0.001]}
              userData={{ name: "Lock_Handle3" }}
            >
              <mesh
                name="Lock_Handle3_Chest_Material_0"
                geometry={nodes.Lock_Handle3_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Lock_Handle3_Chest_Material_0" }}
              />
            </group>
            <group
              name="Lock_Handle4"
              position={[0.819, -0.043, -0.001]}
              userData={{ name: "Lock_Handle4" }}
            >
              <mesh
                name="Lock_Handle4_Chest_Material_0"
                geometry={nodes.Lock_Handle4_Chest_Material_0.geometry}
                material={materials.Chest_Material}
                userData={{ name: "Lock_Handle4_Chest_Material_0" }}
              />
            </group>
          </group>
          <group
            name="L_Lock_Bar"
            position={[3.133, 3.418, 0.843]}
            userData={{ name: "L_Lock_Bar" }}
          >
            <mesh
              name="L_Lock_Bar_Chest_Material_0"
              geometry={nodes.L_Lock_Bar_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "L_Lock_Bar_Chest_Material_0" }}
            />
          </group>
          <group
            name="R_Lock_Bar"
            position={[3.133, 3.074, -1.634]}
            userData={{ name: "R_Lock_Bar" }}
          >
            <mesh
              name="R_Lock_Bar_Chest_Material_0"
              geometry={nodes.R_Lock_Bar_Chest_Material_0.geometry}
              material={materials.Chest_Material}
              userData={{ name: "R_Lock_Bar_Chest_Material_0" }}
            />
          </group>
        </group>
        <mesh
          name="Side_Support_Chest_Material_0"
          geometry={nodes.Side_Support_Chest_Material_0.geometry}
          material={materials.Chest_Material}
          scale={0.01}
          userData={{ name: "Side_Support_Chest_Material_0" }}
        />
        <mesh
          name="Head_RobotHead_0"
          geometry={nodes.Head_RobotHead_0.geometry}
          material={materials.RobotHead}
          position={[0, 0.068, 0.007]}
          rotation={[-2.945, 0, 0]}
          scale={0.01}
          userData={{ name: "Head_RobotHead_0" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/token-transformed.glb");
