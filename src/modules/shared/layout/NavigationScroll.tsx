import { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

//-----------------------|| NAVIGATION SCROLL TO TOP ||-----------------------//

const NavigationScroll: FunctionComponent = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return <>{children}</>;
};

export default NavigationScroll;
