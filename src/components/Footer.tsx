import Image from "next/image";
import logo from "../../public/footer-logo.png"; // Replace with your logo file path

const Footer = () => {
  return (
    <footer className="max-w-full bg-[#008EBA] text-gray-100 py-16 font-montserrat">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-7 gap-8 py-8">
            {/* Logo and Tagline */}
            <div className="col-span-3 flex flex-col items-center mr-4">
                <div className="flex items-center justify-center mb-4">
                    {/* Logo */}
                    <Image src={logo} alt="Mr. Monei Logo" width={400} />
                    
                </div>
            </div>

            {/* Links - Company */}
            <div>
                <h3 className="font-semibold text-md mb-12">Company</h3>
                <div className="space-y-6 font-bold text-lg">
                    <p>About Us</p>
                    <p>Join Waitlist</p>
                    <p>Company</p>
                    <p>Company</p>
                </div>
            </div>

            {/* Links - Business */}
            <div>
                <h3 className="font-semibold text-md mb-12">Business</h3>
                <div className="space-y-6 font-bold text-lg">
                    <p>Contact Sales</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>

            {/* Links - Legal */}
            <div>
                <h3 className="font-semibold text-md mb-12">Legal</h3>
                <div className="space-y-6 font-bold text-lg">
                    <p>Terms of Service</p>
                    <p>Privacy Notice</p>
                    <p>Cookies</p>
                    <p>Licenses</p>
                </div>
            </div>

            {/* Links - Resources */}
            <div>
                <h3 className="font-semibold text-md mb-12">Resources</h3>
                <div className="space-y-6 font-bold text-lg">
                    <p>Blogs</p>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Security</p>
                </div>
            </div>
        </div>
        

        {/* Footer Navigation Dots */}
        <div className="mt-12 flex justify-center space-x-10 pt-16">
            <span className="w-[50px] h-[50px] bg-gray-300 rounded-full"></span>
            <span className="w-[50px] h-[50px] bg-gray-300 rounded-full"></span>
            <span className="w-[50px] h-[50px] bg-gray-300 rounded-full"></span>
            <span className="w-[50px] h-[50px] bg-gray-300 rounded-full"></span>
            <span className="w-[50px] h-[50px] bg-gray-300 rounded-full"></span>
        </div>
    </footer>
  );
};

export default Footer;
