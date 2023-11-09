import { HITCIRCLE_SIZE } from "@/components/hitcircle";
import { Don, DonFinisher, Kat, KatFinisher } from "@/components/hitcircles";

type PatternProps = {
  patternString: string;
};

export default function Pattern({ patternString }: PatternProps) {
  let current_x = 0;
  let sv = 0.75
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
  return (
    <>
      {hitobjects.map((hitobject) => hitobject)}
    </>
  );
}
