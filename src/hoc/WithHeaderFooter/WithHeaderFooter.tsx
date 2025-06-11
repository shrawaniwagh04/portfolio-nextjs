import styles from './WithHeaderFooter.module.scss';
import type { WithHeaderFooterProps } from "./IWithHeaderFooter";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Poppins } from 'next/font/google';

const poppins = Poppins({weight: "400"})

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
