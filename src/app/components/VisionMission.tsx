import Image from "next/image";
import VisionImg from "../../public/Apple_Vision_Pro__A_Concise_Guide_to_All_You_Need_to_Know-removebg-preview 1.png";
import MissionImg from "../../public/Apple_Vision_Pro__A_Concise_Guide_to_All_You_Need_to_Know-removebg-preview 1-2.png";
import BackgroundImg from "../../public/component2.png";



const VisionMission = () => {
  return (
    <section 
    className="py-16 font-libre-franklin bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${BackgroundImg.src})`
    }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8 m-4">

          <div className="col-span-1 rounded-29xl bg-lightblue h-[380px] flex flex-col justify-center items-start px-16">
            <b className="text-48xl leading-[76.8px] text-gray-100">
              Our
            </b>
            <b className="text-70xl leading-[153.6px] text-gray-100">
              Vision
            </b>
          </div>

          <div className="col-span-2 relative rounded-29xl bg-primary-colors h-[380px] overflow-hidden flex items-center">
            {/* Background and Image with Overlay */}
            <div className="absolute inset-0 bg-gray-200 z-10"></div>

            {/* Image */}
            <Image
              className="w-[280px] h-[380px] object-cover z-0"
              width={472}
              height={569}
              alt="Vision Image"
              src={VisionImg}
            />

            {/* Text */}
            <div className="z-20 text-white ml-8 m-4">
              <ul className="leading-[28.8px] font-medium text-left pl-8 font-libre-franklin">
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
              </ul>
            </div>
          </div>


        </div>


        <div className="grid md:grid-cols-3 gap-8 m-4 pt-4">
          {/* Left Section with Image and Overlay */}
          <div className="col-span-2 relative rounded-29xl bg-primary-colors h-[380px] overflow-hidden flex items-center justify-end">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-200 z-10"></div>

            {/* Text */}
            <div className="z-20 text-white ml-8 m-4">
              <ul className="leading-[28.8px] font-medium text-left pl-4 font-libre-franklin">
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
                <li className="my-2">
                  To put up a platform which is designed for equality and upliftment of all humanity.
                </li>
              </ul>
            </div>

            {/* Image */}
            <Image
              className="w-[280px] h-[380px] object-cover z-0"
              width={307}
              height={460}
              alt="Mission Image"
              src={MissionImg}
            />
          </div>


          {/* Right Section with Text */}
          <div className="col-span-1 relative rounded-29xl bg-lightblue h-[380px] flex flex-col justify-center items-start px-16">
            <b className="text-48xl leading-[76.8px]">Our</b>
            <b className="text-70xl leading-[153.6px]">Mission</b>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default VisionMission;
