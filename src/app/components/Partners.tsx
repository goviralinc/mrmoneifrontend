import Image from "next/image";
import RbcLogo from "../../public/RBC logo.png";
import BackboneLogo from "../../public/Backbone.js logo.png";
import ScientificAmericanLogo from "../../public/Scientific logo.png";
import GeneralElectricLogo from "../../public/General logo.png";

const Partners = () => {
  return (
    <section className="py-16 bg-white text-center font-libre-franklin">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-29xl font-bold mb-8">
          <b>Our Partners</b>
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {/* Partner Logos */}
          <div>
            <Image
              src={RbcLogo}
              alt="RBC Royal Bank Logo"
              width={150}
              height={100}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src={BackboneLogo}
              alt="Backbone.js Logo"
              width={150}
              height={100}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src={ScientificAmericanLogo}
              alt="Scientific American Logo"
              width={150}
              height={100}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src={GeneralElectricLogo}
              alt="General Electric Logo"
              width={150}
              height={100}
              className="mx-auto"
            />
          </div>
          <div>
            <Image
              src={RbcLogo}
              alt="RBC Royal Bank Logo"
              width={150}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
