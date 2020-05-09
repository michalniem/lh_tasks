import React, { useEffect, useRef, useState } from "react";

function useVisibilitySensor(ref) {
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setVisibility(entry.isIntersecting);
    });

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref]);

  return isVisible;
}

function Animated({ children }) {
  const containerRef = useRef(null);

  const isVisible = useVisibilitySensor(containerRef);
  console.log(isVisible);
  return <div ref={containerRef}>{children}</div>;
}

export default Animated;
