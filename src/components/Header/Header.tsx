import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import useWindowWidth from "@/hooks/useWindowWidth";
import hamburger from "@assests/hamburger.png";
import cross from '@assests/cross.png';

import { HeaderProps, MobileHeaderProps } from "./IHeader";
import { NavItems } from "./Header.data";
import { usePathname } from "next/navigation";

//Mobile Nav Header
const MobileHeader = ({ isMenuOpen, toggleMenu }: MobileHeaderProps) => {
  return (
    <header className={styles.MobileHeader} >
      <div className={styles.MobileTopBar}>
        <div className={styles.MobileLogo}>Shrawani Wagh</div>
        <button onClick={toggleMenu} className={styles.HamburgerButton}>
          <Image src={hamburger} alt="Menu" width={24} height={24} />
        </button>
      </div>

      {isMenuOpen && (
        <nav className={styles.MobileNav}>
          <Image src={cross} alt="Close" width={24} height={24} className={styles.CloseIcon} onClick={toggleMenu}/>
          <div className={styles.MobileNavItems}>
            {NavItems.map((item) => (
              <Link href={item.link}>{item.name}</Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

//Desktop Nav Header
const Header = ({ data }: HeaderProps) => {
  const path = usePathname();
  const { isMobileView, isTabletView } = useWindowWidth();
  const isResponsive = isMobileView || isTabletView;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return !isResponsive ? (
    <header className={styles.HeaderContainer}>
      <div className={styles.HeaderLogo}>Shrawani Wagh</div>
      <nav className={styles.HeaderNavList}>
        {NavItems.map((item) => (
          <Link href={item.link} className={path === item.link ? styles.LinkColorBlue:styles.LinkColorWhite }>{item.name}</Link>
        ))}
      </nav>
    </header>
  ) : (
    <MobileHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
  );
};

export default Header;
