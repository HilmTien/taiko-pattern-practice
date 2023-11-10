import useWindowSize from "@/clientUtils/useWindowSize";
import { HITCIRCLE_SIZE } from "@/components/hitcircle";
import { Don, DonFinisher, Kat, KatFinisher } from "@/components/hitcircles";
import JudgementCircle from "@/components/judgementCircle";
import { motion } from "framer-motion";

type PatternProps = {
  patternString: string;
};

export default function Pattern({ patternString }: PatternProps) {
  let current_x = 0;
  let sv = 1
  let delta_x = HITCIRCLE_SIZE.normal * sv

  const hitobjects = [];

  for (let i = patternString.length; i > 0; i--) {
    switch (patternString[i - 1]) {
      // Snapping changes
      case "]": {
        delta_x = HITCIRCLE_SIZE.normal * sv / 2;
        break;
      }
      case ")": {
        delta_x = HITCIRCLE_SIZE.normal * sv / 1.5;
        break;
      }
      case "(": {
        current_x += HITCIRCLE_SIZE.normal * sv / 3;
        delta_x = HITCIRCLE_SIZE.normal * sv;
        break;
      }
      case "[": {
        current_x += HITCIRCLE_SIZE.normal * sv / 2;
        delta_x = HITCIRCLE_SIZE.normal * sv;
        break;
      }

      // Blank note
      case "-": case "x": case " ": {
        current_x += delta_x
        break
      }

      // Regular notes
      case "d": {
        hitobjects.push([<Don position={current_x} />]);
        current_x += delta_x;
        break;
      }
      case "D": {
        hitobjects.push([<DonFinisher position={current_x} />]);
        current_x += delta_x;
        break;
      }
      case "k": {
        hitobjects.push([<Kat position={current_x} />]);
        current_x += delta_x;
        break;
      }
      case "K": {
        hitobjects.push([<KatFinisher position={current_x} />]);
        current_x += delta_x;
        break;
      }
    }
  }

  let size = useWindowSize()

  return (
    <div className="relative overflow-hidden">
      <JudgementCircle />
      {/* <div className="relative h-36" style={{ width: current_x + HITCIRCLE_SIZE.normal / 4, transform: "translateX(-185px)" }}>
        {hitobjects.map((hitobject) => hitobject)}
      </div> */}
      <motion.div className="relative h-36" animate={{ x: [size.width, -current_x] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} style={{ width: current_x + HITCIRCLE_SIZE.normal / 4 }}>
        {hitobjects.map((hitobject) => hitobject)}
      </motion.div>
    </div>
  );
}
