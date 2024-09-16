import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoUrl from '../assets/GAlogo.png'
import styles from './Styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const pages = ['Benefits', 'Features', 'Community', 'Pricing', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        borderBottom: '3px solid #F6F6F6',
      }}
      elevation={0}
    >
      <Container sx={isSmallScreen?{px:'20px'}:{...styles.containerStyle, py: 0}}>
        <Toolbar disableGutters sx={isSmallScreen?{display:'block'}:{}}>
          <Box sx={isSmallScreen?{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', alignItems: 'center', justifyContent: 'center'}:{display:'none'}}>
            <img
              src={logoUrl}
              alt='Logo'
              style={{
                width: '90px',
                gridColumn: 1
            }}/>
            <Box sx={{ gridColumn: 4, justifySelf:' end'}}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="#333333"
                sx={{width: '70px'}}
              >
                <MenuIcon fontSize='large'/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  width: '100%'
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={()=>{
                    handleCloseNavMenu()
                    scrollToSection(page)
                    }}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Box sx={{ display: { sm: 'none', md: 'flex' }}}>
          <Box sx={{...styles.gridSetting}}>
            <Box className='logo' sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gridColumn: '1 / 4'}}>
              <img
                src={logoUrl}
                alt='Logo'
                style={{
                  width: '100%',
                  maxWidth: '80px' 
              }}/>
            </Box>
            <Box className='page' sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gridColumn: '4 / 10'}}>
              {pages.map((page) => (
                <Button
                  onClick={() => scrollToSection(page)}
                  key={page}
                  sx={styles.navButton}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box className='login' sx={{display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', gridColumn: '10 / 13'}}>
              {/* <Button
              sx={styles.navButton}
              href="https://gabrielai.co/login"
              >
                Login
              </Button> */}
              <Button
              variant="contained"
              sx={{...styles.regularButton, px: '20px'}}
              href="https://gabrielai.co/login"
              >
                Login
              </Button>
            </Box>
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

