import {
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footers = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white px-6 py-12 mt-24 shadow-inner">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-green-500 mb-4">Rent a Rover</h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Reliable and affordable car rentals for every journey.
            </p>
          </div>

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">About</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><FooterLink href="#">Rent a Rover</FooterLink></li>
              <li><FooterLink href="#">Car Rental</FooterLink></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Follow Us</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><FooterLink href="#">Github</FooterLink></li>
              <li><FooterLink href="#">Discord</FooterLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">Legal</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <FooterCopyright href="#" by="Rent a Rover" year={2025} />
          <div className="flex gap-5 mt-4 sm:mt-0 text-xl">
            <FooterIcon href="#" icon={BsLinkedin} className="hover:text-green-500" />
            <FooterIcon href="#" icon={BsGithub} className="hover:text-green-500" />
            <FooterIcon href="#" icon={BsInstagram} className="hover:text-green-500" />
            <FooterIcon href="#" icon={BsTwitter} className="hover:text-green-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
