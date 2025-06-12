'use client'
import styles from './WithHeaderFooter.module.scss';
import type { WithHeaderFooterProps } from "./IWithHeaderFooter";
import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';

const Header  = dynamic(() => import ("@/components/Header/Header"));
const Footer = dynamic(() => import ("@/components/Footer/Footer"));


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
});

const WithHeaderFooter = ({ headerData, children }: WithHeaderFooterProps) => {
  return (
      <div className={`${styles.PageContainer} ${poppins.className}`} >
      <Header data={headerData} />
      {children}
      <Footer />
      </div>
  );
};

export default WithHeaderFooter;
