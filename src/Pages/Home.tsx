import ProfileDetail from '../Components/ProfileDetail';
import Hero from '../Components/styled/Hero';
import HomeWrapper from '../Components/styled/HomeWrapper';
import { useTheme } from '../contexts/theme';
import audio from '../assets/audio/arcade-game-jump-coin.wav';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import About from '../Components/About';
import Button from '../Components/ui/Button';
const Home = () => {
  const theme = useTheme();

  const sound = new Audio(audio);

  const handleTheme = () => {
    theme.toggleTheme();
    sound.play();
    document.body.style.background =
      theme.theme === 'light' ? 'black' : 'white';
    console.log('body log');
  };

  return (
    <HomeWrapper backgroundColor={theme.theme}>
      <Button
        classNames={`fixed top-[15px] right-[15px] text-white`}
        onClick={handleTheme}
      >
        {theme.theme == 'light' ? (
          <MdDarkMode size={'24px'} color="var(--primary-color)" />
        ) : (
          <MdOutlineDarkMode size={'24px'} color="var(--primary-color)" />
        )}
      </Button>
      Test Web
    </HomeWrapper>
  );
};

export default Home;
