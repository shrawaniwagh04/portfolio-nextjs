import { useEffect, useState } from "react";
import {
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  SMALL_DESKTOP_MAX_WIDTH,
} from "../constants/constants";

const useWindowWidth = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const [isSmallDesktopView, setIsSmallDesktopView] = useState(false);

  const checkWindowWidth = () => {
    const width = window.innerWidth;

    setIsMobileView(width <= MOBILE_MAX_WIDTH);
    setIsTabletView(width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH);
    setIsSmallDesktopView(width > TABLET_MAX_WIDTH && width <= SMALL_DESKTOP_MAX_WIDTH);
  };

  useEffect(() => {
    checkWindowWidth();

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkWindowWidth, 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobileView, isTabletView, isSmallDesktopView };
};

export default useWindowWidth;
