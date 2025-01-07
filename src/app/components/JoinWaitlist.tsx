import Image from "next/image";
import GroupImg from "../../public/Group.png"


const JoinWaitlist = () => {
  return (
    <section className="bg-[#008EBA] text-gray-100 py-8 font-montserrat">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Header Section */}
        <h1 className="text-29xl font-bold mb-4">Join our Waitlist</h1>
        <p className="text-lg mb-4">
          With Mr. Monei, the era of working for money is over. Welcome to a future where your wealth works as tirelessly as you once did.
        </p>
        <h2 className="text-xl font-semibold mb-8">
          Are you ready to step into this revolutionary financial paradigm?
        </h2>

        {/* Form and Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
          {/* Form Section */}
          <div className="bg-[#BCE3F1] p-8 pt-16 rounded-2xl shadow-md w-[80%]">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-[90%] px-4 py-6 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084A4] text-xl bg-transparent"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-[90%] px-4 py-6 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084A4] text-xl bg-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-[90%] px-4 py-6 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084A4] text-xl bg-transparent"
              />
              <div className="py-16">
                <button
                    type="submit"
                    className="w-[97%] bg-[#22455A] text-white px-4 py-8 rounded-lg text-xl"
                >
                    Submit
                </button>
              </div>
              
            </form>
          </div>

          {/* Visual Section */}
          <div className="relative flex justify-center items-center">
            <Image src={GroupImg} alt="group image" className="w-[90%] h-[100%]" />
            {/* Floating User Images 
            <div className="absolute top-4 left-8 w-12 h-12 rounded-full overflow-hidden">
              <Image src={userImage1} alt="User 1" layout="fill" />
            </div>
            <div className="absolute top-16 right-8 w-12 h-12 rounded-full overflow-hidden">
              <Image src={userImage2} alt="User 2" layout="fill" />
            </div>
            <div className="absolute bottom-8 left-16 w-12 h-12 rounded-full overflow-hidden">
              <Image src={userImage3} alt="User 3" layout="fill" />
            </div>
            <div className="absolute bottom-4 right-16 w-12 h-12 rounded-full overflow-hidden">
              <Image src={userImage4} alt="User 4" layout="fill" />
            </div>
            <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full overflow-hidden transform -translate-y-1/2">
              <Image src={userImage5} alt="User 5" layout="fill" />
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinWaitlist;
