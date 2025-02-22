import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../../../constants/intex";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-10 border-t border-gray-200">
      <div className="container mx-auto px-6 sm:px-16 py-10 flex flex-wrap justify-between">
        <div className=" flex-col items-start space-y-4 w-full sm:w-1/3 hidden sm:flex">
          <Image  src="/assets/images/logo.jpg" alt="logo" width={120} height={20} className="object-contain" />
          <p className="text-sm">
            &copy; 2025 CarShop <br />
            All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 w-full sm:w-2/3 justify-center sm:justify-end text-center sm:text-left">
          {footerLinks.map((link) => (
            <div key={link.title} className="w-full sm:w-auto">
              <h3 className="font-semibold text-gray-800 mb-3">{link.title}</h3>
              <ul className="space-y-2 flex flex-col">
                {link.links.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className="text-gray-600 hover:text-gray-900 transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center flex flex-col sm:flex-row justify-between items-center px-6 sm:px-16">
        <p className="text-sm">&copy; 2025 CarShop. All rights reserved.</p>

        <div className="flex space-x-6 mt-3 sm:mt-0">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
