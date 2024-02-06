import { useLayoutEffect, useRef } from 'react';
import ProfilePic from '../assets/images/ProfilePic.jpg';
import gsap from 'gsap';
import { TitleLarge } from './styled/Titles';
import Paragraph from './styled/Paragraph';
import { useTheme } from '../contexts/theme';
const ProfileDetail = () => {
  const comp = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  const theme = useTheme().theme;

  const textColor = theme === 'light' ? 'text-black' : 'text-white';

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
      <div
        className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-y-8 "
        ref={comp}
      >
        <img
          src={ProfilePic}
          ref={imgRef}
          className="w-[250px] justify-self-start"
          alt="profile picture"
        />
        <div className="col-span-4 flex flex-col flex-wrap gap-4">
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
          <p
            className={`font-extrabold tracking-wider ${textColor} text-md md:text-lg`}
          >
            Computer Science Engineer 🔭 | Software Developer 👨‍💻
          </p>
        </div>
        <TitleLarge className="col-span-2 justify-self-start" theme={theme}>
          Who Am I?
        </TitleLarge>
        <div className="col-span-3 md:pt-[1rem]">
          <Paragraph theme={theme}>
            Hello! I am Balamurugan, a front-end developer and passionate React
            enthusiast from the vibrant city of Madurai, Tamilnadu.
          </Paragraph>
          <Paragraph theme={theme}>
            As a lifelong learner, my love for web development has driven me to
            explore a multitude of learning resources. I've dedicated countless
            hours to studying diverse video tutorials, meticulously examining
            documentation, and devouring articles on the latest web
            technologies. This dedication has formed a solid foundation for my
            expertise in front-end development and React.
          </Paragraph>
          <Paragraph theme={theme}>
            From my early days, I've been captivated by computers and
            technology, and this fascination has only grown stronger with time.
            It fuels my insatiable desire to continually expand my knowledge and
            skills in the dynamic world of web development.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
