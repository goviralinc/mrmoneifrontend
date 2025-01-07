import EmailIcon from "../../public/email_sign.png"; // Replace with the actual icon path
import TokenTreeIcon from "../../public/image272.png"; // Replace with the actual icon path
import SocialIcons from "../../public/cube.png"
import { FaReddit, FaTelegram, FaDiscord, FaTwitter } from "react-icons/fa";

const JoinMovement = () => {
  return (
    <section className="py-16 bg-[#4DB0CE] text-center font-libre-franklin">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <h2 className="text-29xl font-bold mb-16">Join the Mr. Monei Movement</h2>

        {/* Content Flexbox */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col flex-1 space-y-8">
            {/* Subscribe Card */}
            <div
              className="bg-white rounded-29xl p-8 shadow-md flex flex-col items-start justify-between text-left relative"
              style={{
                backgroundImage: `url(${EmailIcon.src})`,
                backgroundSize: "200px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <p className="font-bold text-29xl leading-[52.8px] font-montserrat text-left my-0">
                Subscribe
              </p>
              
              <p className="text-5xl leading-[52.8px] font-montserrat text-left inline-block w-[60%] my-6">
                Join our waitlist through Email Address
              </p>

              <button className="text-5xl font-semibold rounded-2xl border-black border-[1px] border-solid flex flex-row items-center justify-center py-5 px-8 mb-8 font-montserrat bg-transparent">
                  Join the Waitlist
              </button>
            </div>

            {/* Socials Card */}
            <div
              className="bg-white rounded-29xl p-8 shadow-md flex flex-col items-start relative"
              style={{
                backgroundImage: `url(${SocialIcons.src})`, // Replace with the actual social cube image path
                backgroundSize: "125px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 20px bottom 20px",
              }}
            >
              <h3 className="font-bold text-29xl leading-[52.8px] font-montserrat text-left my-0">Follow our Socials</h3>
              <div className="flex justify-center space-x-9 text-21xl my-8">
                <FaReddit className="text-black" />
                <FaTelegram className="text-black" />
                <FaDiscord className="text-black" />
                <FaTwitter className="text-black" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col">
            <div
              className="bg-white rounded-29xl p-8 shadow-md flex flex-col items-start text-left h-full relative"
              style={{
                backgroundImage: `url(${TokenTreeIcon.src})`,
                backgroundSize: "300px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <h3 className="font-bold text-29xl font-montserrat text-left my-0">Buy Mr. Monei Tokens</h3>
              <p className="text-5xl leading-[52.8px] font-montserrat text-left inline-block w-[80%] my-6">
                Join us in building a future where wealth works for all.
              </p>
              <button className="text-5xl font-semibold rounded-2xl border-black border-[1px] border-solid flex flex-row items-center justify-center py-5 px-8 mb-8 font-montserrat bg-transparent">
                Buy Mr. Monei Token
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;
