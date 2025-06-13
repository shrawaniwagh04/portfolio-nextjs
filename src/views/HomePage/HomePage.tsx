import { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { NAME } from "@/constants/constants";
import { usePathname } from "next/navigation";

const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const path = usePathname();

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
        I’m a final-year Computer Engineering student at Bajaj Institute of Technology (2021–2025) with hands-on experience in React, React Native, JavaScript, and Firebase. I've interned at Coditas and Indigies Innovation, building scalable web and mobile apps, and collaborating on real-world projects using tools like Git, Redux, and Azure DevOps. As a community contributor and student leader, I’ve developed event platforms, led design teams, and earned recognition in national-level competitions for innovation and impact.
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
