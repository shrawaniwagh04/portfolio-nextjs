import { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { NAME } from "@/constants/constants";

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  function TypeWriter() {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < NAME.length) {
        setDisplayedText((prev) => prev + NAME.charAt(index));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }

  useEffect(() => {
    TypeWriter();
  }, [index, isDeleting]);

  return (
    <div className={styles.HomePageContainer}>
      <h1>
        Hi! I'm{" "}
        <span className={styles.HomePageName}>
          {displayedText}
          <span>|</span>
        </span>
      </h1>
      <p>
        Welcome to my portfolio! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quidem eveniet reprehenderit totam incidunt corporis
        eius assumenda numquam eaque fuga. Provident, ratione blanditiis dolorum
        quae dolore eum repudiandae ab recusandae nulla!
      </p>
      <button className={styles.Button}>
        <a href="/resume.pdf" className={styles.DownloadLink} download>
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default HomePage;
