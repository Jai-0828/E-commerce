import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// react-router-dom keeps scroll position between route changes by default,
// which feels broken on a shop site. This resets scroll to top on every
// path change.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
