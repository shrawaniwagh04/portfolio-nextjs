import Image from "next/image";
import styles from "./Card.module.scss";
import type { CardProps } from "./Card.types.ts";
import { useState } from "react";
import GitHub from "../../assests/gitlab.png";
import Link from "next/link";

const Card = ({ data }: CardProps) => {
  const [showLink, setShowLink] = useState(false);

  return (
    <div className={styles.CardContainer}>
      <Image
        alt="Card Image"
        src={data.image}
        width={320}
        height={250}
        className={styles.ImageContainer}
      />
      <div className={styles.DescriptionContainer}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <Link
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.Image}
        >
          <Image alt="GitHub Link" src={GitHub} width={25} height={25} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
