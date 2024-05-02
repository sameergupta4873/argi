import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Icons } from "./Logos";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "#about-us",
  },
  {
    name: "Our Products",
    link: "/#products",
  },
  {
    name: "Why Choose Us",
    link: "/#choose",
  },
  {
    name: "FAQ",
    link: "/#faq",
  },
];

const Hero = () => {
  // if scroll is on top, show the navbar
  const [expand, setExpand] = useState(true);
  const [active, setActive] = useState(0);
  const [openMobileOpen, setOpenMobileOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setExpand(false);
      } else {
        setExpand(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 10) {
          setExpand(false);
        } else {
          setExpand(true);
        }
      });
    };
  }, [expand]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        if (prev === 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [active]);

  return (
    <div
      // style={{
      //   backgroundImage:
      //     active === 0
      //       ? "url('/hero.png')"
      //       : active === 1
      //       ? "url('/hero1.png')"
      //       : "url('/hero2.png')",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   // dark overlay
      // }}
      className="bg-black relative bg-opacity-75 max-w-[99vw]"
    >
      <Image
        fill
        className="object-center object-cover pointer-events-none"
        src={active === 0
          ? '/hero.webp'
          : active === 1
          ? "/hero1.webp"
          : "/hero2.webp"}
        alt={"Images of AGRITY CROP SCIENCE products used in farming"}
        priority
      />
      <div className="h-[100vh] w-[98.95vw] relative z-1 bg-gradient-to-b from-black to-transparent">
        <div
          className={`w-full bg-white  ${
            expand
              ? "absolute top-[2.5rem] bg-opacity-[30%] h-[6rem]"
              : "fixed top-0 h-[4.5rem] shadow-xl"
          } transition-all duration-[350ms] ease-linear z-[300] flex justify-between items-center max-md:hidden`}
        >
          <div
            className={`h-full w-[9.5rem] bg-white ${
              expand ? "" : "border-r-[1.5px] border-[#A6A6A6]"
            }`}
          >
            <Icons.TopBarLogoWeb />
            
          </div>
          <div className="flex h-full overflow-hidden">
            {navItems.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className="flex flex-col items-center group"
                >
                  <div
                    key={index}
                    className="h-full group-hover:h-[65%] transition-all duration-[600ms] ease-in-out cursor-pointer"
                  >
                    <div
                      key={`nav_${index}`}
                      className={`px-5 flex justify-center items-center font-semibold text-[1rem] ${
                        expand
                          ? "min-h-[6rem] text-white"
                          : "min-h-[4.5rem] text-[#444444]"
                      } group-hover:text-[#79BC28] transition-all duration-[600ms] ease-in-out flex justify-center items-center`}
                    >
                      {item.name === "Brochure" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="h-4 w-4 mr-2"
                        >
                          <path
                            d="M15.0461 22.9652C15.2993 23.2171 15.6424 23.3602 16.0003 23.3602C16.357 23.3602 16.7001 23.2172 16.9543 22.9652L24.3225 15.5937C24.7085 15.21 24.8244 14.6282 24.6151 14.123C24.4066 13.6201 23.9141 13.2906 23.3696 13.2906H21.2015V1.34794C21.2015 0.603414 20.5978 0 19.8533 0H12.1471C11.4025 0 10.7978 0.603414 10.7978 1.34794V13.2906H8.62973C8.08438 13.2906 7.59272 13.6201 7.38428 14.123C7.17492 14.6282 7.29085 15.21 7.67545 15.5937L15.0461 22.9652Z"
                            fill="currentColor"
                          />
                          <path
                            d="M28.1785 26.6914H3.82256C2.35633 26.6914 1.16797 27.8794 1.16797 29.3459C1.16797 30.812 2.3564 32.0005 3.82256 32.0005H28.1784C29.6446 32.0005 30.8329 30.812 30.8329 29.3459C30.833 27.8794 29.6446 26.6914 28.1785 26.6914Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                      <span>{item.name}</span>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="rounded-full h-[0.65rem] w-[0.65rem] bg-[#79BC28]"></div>
                  </div>
                </Link>
              );
            })}
            <Link
              href={"/brochure.pdf"}
              target="_blank"
              className="h-full px-5 flex justify-center items-center font-semibold text-[1rem] bg-[#76B728] hover:bg-[#036B46] text-white transition-all duration-[600ms] ease-in-out cursor-pointer ml-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="h-4 w-4 mr-2"
              >
                <path
                  d="M15.0461 22.9652C15.2993 23.2171 15.6424 23.3602 16.0003 23.3602C16.357 23.3602 16.7001 23.2172 16.9543 22.9652L24.3225 15.5937C24.7085 15.21 24.8244 14.6282 24.6151 14.123C24.4066 13.6201 23.9141 13.2906 23.3696 13.2906H21.2015V1.34794C21.2015 0.603414 20.5978 0 19.8533 0H12.1471C11.4025 0 10.7978 0.603414 10.7978 1.34794V13.2906H8.62973C8.08438 13.2906 7.59272 13.6201 7.38428 14.123C7.17492 14.6282 7.29085 15.21 7.67545 15.5937L15.0461 22.9652Z"
                  fill="currentColor"
                />
                <path
                  d="M28.1785 26.6914H3.82256C2.35633 26.6914 1.16797 27.8794 1.16797 29.3459C1.16797 30.812 2.3564 32.0005 3.82256 32.0005H28.1784C29.6446 32.0005 30.8329 30.812 30.8329 29.3459C30.833 27.8794 29.6446 26.6914 28.1785 26.6914Z"
                  fill="currentColor"
                />
              </svg>
              <span>Brochure</span>
            </Link>
          </div>
          <div className="h-full flex justify-center items-center px-[1rem]">
            <Link
              href="https://wa.me/919898977575"
              target="_blank"
              className="px-[1.5rem] bg-white rounded-full flex justify-center items-center border-[2px] border-[#79BC28] scale-90 hover:bg-[#E3FFC1] cursor-pointer"
            >
              <Image
                src="/india.png"
                width={30}
                height={30}
                alt="avatar"
                className="mr-2"
              />
              <span className="text-[#555] text-[0.9rem] font-normal py-[0.75rem]">
                +9198989 77575
              </span>
            </Link>
          </div>
        </div>
        <div
          className={`absolute top-[15rem] ${
            active === 0
              ? "left-[3rem] max-md:left-[50%] max-md:translate-x-[-50%]"
              : "left-[-40rem] opacity-0"
          } transition-all duration-500 ease-in-out max-md:text-center max-md:flex max-md:flex-col max-md:items-center max-md:justify-center`}
        >
          <p className="text-white text-[3rem] font-bold max-md:hidden">
            Better Environment,
            <br />
            <i>Better Tomorrow</i>
          </p>
          <p className="text-white text-[1.75rem] font-bold whitespace-nowrap md:hidden">
            <b>
              Better Environment,
              <br />
              Better Tomorrow
            </b>
          </p>
          <div className="">
            <Link
            aria-label="Contact us on whatsapp"
              href="https://wa.me/919898977575"
              target="_blank"
              className="flex justify-center items-center rounded-full bg-[#76B728] hover:bg-[#036B46] transition-all duration-[600ms] ease-in-out cursor-pointer px-5 py-3 text-white w-min whitespace-nowrap mt-4 ml-1 max-md:text-[0.875rem] max-md:py-2 max-md:px-4 max-md:scale-90"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_130_1637)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.1864 4.64667C24.1953 1.65171 20.2171 0.00151951 15.9784 0C7.24429 0 0.135996 7.10754 0.132957 15.844C0.131438 18.6368 0.861566 21.3628 2.24812 23.7652L0 31.9767L8.39988 29.7733C10.7141 31.0361 13.32 31.7009 15.9716 31.7017H15.9784C24.7111 31.7017 31.8202 24.5933 31.8232 15.8569C31.8247 11.6228 30.1783 7.6424 27.1864 4.64743V4.64667ZM15.9784 29.0258H15.9731C13.6103 29.0251 11.2923 28.3898 9.26983 27.1902L8.78888 26.9046L3.80411 28.2121L5.13444 23.3519L4.82142 22.8535C3.50324 20.7566 2.80654 18.3329 2.80806 15.8448C2.8111 8.58374 8.71898 2.67586 15.9838 2.67586C19.5014 2.67738 22.808 4.04875 25.2946 6.53847C27.7813 9.02745 29.1496 12.337 29.1481 15.8554C29.145 23.1172 23.2372 29.0251 15.9784 29.0251V29.0258ZM23.2022 19.1626C22.8064 18.9643 20.8599 18.007 20.4967 17.8748C20.1336 17.7426 19.87 17.6766 19.6063 18.0731C19.3427 18.4697 18.5837 19.3617 18.3527 19.6253C18.1217 19.8897 17.8907 19.9224 17.4949 19.724C17.0991 19.5257 15.8235 19.1079 14.3108 17.7593C13.134 16.7093 12.3392 15.4132 12.1083 15.0166C11.8773 14.62 12.084 14.4057 12.2815 14.209C12.4592 14.0312 12.6773 13.7463 12.8756 13.5153C13.0739 13.2843 13.1393 13.1188 13.2714 12.8551C13.4037 12.5907 13.3375 12.3598 13.2388 12.1614C13.14 11.9631 12.3484 10.0143 12.0179 9.22192C11.6964 8.45002 11.3698 8.55487 11.1274 8.54196C10.8964 8.53055 10.6328 8.52828 10.3684 8.52828C10.104 8.52828 9.67549 8.62705 9.31235 9.02365C8.94922 9.4202 7.92655 10.3783 7.92655 12.3263C7.92655 14.2743 9.34506 16.1578 9.54334 16.4222C9.74161 16.6866 12.3354 20.6852 16.3067 22.4007C17.2511 22.8087 17.9888 23.0526 18.5639 23.2349C19.5121 23.5365 20.3752 23.494 21.0574 23.3922C21.818 23.2782 23.3998 22.4341 23.7295 21.5095C24.0592 20.5848 24.0592 19.7916 23.9605 19.6268C23.8617 19.4619 23.5973 19.3624 23.2015 19.1641L23.2022 19.1626Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_130_1637">
                    <rect width="31.8232" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Contact us</span>
            </Link>
          </div>
        </div>
        <div
          className={`absolute top-[15rem] ${
            active === 1
              ? "left-[3rem] max-md:left-[50%] max-md:translate-x-[-50%]"
              : "left-[-40rem] opacity-0"
          } transition-all duration-500 ease-in-out max-md:text-center max-md:flex max-md:flex-col max-md:items-center max-md:justify-center`}
        >
          <p className="text-white text-[3rem] font-bold max-md:hidden">
            Better Environment,
            <br />
            <i>Better Tomorrow</i>
          </p>
          <p className="text-white text-[1.75rem] font-bold whitespace-nowrap md:hidden">
            <b>
              Better Environment,
              <br />
              Better Tomorrow
            </b>
          </p>
          <div className="">
            <Link
            aria-label="Contact us on whatsapp"
              href="https://wa.me/919898977575"
              target="_blank"
              className="flex justify-center items-center rounded-full bg-[#76B728] hover:bg-[#036B46] transition-all duration-[600ms] ease-in-out cursor-pointer px-5 py-3 text-white w-min whitespace-nowrap mt-4 ml-1 max-md:text-[0.875rem] max-md:py-2 max-md:px-4 max-md:scale-90"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_130_1637)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.1864 4.64667C24.1953 1.65171 20.2171 0.00151951 15.9784 0C7.24429 0 0.135996 7.10754 0.132957 15.844C0.131438 18.6368 0.861566 21.3628 2.24812 23.7652L0 31.9767L8.39988 29.7733C10.7141 31.0361 13.32 31.7009 15.9716 31.7017H15.9784C24.7111 31.7017 31.8202 24.5933 31.8232 15.8569C31.8247 11.6228 30.1783 7.6424 27.1864 4.64743V4.64667ZM15.9784 29.0258H15.9731C13.6103 29.0251 11.2923 28.3898 9.26983 27.1902L8.78888 26.9046L3.80411 28.2121L5.13444 23.3519L4.82142 22.8535C3.50324 20.7566 2.80654 18.3329 2.80806 15.8448C2.8111 8.58374 8.71898 2.67586 15.9838 2.67586C19.5014 2.67738 22.808 4.04875 25.2946 6.53847C27.7813 9.02745 29.1496 12.337 29.1481 15.8554C29.145 23.1172 23.2372 29.0251 15.9784 29.0251V29.0258ZM23.2022 19.1626C22.8064 18.9643 20.8599 18.007 20.4967 17.8748C20.1336 17.7426 19.87 17.6766 19.6063 18.0731C19.3427 18.4697 18.5837 19.3617 18.3527 19.6253C18.1217 19.8897 17.8907 19.9224 17.4949 19.724C17.0991 19.5257 15.8235 19.1079 14.3108 17.7593C13.134 16.7093 12.3392 15.4132 12.1083 15.0166C11.8773 14.62 12.084 14.4057 12.2815 14.209C12.4592 14.0312 12.6773 13.7463 12.8756 13.5153C13.0739 13.2843 13.1393 13.1188 13.2714 12.8551C13.4037 12.5907 13.3375 12.3598 13.2388 12.1614C13.14 11.9631 12.3484 10.0143 12.0179 9.22192C11.6964 8.45002 11.3698 8.55487 11.1274 8.54196C10.8964 8.53055 10.6328 8.52828 10.3684 8.52828C10.104 8.52828 9.67549 8.62705 9.31235 9.02365C8.94922 9.4202 7.92655 10.3783 7.92655 12.3263C7.92655 14.2743 9.34506 16.1578 9.54334 16.4222C9.74161 16.6866 12.3354 20.6852 16.3067 22.4007C17.2511 22.8087 17.9888 23.0526 18.5639 23.2349C19.5121 23.5365 20.3752 23.494 21.0574 23.3922C21.818 23.2782 23.3998 22.4341 23.7295 21.5095C24.0592 20.5848 24.0592 19.7916 23.9605 19.6268C23.8617 19.4619 23.5973 19.3624 23.2015 19.1641L23.2022 19.1626Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_130_1637">
                    <rect width="31.8232" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Contact us</span>
            </Link>
          </div>
        </div>
        <div
          className={`absolute top-[15rem] ${
            active === 2
              ? "left-[3rem] max-md:left-[50%] max-md:translate-x-[-50%]"
              : "left-[-40rem] opacity-0"
          } transition-all duration-500 ease-in-out max-md:text-center max-md:flex max-md:flex-col max-md:items-center max-md:justify-center`}
        >
          <p className="text-white text-[3rem] font-bold max-md:hidden">
            Better Environment,
            <br />
            <i>Better Tomorrow</i>
          </p>
          <p className="text-white text-[1.75rem] font-bold whitespace-nowrap md:hidden">
            <b>
              Better Environment,
              <br />
              Better Tomorrow
            </b>
          </p>
          <div className="">
            <Link
            aria-label="Contact us on whatsapp"
              href="https://wa.me/919898977575"
              target="_blank"
              className="flex justify-center items-center rounded-full bg-[#76B728] hover:bg-[#036B46] transition-all duration-[600ms] ease-in-out cursor-pointer px-5 py-3 text-white w-min whitespace-nowrap mt-4 ml-1 max-md:text-[0.875rem] max-md:py-2 max-md:px-4 max-md:scale-90"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_130_1637)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.1864 4.64667C24.1953 1.65171 20.2171 0.00151951 15.9784 0C7.24429 0 0.135996 7.10754 0.132957 15.844C0.131438 18.6368 0.861566 21.3628 2.24812 23.7652L0 31.9767L8.39988 29.7733C10.7141 31.0361 13.32 31.7009 15.9716 31.7017H15.9784C24.7111 31.7017 31.8202 24.5933 31.8232 15.8569C31.8247 11.6228 30.1783 7.6424 27.1864 4.64743V4.64667ZM15.9784 29.0258H15.9731C13.6103 29.0251 11.2923 28.3898 9.26983 27.1902L8.78888 26.9046L3.80411 28.2121L5.13444 23.3519L4.82142 22.8535C3.50324 20.7566 2.80654 18.3329 2.80806 15.8448C2.8111 8.58374 8.71898 2.67586 15.9838 2.67586C19.5014 2.67738 22.808 4.04875 25.2946 6.53847C27.7813 9.02745 29.1496 12.337 29.1481 15.8554C29.145 23.1172 23.2372 29.0251 15.9784 29.0251V29.0258ZM23.2022 19.1626C22.8064 18.9643 20.8599 18.007 20.4967 17.8748C20.1336 17.7426 19.87 17.6766 19.6063 18.0731C19.3427 18.4697 18.5837 19.3617 18.3527 19.6253C18.1217 19.8897 17.8907 19.9224 17.4949 19.724C17.0991 19.5257 15.8235 19.1079 14.3108 17.7593C13.134 16.7093 12.3392 15.4132 12.1083 15.0166C11.8773 14.62 12.084 14.4057 12.2815 14.209C12.4592 14.0312 12.6773 13.7463 12.8756 13.5153C13.0739 13.2843 13.1393 13.1188 13.2714 12.8551C13.4037 12.5907 13.3375 12.3598 13.2388 12.1614C13.14 11.9631 12.3484 10.0143 12.0179 9.22192C11.6964 8.45002 11.3698 8.55487 11.1274 8.54196C10.8964 8.53055 10.6328 8.52828 10.3684 8.52828C10.104 8.52828 9.67549 8.62705 9.31235 9.02365C8.94922 9.4202 7.92655 10.3783 7.92655 12.3263C7.92655 14.2743 9.34506 16.1578 9.54334 16.4222C9.74161 16.6866 12.3354 20.6852 16.3067 22.4007C17.2511 22.8087 17.9888 23.0526 18.5639 23.2349C19.5121 23.5365 20.3752 23.494 21.0574 23.3922C21.818 23.2782 23.3998 22.4341 23.7295 21.5095C24.0592 20.5848 24.0592 19.7916 23.9605 19.6268C23.8617 19.4619 23.5973 19.3624 23.2015 19.1641L23.2022 19.1626Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_130_1637">
                    <rect width="31.8232" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Contact us</span>
            </Link>
          </div>
        </div>
        <div className="absolute w-full bottom-5">
          <div className="flex justify-center items-center">
            <div
              onClick={() => {
                setActive(0);
              }}
              className={`bg-white rounded-full h-2 ${
                active === 0 ? "w-[2.8rem]" : "w-2"
              }  cursor-pointer transition-all duration-300 ease-in-out`}
            ></div>
            <div
              onClick={() => {
                setActive(1);
              }}
              className={`bg-white rounded-full h-2 ${
                active === 1 ? "w-[2.8rem]" : "w-2"
              }  cursor-pointer mx-1 transition-all duration-300 ease-in-out`}
            ></div>
            <div
              onClick={() => {
                setActive(2);
              }}
              className={`bg-white rounded-full h-2 ${
                active === 2 ? "w-[2.8rem]" : "w-2"
              }  cursor-pointer transition-all duration-300 ease-in-out`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
