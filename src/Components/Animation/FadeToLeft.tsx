import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { ReactNode, useRef } from 'react';

type FadeToLeftProps = {
  children: ReactNode;
};

const FadeToLeft: React.FC<FadeToLeftProps> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    },
    { scope: container }
  );

  return <div ref={container}>{children}</div>;
};

export default FadeToLeft;
