import { useEffect, useState } from "react";
import { AboutData, skillsData, SubNavList } from "./About.data";
import styles from "./About.module.scss";
import type { AboutProps } from "./About.types";
import { usePathname } from "next/navigation";
import useWindowWidth from "@/hooks/useWindowWidth";
import { isWeakMap } from "util/types";

const About = ({}: AboutProps) => {
  const [currentNav, setCurrentNav] = useState(SubNavList[0]?.id || 0);
  const { isMobileView } = useWindowWidth();
  const [data, setData] = useState(SubNavList[0]);

  useEffect(() => {
    const selectedData = SubNavList.find((item) => item.id === currentNav);
    setData(selectedData);
  }, [currentNav]);

  return (
    <div className={styles.AboutContainer}>
      <div className={styles.About}>
        <h2>{AboutData.title}</h2>
        <p>{AboutData.body}</p>
      </div>

      <span className={styles.AboutSpan}></span>

      <div className={styles.AboutNavigation}>
        <nav className={styles.AboutSubNav}>
          {SubNavList.map((item) => (
            <li
              key={item.id}
              onClick={() => setCurrentNav(item.id)}
              className={currentNav === item.id ? styles.active : ""}
            >
              {item.work}
            </li>
          ))}
        </nav>
      </div>

      <div className={styles.AboutContent}>
        <h3>{data.title}</h3>

        <ul>
          {data.description.map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <div className={styles.AboutSkillSection}>
          <h4>Skills</h4>
          <div
            className={isMobileView ? styles.AboutTagsMobile : styles.AboutTags}
          >
            {data.skills.map((item) => (
              <div className={styles.Tag}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <h2>Skills</h2>
      <div className={isMobileView ? styles.AboutTagsMobile : styles.AboutTags}>
        {skillsData.map((item) => (
          <li className={styles.Tag}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default About;
