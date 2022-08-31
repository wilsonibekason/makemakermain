import { useEffect } from "react";
// import { withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { withRouter } from "./withrouter";
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behaviour: "smooth",
    });
  }, [pathname]);
  return children || null;
};

export default withRouter(ScrollToTop);
