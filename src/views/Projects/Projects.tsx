"use client";
import Card from "@/components/Card/Card";
import styles from "./Projects.module.scss";
import type { ProjectsProps } from "./Projects.types.ts";
import { Project } from "@/constants/Project/Project.constant";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useEffect } from "react";

const Projects = ({}: ProjectsProps) => {
  const { isMobileView } = useWindowWidth();
  useEffect(() => {
    console.log(isMobileView);
  }, []);

  return (
    <div className={styles.ProjectContainer}>
      <div
        className={
          isMobileView? styles.ProjectsSubContainerMobileView
            :styles.ProjectsSubContainer
             
        }
      >
        {Project.map((item) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
