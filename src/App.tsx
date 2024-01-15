import './App.css';
import ProfileDetail from './Components/ProfileDetail.tsx';
import Paragraph from './Components/styled/Paragraph.tsx';

function App() {
  const classes = {
    main: 'max-w-[960px] min-h-screen bg-white my-8 mx-auto',
  };
  return (
    <main className={classes.main}>
      <ProfileDetail />
      <Paragraph>
        Hello there! 👋 I'm Balamurugan, a highly skilled front-end developer
        specializing in React. 🚀 I come from Madurai, India. 🇮🇳 I have a
        profound passion for web development, which has driven me to
        continuously seek out opportunities to expand my expertise in this
        field. 💡
      </Paragraph>
      <Paragraph>
        To excel in my career, I have diligently pursued learning through a wide
        range of resources, including in-depth video tutorials 📺, comprehensive
        documentation 📚, and insightful articles 📰. This dedication has
        allowed me to stay updated with the latest trends and best practices in
        the industry. 🔍
      </Paragraph>
      <Paragraph>
        My programming journey commenced with JavaScript, which laid a strong
        foundation for my subsequent exploration of Java ☕, particularly in the
        realm of competitive programming. 💻
      </Paragraph>

      <Paragraph>
        I am always eager to take on new challenges 🌟 and collaborate with
        like-minded professionals 👥 to create impactful and innovative web
        solutions. 🌐 Please feel free to reach out to me; I'm open to
        discussing exciting opportunities and sharing insights on web
        development and React. Let's connect and explore how we can create
        something extraordinary together! 🤝
      </Paragraph>
    </main>
  );
}

export default App;
