import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Animation = ({
  position,
  children,
  className,
  onClick,
}) => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      throttleDelay: 99,
      offset: 120,
      delay: 0.5,
      duration: 600,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div onClick={onClick} className={className} data-aos={position}>
      {children}
    </div>
  );
};

export default Animation;
