export default function Slider() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden mt-6">
      <div className="slider w-[400%] h-full flex">
        <img src="/img0.png" className="slide w-full h-full object-cover" />
        <img src="/img1.png" className="slide w-full h-full object-cover" />
        <img src="/img2.png" className="slide w-full h-full object-cover" />
        <img src="/img4.png" className="slide w-full h-full object-cover" />
      </div>
    </div>
  );
}
