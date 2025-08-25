import Link from "next/link";
import Image from "next/image";
import {
  FaChevronRight,
  FaEnvelope,
  FaHeart,
  FaMapPin,
  FaInstagram,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-white py-12">
        <div className=" px-3 sm:px-3 md:px-10 lg:px-28 ">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="col-span-1">
              <Link href="/" className="block mb-7">
                <Image
                  src="/Assets/secondary-logo.webp"
                  alt="Logo"
                  className="w-60"
                  width={240}
                  height={60}
                />
              </Link>
              <p className="mb-7  text-justify pr-5 font-medium text-[#727272]">
                Future IT Touch Pvt. Ltd. is an innovative one-stop Web Solution
                Company in Chandigarh, delivering solutions with customized
                &amp; quality services to businesses globally.
              </p>
              <Link
                href="/contact"
                className="max-sm:w-full  justify-center btn-main bg-gradient-to-r from-[#673ab7] to-[#2196f3]    text-white py-2 px-4  inline-flex items-center rounded-full"
              >
                Become Partner <FaChevronRight className=" ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:col-span-2 md:col-span-1">
              <div className="col-span-1 ">
                <h5 className="mb-4 text-xl font-bold  text-[#3a3a3a]">
                  Our Links
                </h5>
                <ul className="leading-loose   font-medium text-[#727272]">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/why-us">Why Us </Link>
                  </li>
                  <li>
                    <Link href="/service">Services </Link>
                  </li>
                  <li>
                    <Link href="/our-team">Our Teams</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">
                  Company
                </h5>
                <ul className="leading-loose  font-medium text-[#727272]">
                  <li>
                    <Link href="/contact">Get A Quote</Link>
                  </li>
                  <li>
                    <Link href="/price">Our Pricing Package</Link>
                  </li>
                  <li>
                    <Link href="/faq">Customer's FAQ</Link>
                  </li>
                  <li>
                    <Link href="/refund">Refund Policy</Link>
                  </li>
                  <li>
                    <Link href="/Privacy-Policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/Terms-Conditions">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">
                Contact Us
              </h5>
              <ul className="leading-loose  font-medium text-[#727272]">
                <li className="flex gap-3 ">
                  <span>
                    <FaMapPin className="mt-2" />
                  </span>
                  <p className="text-balance">
                    {" "}
                    <span className="font-bold text-lg"> Address </span> SCO
                    54-55, 2nd Floor, Near Mukat Hospital,34A Sector,Chandigarh,
                    1600022
                  </p>
                </li>
                <li className="flex gap-3 items-center">
                  <span>
                    <FaEnvelope />
                  </span>
                  <p>
                    {" "}
                    <span className="font-bold text-lg">Email :</span>{" "}
                    <a href="mailto:info@futuretouch.in">info@futuretouch.in</a>
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>
                    <span className="font-bold text-lg"> Phone : </span>
                    <a href="tel:+91-7056937000">+91-7056937000</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fa] py-7">
        <div className=" px-3 sm:px-3 md:px-5 lg:px-28 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 text-center sm:text-center md:text-center lg:text-start">
              <h5 className="mb-4 text-xl font-bold text-[#3a3a3a]">
                Top App Development Companies
              </h5>
              <p className="mb-7 font-medium text-[#727272] pr-0 sm:pr-0 md:pr-5 lg:pr-40 ">
                We design and develop custom mobile applications <br /> for IOS,
                Android & Hybrid platforms.
              </p>

              <div className="flex items-center justify-normal max-lg:justify-center  max-sm:justify-center gap-3">
                <p className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text  text-lg">
                  Follow Us :
                </p>
                <Link
                  href="https://www.facebook.com/Futureittouch"
                  target="_blank"
                >
                  {" "}
                  <FaFacebookF className="h-7 w-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link href="https://x.com/futureittouch" target="_blank">
                  {" "}
                  <FaTwitter className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link
                  href="https://in.linkedin.com/company/future-it-touch"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link
                  href="https://www.instagram.com/future_it_touch/"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCirWettrTWfsFRzdGRIc6BQ/about"
                  target="_blank"
                >
                  {" "}
                  <FaYoutube className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>

                <Link
                  href="https://github.com/Future-IT-Touch-Private-Limited"
                  target="_blank"
                >
                  {" "}
                  <FaGithub className="w-7 h-7 rounded bg-[#4243c9] text-white p-1" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <ul className="grid grid-cols-2 lg:grid-cols-4">
                <li className="mx-2">
                  <Link href="#">
                    <Image
                      src="/Assets/badges-a.webp"
                      alt="badges"
                      className="max-md:w-40"
                      width={120}
                      height={40}
                    />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="#">
                    <Image
                      src="/Assets/badges-b.webp"
                      alt="badges"
                      className="max-md:w-40"
                      width={120}
                      height={40}
                    />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="#">
                    <Image
                      src="/Assets/badges-c.webp"
                      alt="badges"
                      className="max-md:w-40"
                      width={120}
                      height={40}
                    />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link href="#">
                    <Image
                      src="/Assets/badges-d.webp"
                      alt="badges"
                      className="max-md:w-40"
                      width={120}
                      height={40}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="block sm:block lg:flex text-center sm:text-center md:text-center lg:text-start lg:justify-between mt-8">
            <div className="w-full lg:w-2/5">
              <ul className="font-medium text-[#727272]">
                <li>Copyright © 2017 Future IT Touch Pvt. Ltd.</li>
              </ul>
            </div>
            <div className="w-full sm:w-full lg:w-1/4">
              <ul className="font-medium text-[#727272] ">
                <li className="flex justify-center sm:justify-center  lg:justify-start items-center">
                  Made with{" "}
                  <FaHeart className="mx-2" style={{ color: "#f00" }} /> in
                  Chandigarh
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/4">
              <ul className="flex gap-5 font-medium text-[#727272] justify-center">
                <li>
                  <Link href="/Privacy-Policy">Privacy & Policy.</Link>
                </li>
                <li>
                  <Link href="/faq">Faq.</Link>
                </li>
                <li>
                  <Link href="/Terms-Conditions">Terms.</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
