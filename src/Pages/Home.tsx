import ProfileDetail from '../Components/ProfileDetail';
import HomeWrapper from '../Components/styled/HomeWrapper';
const Home = () => {
  return (
    <HomeWrapper>
      <div
        style={{
          backgroundColor: 'var(--primary-color)',
          padding: '.2rem',
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <main>
          <ProfileDetail />
        </main>
      </div>
    </HomeWrapper>
  );
};

export default Home;
