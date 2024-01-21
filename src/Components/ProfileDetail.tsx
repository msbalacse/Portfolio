import { useEffect, useRef } from 'react';
import ProfilePic from '../assets/images/ProfilePic.jpg';
import gsap from 'gsap';
import Container from './styled/Container';
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
      <div className="flex flex-wrap gap-4 p-4">
        <img src={ProfilePic} className="w-[250px]" alt="profile picture" />
        <div>
          <p
            className="text-6xl font-bold min-h-40 md:text-9xl"
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
