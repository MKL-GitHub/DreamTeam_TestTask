import styles from "./index.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import ImageButton from "../ImageButton";

interface ScrollGalleryProps {
  children: React.ReactNode[];
}

const ScrollGallery: FC<ScrollGalleryProps> = ({ children }) => {
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [childWidth, setChildWidth] = useState<number>(0);
  const [isShowScrollButtons, setIsShowScrollButtons] = useState<boolean>(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (galleryRef.current) {
        const newScrollWidth = galleryRef.current.clientWidth;

        if (newScrollWidth !== clientWidth) {
          setClientWidth(newScrollWidth);
        }
      }
    });

    if (galleryRef.current) {
      resizeObserver.observe(galleryRef.current);

      if (clientWidth < galleryRef.current.scrollWidth) {
        setIsShowScrollButtons(true);
        setChildWidth(galleryRef.current.scrollWidth / children.length);
      }
      else {
        setIsShowScrollButtons(false);
      }
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [clientWidth]);

  const handleOnScrollClick = (shift: number) => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollLeft + shift,
        behavior: "smooth"
      });
    }
  }

  return (
    <div>
      <div className={styles.gallery} ref={galleryRef}>{children}</div>
      {isShowScrollButtons && <div className={styles.scrollButtons}>
        <ImageButton
          imageSrc="/svg/move.svg"
          onClick={() => handleOnScrollClick(- childWidth)}
        />
        <ImageButton
          imageSrc="/svg/move.svg"
          onClick={() => handleOnScrollClick(childWidth)}
        />
      </div>}
    </div>
  );
}

export default ScrollGallery;