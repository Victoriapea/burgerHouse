import React from "react";
import Container from "../../elements/Container";
import BackgroundImage from "../../../medias/images/background/bg-footer.jpg";
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Logo from "../../../medias/svg/Logo-burger-house-white.svg";
import IcoInsta from "../../../medias/svg/instagram.svg";
import IcoFacebook from "../../../medias/svg/facebook-f.svg";
import IcoTwitter from "../../../medias/svg/x-twitter.svg";
import IcoWhatsapp from "../../../medias/svg/whatsapp.svg";


export default function Footer() {
  return (
    <Container>
      <div className="relative lg:mb-20 p-5 text-white">
        <img
          src={BackgroundImage}
          alt="Un plan de travail de cuisine ou l'on conçoit un hamburger"
          className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative grid md:grid-cols-2 z-10">
          <div className="w-full p-5 md:mt-20 mt-10 md:mb-28">
            <img src={Logo} alt="Logo burger house" className="w-2/3" />
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="md:h-full w-full flex flex-col items-start md:items-center justify-center mb-10 md:mb-0 p-5 md:p-0">
            <div className="flex items-center">
              <MapPinIcon className="h-6 md:h-10 w-6 md:w-10 mr-5" />
              <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">15 place bellecour, 6900 Lyon</span>
            </div>
            <div className="flex items-center mt-5">
              <EnvelopeIcon className="h-6 md:h-10 w-6 md:w-10 mr-5" />
              <span className="uppercase font-semibold text-sm md:text-lg tracking-tighter">info@burger-house.com</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between">
          <div className="uppercase font-semibold tracking-tighter text-sm mb-2 sm:mb-0">
            © burger house 2024. All rights reserved.
          </div>
          <div className="flex flex-wrap">
            <a href="/#" target="_blank" rel="noneferrer" className="group">
              <img src={IcoInsta} alt="" className="w-7 h-7 mr-2 bg-white hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="/#" target="_blank" rel="noneferrer" className="group">
              <img src={IcoFacebook} alt="" className="w-7 h-7 mr-2 bg-white hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="/#" target="_blank" rel="noneferrer" className="group">
              <img src={IcoTwitter} alt="" className="w-7 h-7 mr-2 bg-white hover:bg-primary animate rounded-full p-1" />
            </a>
            <a href="/#" target="_blank" rel="noneferrer" className="group">
              <img src={IcoWhatsapp} alt="" className="w-7 h-7 bg-white hover:bg-primary animate rounded-full p-1" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
