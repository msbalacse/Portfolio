import ProfileDetail from '../Components/ProfileDetail';
import About from '../Components/styled/About';
import Hero from '../Components/styled/Hero';
import HomeWrapper from '../Components/styled/HomeWrapper';
import Paragraph from '../Components/styled/Paragraph';
import { TitleSmall } from '../Components/styled/Titles';
import { useTheme } from '../contexts/theme';
import audio from '../assets/audio/arcade-game-jump-coin.wav';
const Home = () => {
  const theme = useTheme();

  const sound = new Audio(audio);

  const handleTheme = () => {
    theme.toggleTheme();
    sound.play();
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
        {theme.theme == 'light' ? 'dark' : 'light'}
      </button>
      <Hero theme={theme.theme}>
        <ProfileDetail />
      </Hero>
      <About style={{ minHeight: '100vh' }}>
        <TitleSmall id="about">About</TitleSmall>
        <Paragraph>
          Hello! I am Balamurugan, a front-end developer and passionate React
          enthusiast from the vibrant city of Madurai, Tamilnadu.
        </Paragraph>
        <Paragraph>
          As a lifelong learner, my love for web development has driven me to
          explore a multitude of learning resources. I've dedicated countless
          hours to studying diverse video tutorials, meticulously examining
          documentation, and devouring articles on the latest web technologies.
          This dedication has formed a solid foundation for my expertise in
          front-end development and React.
        </Paragraph>
        <Paragraph>
          From my early days, I've been captivated by computers and technology,
          and this fascination has only grown stronger with time. It fuels my
          insatiable desire to continually expand my knowledge and skills in the
          dynamic world of web development.
        </Paragraph>
      </About>
    </HomeWrapper>
  );
};

export default Home;
