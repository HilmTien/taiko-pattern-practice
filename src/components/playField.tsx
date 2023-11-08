import { Don, DonFinisher, Kat, KatFinisher } from "@/components/hitcircles";

export default function PlayField() {
  return (
    <div className="relative items-center h-40 w-screen">
      <Don position={0}></Don>
      <Kat position={150}></Kat>
      {/* <DonFinisher></DonFinisher>
      <KatFinisher></KatFinisher> */}
    </div>
  );
}
