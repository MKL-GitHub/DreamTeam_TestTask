import Image from "next/image";
import styles from "./index.module.scss";
import { FC, useState } from "react";
import { ImageType } from "@/types";
import ImageButton from "../ImageButton";

interface TourProps {
  image: ImageType;
  heading: string;
  content: string;
}

const Tour: FC<TourProps> =
  ({ image, heading, content }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    return (
      <div className={styles.index} data-is-liked={isLiked}>
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
          className={styles.image}
          unoptimized={false}
        />
        <ImageButton
          imageSrc={`/svg/${isLiked ? "like" : "like-out"}.svg`}
          width={20}
          height={19}
          className={styles.like}
          onClick={() => setIsLiked(!isLiked)}
        />
        <div className={styles.heading}>{heading}</div>
        <p className={styles.content}>{content}</p>
      </div>
    );
  }

export default Tour;