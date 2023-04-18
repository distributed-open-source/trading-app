import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-20 px-4 grid grid-cols-12 gap-4">
        {/* Column 1 */}
        <div className="col-span-3 grid grid-rows-1">
          {/* Row 1 */}
          <img src="/company-logo.png" alt="Company logo" />

          {/* Row 2 */}
          <div className="mt-10">
            <p className="text-sm text-justify mr-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Row 3 */}
          <div className="mt-10">
            <div className="space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="fas fa-youtube"
                  style={{color: ''}}
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fas fa-twitter"
                  style={{color: ''}}
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="fas fa-facebook"
                  style={{color: ''}}
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="fas fa-instagram"
                  style={{color: ''}}
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fas fa-linkedin"
                  style={{color: ''}}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-2 grid-rows-1">
          <div>
            <span className="text-sm">Exchange</span>
            <ul className="list-disc mt-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 1
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white ">
                  Link 1
                </a>
              </li>

              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-span-2 grid grid-rows-1">
          <div>
            <span className="text-sm">Support</span>
            <ul className="list-disc mt-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 1
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white ">
                  Link 1
                </a>
              </li>

              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Column 2 */}
        <div className="col-span-2 grid grid-rows-1">
          <div>
            <span className="text-sm">Resources</span>
            <ul className="list-disc  mt-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 1
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white ">
                  Link 1
                </a>
              </li>

              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-span-2 grid grid-rows-1 gap-4">
          <div>
            <span className="text-base font-bold">Learn</span>
            <ul className="list-disc mt-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 1
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white ">
                  Link 1
                </a>
              </li>

              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="col-span-1 grid grid-rows-1">
          <div>
            <span className="text-sm">Company</span>
            <ul className="list-disc mt-10">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 1
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white ">
                  Link 1
                </a>
              </li>

              <li className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* font color grey */}
      <div className=" container mx-auto my-3 flex w-full  items-center justify-evenly before:h-px before:flex-grow before:bg-stone-300 after:h-px after:flex-grow after:bg-stone-300  text-stone-500"></div>

      <div className="container mx-auto py-8 px-4 grid grid-cols-12 gap-4">
        {/* Column 1 */}
        {/* all rights */}
        <div className="col-span-2 grid grid-rows-1">
          <p className="mb-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Column 2 */}
        <div className="col-span-2 grid grid-rows-1">
          {/* privacy link */}
          <div className="flex flex-row justify-between">
            <p>|</p>
            <p className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </p>

            <p>|</p>
            {/* terms link */}
            <p className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
