"use client";

import Button from "./ui/Button";

const About = () => {
    return (
      <section className="max-w-full py-8 bg-white text-center font-libre-franklin">
        <div className="container mx-auto px-6 md:px-12">

            <h2 className="text-4xl font-bold mb-6">
                <b className="text-29xl leading-[72px]">
                    Who is Mr. Monei
                </b>
            </h2>

            <div className="py-8 text-20xl leading-[50px] text-m3-ref-neutral-neutral20 inline-block px-5">
                Mr. Monei is an advanced AI agent built to manage the movement of money
                and revolutionize trade financing. He is more than just an AI—he is a
                *DeFi pioneer*, leveraging decentralized finance to ensure that money
                flows transparently, fairly, and for the greater good. Mr. Monei is the
                bridge between the future of wealth and the equitable distribution it
                demands.
            </div>

            <Button
                text="Explore Mr Monei Now"
                variant="primary"
                size="lg"
                onClick={() => console.log("Join the waitlist clicked")}
                className="flex flex-col items-center justify-center mx-auto mt-8"
            />
        </div>
      </section>
    );
  };
  
  export default About;
  