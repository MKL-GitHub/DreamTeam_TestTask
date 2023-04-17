import styles from "./index.module.scss";
import Image from "next/image";
import { FC } from "react";

interface ImageButtonProps {
  className?: string;
  imageSrc: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: number;
  height?: number;
}

const ImageButton: FC<ImageButtonProps> =
  ({ imageSrc, className, onClick, width = 14, height = 14 }) => {
    return (
      <button
        className={`btn ${styles.index} ${className}`}
        onClick={onClick}
      >
        <Image
          alt=""
          src={imageSrc}
          width={width}
          height={height}
        />
      </button>
    );
  }

export default ImageButton;