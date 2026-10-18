import { useState } from "react";
import { useLocation } from "react-router";

function useMobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { pathname, search } = useLocation();

  function updateMobileNav() {
    setIsMobileNavOpen((isMobileNavOpen) => !isMobileNavOpen);
  }

  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  const currentUrl = pathname + search;
  const [lastUrl, setLastUrl] = useState(currentUrl);

  if (currentUrl !== lastUrl) {
    setLastUrl(currentUrl);
    setIsMobileNavOpen(false);
  }
  console.log("render", { currentUrl, lastUrl });

  return { isMobileNavOpen, updateMobileNav, closeMobileNav };
}

export { useMobileNav };
