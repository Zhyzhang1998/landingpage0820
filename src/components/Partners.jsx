import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, styled } from '@mui/material';
import logo1Url from '../assets/logo1.png';
import logo2Url from '../assets/logo2.png';
// import logo3Url from '../assets/logo3.png';
// import logo4Url from '../assets/logo4.png';
// import logo5Url from '../assets/logo5.png';
import logo6Url from '../assets/logo6.png';
import logo7Url from '../assets/logo7.jpg';
import logo8Url from '../assets/logo8.png';
import logo9Url from '../assets/logo9.png';
import styles from './Styles';
import { H3Typography } from './Fonts';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const fadeInVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0.8
    }
  }
};

function Partners() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={
        isSmallScreen
          ? {
              backgroundColor: '#F8F6F7B3',
              ...styles.containerStyleSm,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
          : {
              backgroundColor: '#F8F6F7B3',
              paddingTop: '45px',
              paddingBottom: '60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }
      }
    >
      <H3Typography sx={{ fontWeight: 400 }}>Clients We Have Served</H3Typography>
      {isSmallScreen?
      <>
      <Box maxWidth="xl" 
        sx={{
          display: 'flex',
          paddingTop: '50px',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80vw'}}>
        <a href="https://kw.com/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '20vw', mx: '10px', display:'flex', justifyContent: 'center', alignItems:'center' } :{}}>
          <motion.img
            src={logo1Url}
            alt="Logo"
            style={isSmallScreen ? { maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '50px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.posterchild.club/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '20vw', mx: '10px',display:'flex', justifyContent: 'center', alignItems:'center' } :{}}>
          <motion.img
            src={logo2Url}
            alt="Logo"
            style={isSmallScreen ? {maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '50px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.signaturealaskarentals.com/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '20vw', mx: '10px', display:'flex', justifyContent: 'center', alignItems:'center'} :{}}>
          <motion.img
            src={logo6Url}
            alt="Logo"
            style={isSmallScreen ? { maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '65px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>
      </Box>
      <Box maxWidth="xl" 
        sx={{
          display: 'flex',
          paddingTop: '30px',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '60vw'}}>
        <a href="https://www.instagram.com/lovewisekombucha/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '20vw', mx: '10px', display:'flex', justifyContent: 'center', alignItems:'center'} :{}}>
          <motion.img
            src={logo7Url}
            alt="Logo"
            style={isSmallScreen ? {maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '60px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.vicinity.team/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '20vw', mx: '10px', display:'flex', justifyContent: 'center', alignItems:'center'} :{}}>
          <motion.img
            src={logo8Url}
            alt="Logo"
            style={isSmallScreen ? {maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '50px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.coldwellbankerhomes.com/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '20vw', mx: '10px', display:'flex', justifyContent: 'center', alignItems:'center' } :{}}>
          <motion.img
            src={logo9Url}
            alt="Logo"
            style={isSmallScreen ? { maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '60px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>
      </Box>
      </>
      :
      <Box
        maxWidth="xl"
        sx={
          isSmallScreen
            ? {
                display: 'flex',
                paddingTop: '30px',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '60vw'
              }
            : {
                display: 'flex',
                paddingTop: '30px',
                justifyContent: 'space-between',
                alignItems: 'center'
              }
        }
      >
        <a href="https://kw.com/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '10vw', mx: '10px' } :{}}>
          <motion.img
            src={logo1Url}
            alt="Logo"
            style={isSmallScreen ? { maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '50px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.posterchild.club/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '10vw', mx: '10px' } :{}}>
          <motion.img
            src={logo2Url}
            alt="Logo"
            style={isSmallScreen ? {maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '50px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.signaturealaskarentals.com/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '10vw', mx: '10px' } :{}}>
          <motion.img
            src={logo6Url}
            alt="Logo"
            style={isSmallScreen ? { maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '65px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.instagram.com/lovewisekombucha/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '10vw', mx: '10px' } :{}}>
          <motion.img
            src={logo7Url}
            alt="Logo"
            style={isSmallScreen ? {maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '60px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.vicinity.team/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '10vw', mx: '10px' } :{}}>
          <motion.img
            src={logo8Url}
            alt="Logo"
            style={isSmallScreen ? {maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '50px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>

        <a href="https://www.coldwellbankerhomes.com/" target="_blank" rel="noopener noreferrer" style={isSmallScreen ? { width: '10vw', mx: '10px' } :{}}>
          <motion.img
            src={logo9Url}
            alt="Logo"
            style={isSmallScreen ? { maxHeight: '40px', mx: '10px' } : { ...styles.logo, maxHeight: '60px' }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          />
        </a>
      </Box>
      }
    </Box>
  );
}

export default Partners;
