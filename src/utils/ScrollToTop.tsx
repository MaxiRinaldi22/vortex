"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    handleRouteChange();

    return () => {};
  }, [pathname]);

  return <>{children}</>;
}
