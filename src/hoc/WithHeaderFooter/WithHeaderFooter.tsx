import styles from './WithHeaderFooter.module.scss';
import type { WithHeaderFooterProps } from "./IWithHeaderFooter";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Poppins } from 'next/font/google';


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
