import './App.css';
import ProfileDetails from './Components/ProfileDetails';

function App() {
  const classes = {
    main: 'max-w-[960px] min-h-screen bg-white my-8 mx-auto',
  };
  return (
    <main className={classes.main}>
      <ProfileDetails />
    </main>
  );
}

export default App;
