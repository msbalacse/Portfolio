import { useEffect, useRef } from 'react';
import ProfilePic from '../assets/images/ProfilePic.jpg';
import gsap from 'gsap';
import Container from './styled/Container';
import Paragraph from './styled/Paragraph';

const ProfileDetail = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {}, nameRef);

    return () => ctx.revert();

    console.log('useEffect hook');

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <div className="flex gap-4 p-4">
        <img src={ProfilePic} className="w-[250px]" alt="profile picture" />
        <div>
          <p
            className="h-40 font-bold text-9xl"
            style={{
              color: 'transparent',
              backgroundImage:
                'linear-gradient(to right, #611FAD 100%, #7425CF 27%)',
              backgroundClip: 'text',
            }}
            ref={nameRef}
          >
            Bala Murugan
          </p>
          <p className="px-2 text-2xl font-extrabold text-white">
            Computer Science Engineer
          </p>
          <Paragraph>
            Hello there! 👋 I'm Balamurugan, a highly skilled front-end
            developer specializing in React. 🚀 I come from Madurai, India. 🇮🇳 I
            have a profound passion for web development, which has driven me to
            continuously seek out opportunities to expand my expertise in this
            field. 💡
          </Paragraph>
        </div>
      </div>
    </Container>
  );
};

export default ProfileDetail;
