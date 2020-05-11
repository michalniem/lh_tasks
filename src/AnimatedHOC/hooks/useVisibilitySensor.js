import { useEffect, useState } from "react";

function useVisibilitySensor(ref, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [ref, options]);

  return isIntersecting;
}

export default useVisibilitySensor;