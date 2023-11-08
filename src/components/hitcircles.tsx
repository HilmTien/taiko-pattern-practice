import Hitcircle from "@/components/hitcircle";

type IngameCircleProps = {
  position: number;
};

export function Don({ position }: IngameCircleProps) {
  return (
    <Hitcircle variant="don" finisher={false} position={position}></Hitcircle>
  );
}
export function DonFinisher({ position }: IngameCircleProps) {
  return (
    <Hitcircle variant="don" finisher={true} position={position}></Hitcircle>
  );
}
export function Kat({ position }: IngameCircleProps) {
  return (
    <Hitcircle variant="kat" finisher={false} position={position}></Hitcircle>
  );
}
export function KatFinisher({ position }: IngameCircleProps) {
  return (
    <Hitcircle variant="kat" finisher={true} position={position}></Hitcircle>
  );
}
