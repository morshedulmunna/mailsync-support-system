import { Dots } from "react-activity";
import "react-activity/dist/library.css";

const Loading = () => {
  return (
    <>
      <div className="flex justify-center  items-center h-full w-full ">
        <Dots size={25} className="text-black" />
      </div>
    </>
  );
};

export default Loading;
