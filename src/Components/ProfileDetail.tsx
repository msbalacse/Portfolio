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
      <div className="flex gap-4 p-4">
        <img src={ProfilePic} className="w-[150px]" alt="profile picture" />
        <div>
          <p className="text-4xl font-bold text-red-600" ref={nameRef}>
            Balamurugan
          </p>
          <p className="text-xs">BE Computer Science Engineer</p>
        </div>
      </div>
    </Container>
  );
};

export default ProfileDetail;
