import ProfilePic from '../assets/images/ProfilePic.jpg';
import { useThemeContext } from '../contexts/theme';

const ProfileDetail = () => {
  const Theme = useThemeContext();

  // console.log(Theme.mode);

  const handleChangeTheme = () => {
    Theme.changeTheme({ mode: 'dark' });
    console.log(Theme.mode);
  };

  return (
    <div className="flex gap-4 p-4">
      <img src={ProfilePic} className="w-[150px]" alt="profile picture" />
      <div>
        <p className="text-4xl font-bold text-red-600">Balamurugan</p>
        <p className="text-xs">BE Computer Science Engineer</p>
        <p className={'mt-3'}>
          Hello! I am Balamurugan, a front-end developer and passionate React
          enthusiast from the vibrant city of Madurai, Tamilnadu.
        </p>
        <button
          onClick={handleChangeTheme}
          style={{ border: '1px solid black', padding: '1rem' }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default ProfileDetail;
