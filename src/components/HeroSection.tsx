import AnimatedText from "./ui/AnimatedText";

const HeroSection = () => {
    return (
        <section className="max-w-full bg-light-blue py-16 text-center font-montserrat">
            <div className="container mx-auto px-6 md:px-12">
                
                <h1 className="text-77xl m-auto w-[90%]">
                    <div className="font-[600] inline-block">
                        <span>Financing </span>
                        <span className="text-primary-colors">Trade</span>
                        <span> Across </span>
                        <span className="text-primary-colors">Africa</span>
                        <span> And The </span>
                        <span className="text-primary-colors">World</span>
                    </div>
                </h1>
                <AnimatedText
                    text="Mr. Monei is positioned to revolutionize financial transactions and investments across Africa by integrating stablecoin technology, blockchain infrastructure, and AI driven services."
                    isIndexPage={true}
                    className="leading-[40px] text-17xl font-[400] font-medium text-m3-ref-neutral-neutral20 inline-block w-[70%] "
                    style={{ lineHeight: "1.5", maxWidth: "70%" }}
                    />
               
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 py-4">
                    <button className="text-xl font-bold rounded-77xl bg-primary-colors flex flex-row items-center justify-center py-5 px-[40px] text-whitesmoke">
                        Join the waitlist
                    </button>
                    <button className="text-xl font-bold rounded-77xl border-primary-colors border-[2px] border-solid flex flex-row items-center justify-center py-5 px-[40px] text-primary-colors bg-white">
                        About Mr. Monei
                    </button>
                
                </div>
            </div>
        </section>
    );
  };
  
  export default HeroSection;