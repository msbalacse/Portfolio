import ProfileDetail from '../Components/ProfileDetail';
import Hero from '../Components/styled/Hero';
import HomeWrapper from '../Components/styled/HomeWrapper';
import { useTheme } from '../contexts/theme';
import audio from '../assets/audio/arcade-game-jump-coin.wav';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import About from '../Components/About';
const Home = () => {
  const theme = useTheme();

  const sound = new Audio(audio);

  const handleTheme = () => {
    theme.toggleTheme();
    sound.play();
    document.body.style.background =
      theme.theme === 'light' ? 'black' : 'white';
  };

  return (
    <HomeWrapper>
      <button
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          color: 'white',
        }}
        onClick={handleTheme}
      >
        {theme.theme == 'light' ? (
          <MdDarkMode size={'24px'} color="var(--primary-color)" />
        ) : (
          <MdOutlineDarkMode size={'24px'} color="var(--primary-color)" />
        )}
      </button>
      <Hero theme={theme.theme}>
        <ProfileDetail />
      </Hero>
      <About />
    </HomeWrapper>
  );
};

export default Home;
