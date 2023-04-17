"use client";

import { FC } from "react";
import styles from "./index.module.scss";
import Tour from "@/components/Tour";
import { TourType } from "@/types";
import ScrollGallery from "@/components/ScrollGallery";

interface OtherToursProps {

}

const tours: TourType[] = [
  {
    image: { id: 1, src: "/img/tour-1.png", alt: "tour-1", width: 313, height: 336 },
    heading: "St. Isaac's Cathedral in St. Petersburg",
    content: "One of the highest domed structures in the world."
  },
  {
    image: { id: 2, src: "/img/tour-2.png", alt: "tour-2", width: 313, height: 336 },
    heading: "The Bridge of Peace, Tbilisi",
    content: "Arc-shaped pedestrian bridge made of glass and steel"
  },
  {
    image: { id: 3, src: "/img/tour-3.png", alt: "tour-3", width: 313, height: 336 },
    heading: "El Caminito del Rey, Argentina",
    content: "Tango, Open-air Museum, Painting, Art and History"
  },
  {
    image: { id: 4, src: "/img/tour-1.png", alt: "tour-1", width: 313, height: 336 },
    heading: "St. Isaac's Cathedral in St. Petersburg",
    content: "One of the highest domed structures in the world."
  },
  {
    image: { id: 5, src: "/img/tour-2.png", alt: "tour-2", width: 313, height: 336 },
    heading: "The Bridge of Peace, Tbilisi",
    content: "Arc-shaped pedestrian bridge made of glass and steel"
  },
  {
    image: { id: 6, src: "/img/tour-3.png", alt: "tour-3", width: 313, height: 336 },
    heading: "El Caminito del Rey, Argentina",
    content: "Tango, Open-air Museum, Painting, Art and History"
  },
];

const OtherTours: FC<OtherToursProps> = () => {
  return (
    <div className={styles.index}>
      <div className={styles.title}>Other tours</div>
      <ScrollGallery>
        {tours.map(tour =>
          <Tour
            key={tour.image.id}
            image={tour.image}
            heading={tour.heading}
            content={tour.content}
          />
        )}
      </ScrollGallery>
    </div>
  );
}

export default OtherTours;