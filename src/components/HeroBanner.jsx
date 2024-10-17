import Banner from "../assets/images/bg-image.jpg";
import Navbar from "./Navbar";

export default function HeroBanner() {
  return (
    <div
      className="relative pb-10 bg-[#222] rounded-[50px] overflow-hidden max-h-screen cover bg-cover bg-center"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <Navbar />
      <div className="px-6 md:px-20 mt-10">
        <div className="flex flex-col gap-2 md:gap-10 mb-10">
          <p className="text-red-500 text-sm md:text-2xl font-bold">
            The Best Fitness Club in the Town
          </p>
          <h2 className="text-[#dadada] text-xl md:text-6xl font-extrabold tracking-wider">
            Improve your fitness <br /> level for the better
          </h2>
          {/* <p className='text-9xl text-red-300 z-[-1] absolute left-0 bottom-[-150px] hidden lg:block'>EXERCISES</p> */}
        </div>
        <div className="">
          <div className="flex flex-col gap-5">
            <h2 className="text-white p-5 rounded-br-3xl rounded-tl-3xl text-sm md:text-3xl bg-red-500 w-fit font-extrabold tracking-wider">
              Sweat, Smile And Repeat{" "}
            </h2>
            <p className="text-[#dadada]">
              Check out the most effective <br /> personal exercises
            </p>
            <button className="bg-red-500 px-4 py-3 text-slate-50 text-bold w-fit rounded-lg">
              Explore Exercises
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
