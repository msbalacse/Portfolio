import { useLayoutEffect, useRef } from 'react';
import ProfilePic from '../assets/images/ProfilePic.jpg';
import gsap from 'gsap';
import { TitleLarge } from './styled/Titles';
import Paragraph from './styled/Paragraph';
const ProfileDetail = () => {
  const comp = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(titleRef.current, {
        xPercent: 5,
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
    <div>
      <div className="flex flex-wrap gap-4 " ref={comp}>
        <img
          src={ProfilePic}
          ref={imgRef}
          className="w-[250px]"
          alt="profile picture"
        />
        <div className="flex flex-col flex-wrap gap-4">
          <p
            className="text-3xl font-bold min-h-40 md:text-6xl"
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
            <span className="mt-3 mr-2">Bala</span>
            <span className="bg-[#611FAD] text-white my-2">Murugan.</span>
          </p>
          <p className="font-extrabold tracking-wider text-white text-md md:text-lg">
            Computer Science Engineer 🔭 | Software Developer 👨‍💻
          </p>
          <a
            href="#about"
            style={{ textDecoration: 'underline', color: 'blue' }}
          >
            About
          </a>
        </div>
      </div>
      <TitleLarge>Who Am I?</TitleLarge>
      <Paragraph>
        Hello! I am Balamurugan, a front-end developer and passionate React
        enthusiast from the vibrant city of Madurai, Tamilnadu.
      </Paragraph>
    </div>
  );
};

export default ProfileDetail;
