import styles from "./page.module.scss";
import Image from 'next/image';
import TallinnArticle from "./components/TallinnArticle";
import { FC } from "react";
import OtherTours from "./components/OtherTours";

const Home: FC = () => {
  return (
    <div className="wrapper">
      <main>
        <Image
          alt='Main banner'
          src="/img/main-banner-1.png"
          width={1440}
          height={480}
          priority={true}
          className={styles.banner}
        />
        <div className="container">
          <TallinnArticle />
          <OtherTours />
        </div>
      </main>
    </div>
  )
}

export default Home;
