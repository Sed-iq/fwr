import vid from "../assets/sunshine.mp4";
import fwr from "../assets/fwr.png";
export default () => {
  return (
    <div className="w-full relative h-[600px] overflow-hidden flex items-center bg-white">
      <div className="w-full absolute h-full overflow-hidden">
        {/* Vid */}
        <video src={vid} width="100%" controls={false} autoPlay loop muted />
      </div>
      <div className="z-10 w-full flex justify-center items-center h-full bg-[rgba(0,0,0,0.34)]">
        <img srcSet={fwr} alt="" className="w-1/2" />
      </div>
    </div>
  );
};
