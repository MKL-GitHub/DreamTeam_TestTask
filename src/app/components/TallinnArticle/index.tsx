'use client';

import styles from "./index.module.scss";
import { FC, useState } from "react";
import { ImageType } from "@/types";
import Feedback from "@/components/Feedback";
import ScrollGallery from "@/components/ScrollGallery";
import Image from "next/image";

interface ParagraphProps {

}

const images: ImageType[] = [
  { id: 1, src: "/img/gallery-image-1.png", alt: "image-1", width: 313, height: 336 },
  { id: 2, src: "/img/gallery-image-2.png", alt: "image-2", width: 313, height: 336 },
  { id: 3, src: "/img/gallery-image-3.png", alt: "image-3", width: 313, height: 336 },
  { id: 4, src: "/img/gallery-image-4.png", alt: "image-4", width: 313, height: 336 },
  { id: 5, src: "/img/gallery-image-1.png", alt: "image-1", width: 313, height: 336 },
  { id: 6, src: "/img/gallery-image-2.png", alt: "image-2", width: 313, height: 336 },
  { id: 7, src: "/img/gallery-image-3.png", alt: "image-3", width: 313, height: 336 },
  { id: 8, src: "/img/gallery-image-4.png", alt: "image-4", width: 313, height: 336 },
];

const Paragraph: FC<ParagraphProps> = () => {
  const [isShowFeedback, setIsShowFeedback] = useState<boolean>(false);

  const handleOnFeedbackClick = () => {
    setIsShowFeedback(!isShowFeedback);
  }

  return (
    <article className={styles.index}>
      <div className={styles.row}>
        <div className={styles.row__title}>
          Walking in Old Tallinn
        </div>
        <button
          className={`button_pale-blue ${styles.row__feedback}`}
          onClick={handleOnFeedbackClick}
        >
          Feedback
        </button>
      </div>
      <div className={styles.paragraphs}>
        <p>
          Welcome to Old Tallinn, the heart of the Estonian capital!
          The history of the settlement once began from here, and today it is one of the best preserved medieval cities in Europe.
        </p>
        <p>
          I will take you through the streets and doorways and show you where they traded, what they ate, what they sued about and what our Estonian ancestors aspired to.
        </p>
        <p>
          You will visit the oldest pharmacy, get acquainted with the royal privileges, see firsthand a real "gingerbread" house, look into an old tavern, walk along the widest and longest streets of the city and even find out that Tallinn is a lame city!
        </p>
        <p>
          And you will also find beautiful and interesting souvenirs, of course!
        </p>
      </div>
      <ScrollGallery>
        {images.map(image =>
          <Image
            key={image.id}
            alt={image.alt}
            src={image.src}
            width={image.width}
            height={image.height}
          />
        )}
      </ScrollGallery>
      {isShowFeedback && <Feedback toggleVisibility={handleOnFeedbackClick} />}
    </article>
  );
}

export default Paragraph;