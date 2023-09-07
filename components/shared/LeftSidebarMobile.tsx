"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { sidebarLinks, sidebarLinksOther } from "@/constants";
import Link from "next/link";

function ToggleButton(): React.ReactElement {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev: boolean) => !prev);
  };

  return (
    <>
    {/* Topbar Hamburgur Button */}
      <button
        onClick={handleToggle}
        className="flex md:hidden rounded-md focus:focusRing focus:bg-hoverAccent focus:text-blue-900 hover:bg-hoverAccent hover:text-blue-900"
      >
        <Bars3Icon className="h-10 w-10 p-1" />
      </button>

    {/* Left Side bar Mobile Render if isToggle == True */}

      {isToggle && (
        <section className="flex max-w-1/2 h-[100vh] absolute flex-col top-14 bottom-0 left-0 bg-white px-2 md:hidden">
          <div className="flex items-center justify-between p-2">
            <h1 className="font-extrabold text-color_dark">DEV Community</h1>

            <button onClick={handleToggle}>
              <XMarkIcon className="p-2 h-10 w-10 rounded-md hover:bg-hoverAccent focus:focusRing hover:fill-blue-900 focus:fill-blue-900" />
            </button>
          </div>

          

          <nav className="flex flex-col text-color_dark w-full font-thin2 md:hidden px-2 py-1.5">
            {sidebarLinks.map((link) => (
              <div className="group" key={link.label}>
                <Link
                  href={link.route}
                  className="group flex items-center px-2 py-1.5 bg-transparent focus:focusRing focus:bg-hoverAccent hover:bg-hoverAccent hover:text-blue-900 rounded-md"
                >
                  <span className="text-lg group-hover:no-underline">
                    {link.emoji}
                  </span>
                  {link.label === "Reading List" ? (
                    <>
                      <span className="mx-2  group-focus:underline group-hover:underline">
                        {link.label}
                      </span>
                      <div className="px-1 bg-slate-300 rounded-md  group-focus:underline group-hover:underline">
                        5
                      </div>
                    </>
                  ) : (
                    <span className="mx-2  group-focus:underline group-hover:underline">
                      {link.label}
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </nav>
          <h2 className="text-lg font-medium2 mx-2 mt-4 mb-2 px-2 md:hidden">
            Other
          </h2>
          <nav className="flex flex-col px-2 text-color_dark w-full font-thin2 md:hidden">
            {sidebarLinksOther.map((links) => (
              <div className="group" key={links.label}>
                <Link
                  href={links.route}
                  className="flex items-center px-2 py-1.5 bg-transparent focus:focusRing focus:bg-hoverAccent hover:bg-hoverAccent hover:text-blue-900 rounded-md"
                >
                  <span className="text-lg group-hover:no-underline">
                    {links.emoji}
                  </span>
                  <span className="mx-2  group-focus:underline group-hover:underline">
                    {links.label}
                  </span>
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex mb-4 justify-start items-center px-2 pt-2 pb-0  md:hidden">
            {/* TWITTER X */}
            <a
              href="https://x.com/MananKateshiya"
              className="group p-2 hover:bg-hoverAccent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#404040"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-mode: normal group-hover:fill-blue-900"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                  </g>
                </g>
              </svg>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://facebook.com/MananKateshiya"
              className="group p-2 hover:bg-hoverAccent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#404040"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-mode: normal group-hover:fill-blue-900"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"></path>
                  </g>
                </g>
              </svg>
            </a>
            {/* Github */}
            <a
              href="https://github.com/MananKateshiya"
              className="group p-2 hover:bg-hoverAccent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#404040"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-mode: normal group-hover:fill-blue-900"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,8c9.389,0 17,7.611 17,17c0,7.548 -4.921,13.944 -11.729,16.163c0.002,-0.006 0.005,-0.016 0.005,-0.016c0,0 -1.147,-0.538 -1.123,-1.498c0.027,-1.056 0,-3.521 0,-4.426c0,-1.553 -0.983,-2.654 -0.983,-2.654c0,0 7.709,0.087 7.709,-8.139c0,-3.174 -1.659,-4.825 -1.659,-4.825c0,0 0.871,-3.388 -0.302,-4.825c-1.315,-0.142 -3.669,1.257 -4.675,1.91c0,0 -1.593,-0.653 -4.244,-0.653c-2.65,0 -4.244,0.653 -4.244,0.653c-1.005,-0.653 -3.36,-2.052 -4.675,-1.91c-1.173,1.437 -0.302,4.825 -0.302,4.825c0,0 -1.659,1.652 -1.659,4.825c0,8.226 7.709,8.139 7.709,8.139c0,0 -0.777,0.878 -0.946,2.168c-0.538,0.183 -1.33,0.408 -1.969,0.408c-1.673,0 -2.946,-1.626 -3.412,-2.379c-0.46,-0.742 -1.403,-1.365 -2.281,-1.365c-0.579,0 -0.861,0.289 -0.861,0.62c0,0.331 0.811,0.562 1.347,1.175c1.129,1.294 1.109,4.202 5.132,4.202c0.437,0 1.329,-0.107 2,-0.198c-0.004,0.916 -0.005,1.882 0.009,2.447c0.024,0.96 -1.123,1.498 -1.123,1.498c0,0 0.003,0.01 0.005,0.016c-6.808,-2.217 -11.729,-8.613 -11.729,-16.161c0,-9.389 7.611,-17 17,-17z"></path>
                  </g>
                </g>
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/manankateshiya"
              className="group p-2 hover:bg-hoverAccent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#404040"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-mode: normal group-hover:fill-blue-900"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
                  </g>
                </g>
              </svg>
            </a>
            {/* Twitch */}
            <a
              href="https://twitch.tv/vulcan_op"
              className="group p-2 hover:bg-hoverAccent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#404040"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-mode: normal group-hover:fill-blue-900"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M5.36328,2l-3.36328,4.63672v13.36328h5v3h3l3,-3h4l5,-5v-13zM6,4h14v9l-3,3h-5l-3,3v-3h-3zM11,7v5h2v-5zM16,7v5h2v-5z"></path>
                  </g>
                </g>
              </svg>
            </a>

            {/* Mastodon */}
            <a href="#" className="group p-2 hover:bg-hoverAccent rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#404040"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  className="mix-blend-mode: normal group-hover:fill-blue-900"
                >
                  <g transform="scale(8,8)">
                    <path d="M15.9375,4.03125c-3.0205,0.01225 -6.01958,0.39573 -7.58008,1.11523c0,0 -3.35742,1.52837 -3.35742,6.73437c0,6.197 -0.0045,13.97938 5.5625,15.48438c2.132,0.573 3.96545,0.69633 5.43945,0.61133c2.675,-0.151 3.99805,-0.9707 3.99805,-0.9707l-0.08984,-1.97656c0,0 -1.73386,0.61102 -3.88086,0.54102c-2.127,-0.075 -4.3678,-0.23462 -4.7168,-2.89062c-0.032,-0.247 -0.04787,-0.49709 -0.04687,-0.74609c4.507,1.119 8.3502,0.48738 9.4082,0.35938c2.954,-0.359 5.52552,-2.2113 5.85352,-3.9043c0.514,-2.668 0.4707,-6.50781 0.4707,-6.50781c0,-5.206 -3.35156,-6.73437 -3.35156,-6.73437c-1.6455,-0.7685 -4.68848,-1.12748 -7.70898,-1.11523zM12.70508,8.00195c1.03487,0.02775 2.0575,0.49075 2.6875,1.46875l0.60938,1.03516l0.60742,-1.03516c1.265,-1.967 4.10022,-1.84427 5.44922,-0.32227c1.244,1.448 0.9668,2.38256 0.9668,8.85156v0.00195h-2.44727v-5.62891c0,-2.635 -3.35937,-2.73677 -3.35937,0.36523v3.26172h-2.43164v-3.26172c0,-3.102 -3.35742,-3.00219 -3.35742,-0.36719v5.62891h-2.45313c0,-6.474 -0.2722,-7.41456 0.9668,-8.85156c0.6795,-0.766 1.72684,-1.17423 2.76172,-1.14648z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </section>
      )}
    </>
  );
}

export default ToggleButton;
