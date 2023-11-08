import { Don, DonFinisher, Kat, KatFinisher } from "@/components/hitcircles";

type PatternProps = {
  patternString: string;
};

export default function Pattern({ patternString }: PatternProps) {
  let current_x = 0;
  const hitobjects = [];

  //   for (let i = patternString.length; i > 0; i--) {
  //     switch (patternString[i]) {
  //       case "d": {
  //         hitobjects.push([<Don position={current_x} />]);
  //         break;
  //       }
  //       case "k": {
  //       }
  //     }
  //   }
  return (
    <>
      <Don position={0}></Don>
      <Don position={96}></Don>
      <Kat position={96 * 2}></Kat>
      <Kat position={96 * 3}></Kat>
      <Don position={96 * 3 + 96 / 1.5}></Don>
    </>
  );
}
