"use client";
import { Navbar } from "@/components";
import { HomeBg } from "@/public";
import { Image as DefaultImage } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";
import m1 from "@/public/new_menu/m1.jpg";
import m2 from "@/public/new_menu/m2.jpg";
import m3 from "@/public/new_menu/m3.jpg";
import m4 from "@/public/new_menu/m4.jpg";
import p1 from "@/public/photo/p1.jpg";
import p2 from "@/public/photo/p2.jpg";
import p3 from "@/public/photo/p3.jpg";
import p4 from "@/public/photo/p4.jpg";
import p5 from "@/public/photo/p5.jpg";
import p6 from "@/public/photo/p6.jpg";
import p7 from "@/public/photo/p7.jpg";
import p8 from "@/public/photo/p8.jpg";
import i1 from "@/public/menu/i1.jpg";
import i2 from "@/public/menu/i2.jpg";
import i3 from "@/public/menu/i3.jpg";
import i4 from "@/public/menu/i4.jpg";
import i5 from "@/public/menu/i5.jpg";
import i6 from "@/public/menu/i6.jpg";
import i7 from "@/public/menu/i7.jpg";
import i8 from "@/public/menu/i8.jpg";
import i9 from "@/public/menu/i9.jpg";
import qr from "@/public/menu/qr.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerChildren = {
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const images = [
    p1.src,
    p2.src,
    p3.src,
    p4.src,
    p5.src,
    p6.src,
    p7.src,
    p8.src,
    i1.src,
    i2.src,
    i3.src,
    i4.src,
    i5.src,
    i6.src,
    i7.src,
    i8.src,
    i9.src,
  ];
  return (
    <main className="relative w-screen overflow-x-hidden">
      <Navbar />
      <div className="w-screen md:pt-[300px] pt-[120px]">
        {/* About Us */}
        <motion.div
          id="about-us"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerChildren}
        >
          <motion.div
            className="w-full aspect-[250/121] relative"
            variants={fadeInUp}
          >
            <Image
              src={HomeBg.src}
              alt="REI IZAKAYA Sydney storefront"
              fill
              className="py-5 mx-auto"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="max-w-3xl mx-auto px-4 md:px-8 py-6 md:py-10 flex flex-col gap-2 md:gap-4 text-[14px] md:text-xl text-warm-white leading-relaxed md:leading-relaxed text-justify"
            variants={fadeInUp}
          >
            <p>
              Izakaya (居酒屋) is made up of three kanji with the meaning, in
              order, &ldquo;stay-drink-place.&rdquo;
            </p>
            <p>
              In Japan, Izakaya are places where people come to unwind with
              co-workers and friends. Especially after a long days work, it&apos;s
              important for workers to find a place they can kick back and enjoy
              their hard-earned day over drinks and tasty snacks in the company
              of their friends and co workers.
            </p>
            <p>
              As a typical Izakaya in Sydney, we make it our priority to ensure
              you have a place to sit back, kick back and relax over our
              Yakitori, Oden and our Japanese beverages, including and not
              limited to Japanese tap beer, sake and whiskys.
            </p>
          </motion.div>
        </motion.div>

        <div className="section-divider" />

        {/* Menu */}
        <motion.div
          className="w-screen justify-center sm:justify-start flex flex-row flex-wrap py-5 md:py-8 gap-x-6 gap-y-10 overflow-hidden"
          id="menu"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <swiper-container
            class="menu-swiper"
            slides-per-view="auto"
            space-between="20"
            centered-slides="true"
            autoplay-delay="5000"
            autoplay-pause-on-mouse-enter="true"
            grab-cursor="true"
            loop="true"
          >
            {[m1, m2, m3, m4].map((menu, index) => (
              <swiper-slide className="bg-transparent" key={index}>
                <DefaultImage.PreviewGroup
                  items={[m1.src, m2.src, m3.src, m4.src]}
                >
                  <DefaultImage className="p-2" src={menu.src} />
                </DefaultImage.PreviewGroup>
              </swiper-slide>
            ))}
          </swiper-container>
        </motion.div>

        <div className="section-divider" />

        {/* Gallery */}
        <motion.div
          className="w-screen justify-center sm:justify-start flex flex-row flex-wrap py-5 md:py-8 gap-x-6 gap-y-10 overflow-hidden"
          id="gallery"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <swiper-container
            class="photo-swiper"
            slides-per-view="auto"
            space-between="16"
            centered-slides="true"
            autoplay-delay="4000"
            autoplay-pause-on-mouse-enter="true"
            grab-cursor="true"
            loop="true"
          >
            {images.map((image, index) => (
              <swiper-slide className="bg-transparent" key={index}>
                <DefaultImage.PreviewGroup items={images}>
                  <DefaultImage
                    className="md:w-[400px] w-[260px] transition-all duration-300 hover:brightness-110"
                    src={image}
                    loading="lazy"
                    alt={`REI IZAKAYA gallery photo ${index + 1}`}
                  />
                </DefaultImage.PreviewGroup>
              </swiper-slide>
            ))}
          </swiper-container>
        </motion.div>

        <div className="section-divider" />

        {/* Contact & Booking */}
        <motion.div
          className="w-screen py-8 md:py-14"
          id="contact-booking"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerChildren}
        >
          <motion.div
            className="flex justify-center items-center my-6 mx-auto w-fit rounded-xl bg-white/10 backdrop-blur-sm p-5 animate-qr-pulse"
            variants={fadeInUp}
          >
            <div className="relative w-[180px] md:w-[200px] rounded-lg overflow-hidden bg-white p-2">
              <Image
                src={qr.src}
                alt="REI IZAKAYA Instagram QR code"
                width={500}
                height={500}
                className="w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            className="md:mx-40 mx-5 flex flex-col mb-4 md:p-4 p-2 text-warm-white"
            variants={fadeInUp}
          >
            <p className="md:tracking-widest tracking-normal md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              You can find us with @rei_izakaya on Instagram & Facebook
            </p>
            <p className="md:tracking-widest tracking-normal md:text-2xl text-[14px] mb-6">
              Your feedback also means the world to us.
            </p>
            <p className="md:tracking-widest tracking-normal md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              For bookings please contact{" "}
              <a
                className="underline text-white hover:text-[#B11F24] hover:drop-shadow-[0_0_8px_rgba(177,31,36,0.5)] transition-all duration-300"
                href="tel:0404517777"
              >
                0404 517 777
              </a>
            </p>
            <p className="md:tracking-widest tracking-normal md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              Reservations for groups of 4 and above only at the moment.
            </p>
            <p className="md:tracking-widest tracking-normal md:text-2xl text-[14px] md:mb-1 mb-[2px]">
              Sorry for any inconvenience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
