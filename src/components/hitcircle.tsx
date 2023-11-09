import Image from "next/image";

type HitcircleProps = {
  variant: "don" | "kat";
  finisher: boolean;
  position: number;
};

export const HITCIRCLE_SIZE = {
  finisher: 144,
  normal: 96,
};

export default function Hitcircle({
  variant,
  finisher,
  position,
}: HitcircleProps) {
  return (
    <div className="w-24 absolute top-6" style={{ right: position }}>
      <Image
        style={{ objectFit: finisher ? "none" : "initial", overflow: "visible" }}
        src={`/elements/${variant}.png`}
        alt={""}
        width={finisher ? HITCIRCLE_SIZE.finisher : HITCIRCLE_SIZE.normal}
        height={finisher ? HITCIRCLE_SIZE.finisher : HITCIRCLE_SIZE.normal}
        priority={true}
      ></Image>
    </div>
  );
}
