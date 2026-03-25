"use client";
import React, { useState, useEffect, useRef } from "react";
import { Logo, Name, Icon } from "@/public";
import { navbar } from "@/utils/constants";
import Image from 'next/image'

const Navbar = () => {
  const [selected, setSelected] = useState<string>("about-us");
  const headerRef = useRef<HTMLDivElement>(null);
  const handleClick = (value: string, path: string) => {
    setSelected(value);
    const element = document.getElementById(`${value}`);
    const offset = headerRef.current?.offsetHeight;
    if (value === "about-us") {
      window.scrollTo({
        top: element?.offsetTop! - offset! - 70 || 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: element?.offsetTop! - offset! + 10 || 0,
        behavior: "smooth",
      });
    }
  };
  const [scrolled, setScrolled] = useState<boolean>(false);
  // detect the scroll position, and change the selected navbar
  useEffect(() => {
    const handleScroll = () => {
      const aboutUs = document.getElementById("about-us");
      const menu = document.getElementById("menu");
      const gallery = document.getElementById("gallery");
      const contactBooking = document.getElementById("contact-booking");
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setSelected("about-us");
        setScrolled(false);
      }
      if (window.scrollY > menu?.offsetTop! - aboutUs?.offsetTop!) {
        setSelected("menu");
      }
      if (window.scrollY > gallery?.offsetTop! - aboutUs?.offsetTop!) {
        setSelected("gallery");
      }
      if (window.scrollY > contactBooking?.offsetTop! - aboutUs?.offsetTop!) {
        setSelected("contact-booking");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 ${
        scrolled ? "pt-0" : "xl:pt-[64px] pt-[20px]"
      }  w-screen z-50 ${
        scrolled
          ? "bg-[#173448] bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-[1px_2px_7px_black]"
          : "bg-[#173448]"
      }`}
      ref={headerRef}
    >
      <div
        className={`${
          scrolled ? "h-0 mb-4 py-0" : "h-auto mb-4 py-4"
        } xl:mx-40 mx-10 flex justify-center items-center transition-all ease-in-out duration-[300ms] overflow-hidden`}
      >
        <div
          className={`${
            scrolled ? "w-0" : "xl:w-[161px]"
          } overflow-hidden w-[60px] xl:mr-6 mr-1 xl:mt-1 transition-all ease-in-out duration-[300ms] relative aspect-square`}
        >
          <Image src={Logo.src} alt="REI IZAKAYA logo" fill loading="lazy" />
        </div>

        <div
          className={`${
            scrolled ? "w-0" : "xl:w-[286px]"
          } overflow-hidden w-[100px] xl:mr-5 mr-1 transition-all ease-in-out duration-[300ms] drop-shadow-[0_0_10px] shadow-white relative aspect-[7/4]`}
        >
          <Image src={Icon.src} alt="REI IZAKAYA icon" fill />
        </div>

        <div
          className={`${
            scrolled ? "w-0" : "xl:w-[224px]"
          } overflow-hidden w-[70px] xl:mt-5 mt-1 transition-all ease-in-out duration-[300ms] relative aspect-[3/1]`}
        >
          <Image src={Name.src} alt="REI IZAKAYA name" fill loading="lazy" />
        </div>
      </div>
      <div className="xl:mx-40 mx-2 flex justify-between items-center lg:pb-5 pb-2">
        {navbar.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.key, item.path)}
            className="cursor-pointer py-2 px-1"
          >
            <p
              className={`${
                selected === item.key ? "text-[#B11F24]" : "text-[#F2F2F2]"
              } text-[14px] ${
                scrolled ? "xl:text-xl" : "xl:text-2xl"
              } font-bold hover:text-[#B11F24] transition-all duration-[300ms] ease-in-out relative pb-1`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#B11F24] transition-all duration-300 ease-in-out ${
                  selected === item.key ? "w-full" : "w-0"
                }`}
              />
            </p>
          </div>
        ))}
      </div>
      {/* 滚动后的渐变底线 */}
      <div
        className={`w-full h-[1px] bg-gradient-to-r from-transparent via-[#B11F24]/30 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Navbar;
