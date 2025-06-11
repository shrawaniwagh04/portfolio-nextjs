import Link from "next/link";
import { FooterData } from "./Footer.data";
import styles from "./Footer.module.scss" 
import type { FooterProps } from "./IFooter" 
import Image from "next/image";

const Footer = ({}: FooterProps) => { 
  return (
    <div className={styles.footerContainer}> 
      {FooterData.map((item, index) => (
        <Link href={item.link} key={index}>
          <Image  src={item.icon} alt="Image" width={30} height={30} />
        </Link>
      ))}
    </div>
  );
}; 
 
export default Footer 
