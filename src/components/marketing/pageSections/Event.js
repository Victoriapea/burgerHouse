import React from "react";
import Container from "../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import "../../../css/carousel.css";
import Image1 from "../../../medias/images/photos/Event.jpg";
import Image2 from "../../../medias/images/products/Product-1.jpg";
import Image3 from "../../../medias/images/products/Product-2.jpg";
import Heading from "../../elements/DisplayTitles/Heading";

const Slide = ({ children, category, title, image, alt }) => {
  return (
    <div className="grid md:grid-cols-2 p-3 md:p-6">
      <div className="p-5 md:p-10 md:mb-10">
        <Heading variant="h4">{category}</Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="tracking-wide text-lg leading-relaxed font-light text-gray-800 mb-0 md:mb-10">{children}</p>
      </div>
      <div className="relative w-full h-96 md:h-full">
        <img
          src={image}
          alt={alt}
          className="bg-primary absolute top-0 left-0 w-full h-full object-cover object-bottom z-0"
        />
      </div>
    </div>
  );
};

export default function Event() {
  const items = [
    <Slide
      image={Image1}
      category="évènements à venir"
      title="vivez la demi-finale"
      alt="Supporters"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Slide>,
    <Slide
      image={Image2}
      category="nouveau burger"
      title="découvrez le killer burger"
      alt="Hamburger"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Slide>,
    <Slide
      image={Image3}
      category="nouvelle recette"
      title="le burger végétarien"
      alt="Le végétarien"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </Slide>,
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 border border-gray-100">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          infinite
          autoPlayInterval="4000"
          disableButtonsControls
          animationType="fadeout"
        />
      </div>
    </Container>
  );
}
