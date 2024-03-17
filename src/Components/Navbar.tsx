import { AppBar, Button, Container, Typography } from '@mui/material';
import { useTheme } from '../contexts/theme';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import audio from '../assets/audio/arcade-game-jump-coin.wav';
import { LogoLight, LogoDark } from '../assets/images';

const Navbar = () => {
  const themeCtx = useTheme();
  const theme = useTheme().theme;

  const sound = new Audio(audio);

  const handleTheme = () => {
    themeCtx.toggleTheme();
    sound.play();
    document.body.style.background = theme === 'light' ? 'black' : 'white';
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        height: '3rem',
        boxShadow: 'none',
        borderBottom: '1px solid #eee',
        display: 'flex',
        alignItems: 'center',
        marginY: '1rem',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <img
          src={`${theme === 'light' ? LogoLight : LogoDark}`}
          alt="logo"
          style={{ height: '30px' }}
        />

        <Button onClick={handleTheme}>
          {theme == 'light' ? (
            <MdDarkMode size={'24px'} color="var(--primary-color)" />
          ) : (
            <MdOutlineDarkMode size={'24px'} color="var(--primary-color)" />
          )}
        </Button>
      </Container>
    </AppBar>
  );
};

export default Navbar;
