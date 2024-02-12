import { useTheme } from '../contexts/theme';
import Paragraph from './styled/Paragraph';
import { TitleSmall } from './styled/Titles';

const About = () => {
  const theme = useTheme().theme;

  return (
    <section
      className={`${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      } grid grid-cols-4`}
    >
      <TitleSmall className=" justify-self-center" theme={theme}>
        Who Am I?
      </TitleSmall>
      <div className="col-span-3 md:pt-[1rem]">
        <Paragraph theme={theme}>
          Hello! I am Balamurugan, a front-end developer and passionate React
          enthusiast from the vibrant city of Madurai, Tamilnadu.
        </Paragraph>
        <Paragraph theme={theme}>
          As a lifelong learner, my love for web development has driven me to
          explore a multitude of learning resources. I've dedicated countless
          hours to studying diverse video tutorials, meticulously examining
          documentation, and devouring articles on the latest web technologies.
          This dedication has formed a solid foundation for my expertise in
          front-end development and React.
        </Paragraph>
        <Paragraph theme={theme}>
          From my early days, I've been captivated by computers and technology,
          and this fascination has only grown stronger with time. It fuels my
          insatiable desire to continually expand my knowledge and skills in the
          dynamic world of web development.
        </Paragraph>
      </div>
    </section>
  );
};

export default About;
