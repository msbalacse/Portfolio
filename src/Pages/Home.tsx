import HomeWrapper from '../Components/styled/HomeWrapper';
import { useTheme } from '../contexts/theme';
import Navbar from '../Components/Navbar';
const Home = () => {
  const theme = useTheme();

  return (
    <HomeWrapper backgroundColor={theme.theme}>
      <Navbar />
      <p>
        Hello! I am Balamurugan, a front-end developer and passionate React
        enthusiast from the vibrant city of Madurai, Tamilnadu. As a lifelong
        learner, my love for web development has driven me to explore a
        multitude of learning resources. I've dedicated countless hours to
        studying diverse video tutorials, meticulously examining documentation,
        and devouring articles on the latest web technologies.
      </p>
      <p>
        This dedication has formed a solid foundation for my expertise in
        front-end development and React. From my early days, I've been
        captivated by computers and technology, and this fascination has only
        grown stronger with time. It fuels my insatiable desire to continually
        expand my knowledge and skills in the dynamic world of web development.
        One of the most fulfilling aspects of being a developer is the joy of
        crafting something unique and impactful. I take great pleasure in
        sharing my work with the global developer community on platforms like
        GitHub.
      </p>
    </HomeWrapper>
  );
};

export default Home;
