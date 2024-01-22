import { useLayoutEffect, useRef } from 'react';
import ProfilePic from '../assets/images/ProfilePic.jpg';
import gsap from 'gsap';
import Container from './styled/Container';
const ProfileDetail = () => {
  const comp = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      const t2 = gsap.timeline();
      t1.from(imgRef.current, {
        yPercent: -10,
        duration: 0.6,
        delay: 0.3,
      });
      t2.from(titleRef.current, {
        xPercent: 30,
        duration: 0.5,
        delay: 0.2,
      });
    }, []);

    console.log('t1');

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Container>
      <div className="flex flex-wrap gap-4 p-4" ref={comp}>
        <img
          src={ProfilePic}
          ref={imgRef}
          className="w-[250px]"
          alt="profile picture"
        />
        <div className="flex flex-col flex-wrap gap-4">
          <p
            className="text-6xl font-bold min-h-40 md:text-9xl"
            ref={titleRef}
            style={{
              color: 'transparent',
              backgroundImage:
                'linear-gradient(to right, #611FAD 100%, #7425CF 27%)',
              backgroundClip: 'text',
              display: 'flex',
              flexFlow: 'wrap row',
            }}
          >
            <span className="mr-4">Bala</span>
            <span className="bg-[#611FAD] text-white my-2">Murugan.</span>
          </p>
          <p className="px-2 text-lg font-extrabold text-white md:text-2xl">
            Computer Science Engineer
          </p>
          <a
            href="#about"
            style={{ textDecoration: 'underline', color: 'blue' }}
          >
            About
          </a>
        </div>
      </div>
    </Container>
  );
};

export default ProfileDetail;
