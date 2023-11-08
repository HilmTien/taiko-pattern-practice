import Image from "next/image";

type HitcircleProps = {
  variant: "don" | "kat";
  finisher: boolean;
  position: number;
};

const HITCIRCLE_SIZE = {
  finisher: 128,
  normal: 96,
};

export default function Hitcircle({
  variant,
  finisher,
  position,
}: HitcircleProps) {
  return (
    <div className="w-24 absolute" style={{ right: position }}>
      <Image
        style={{ objectFit: "none", overflow: "visible" }}
        src={`/elements/${variant}.png`}
        alt={""}
        width={finisher ? HITCIRCLE_SIZE.finisher : HITCIRCLE_SIZE.normal}
        height={finisher ? HITCIRCLE_SIZE.finisher : HITCIRCLE_SIZE.normal}
        priority={true}
      ></Image>
    </div>
  );
}
