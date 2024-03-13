import { useEffect, useRef } from 'react';
import ProfilePic from '../assets/images/ProfilePic.webp';
import { useTheme } from '../contexts/theme';
import TextAnimation from './ui/TextAnimation';
import { txtanimation } from '../data/txtanimation';
import FadeToLeft from './Animation/FadeToLeft';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ProfileDetail = () => {
  const comp = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  const theme = useTheme().theme;

  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  useEffect(() => {
    console.log('updating ' + textColor);
  }, [textColor]);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 0.8, opacity: 0, ease: 'power1.inOut' },
      { scale: 1, opacity: 1, duration: 0.8 }
    );
  });

  return (
    <div>
      <div className="flex flex-wrap gap-8" ref={comp}>
        <img
          src={ProfilePic}
          ref={imgRef}
          className="w-[250px] rounded-sm justify-self-start"
          alt="profile-pic"
        />
        <div className="flex flex-col flex-wrap gap-4">
          <FadeToLeft>
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
          </FadeToLeft>
          <TextAnimation arr={txtanimation} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
