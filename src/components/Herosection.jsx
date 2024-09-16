import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './Styles';
import backgroundUrl from '../assets/background.png';
import { H1Typography, H3Typography, Body1Typography } from './Fonts';
import { Container, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { motion } from "framer-motion";
import { Howl } from 'howler';
import demo1Url from '../assets/Demo1.mp3';
import demo2Url from '../assets/Demo2.mp3';
import demo3Url from '../assets/Demo3.mp3';
import background1Url from '../assets/background1.png'
import SoundWave from './SoundWave';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const clip1 = new Howl({ src: [demo1Url] })
const clip2 = new Howl({ src: [demo2Url] })
const clip3 = new Howl({ src: [demo3Url] })

function Herosection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const DemoTypography = styled(Typography)({
    fontFamily: 'poppins',
    fontWeight: 500,
    fontSize: 18,
    color: 'white',
  });

  const DemoBox = styled(Box)({
    marginBottom: '40px',
    width: '470px',
    backgroundColor: '#21262B',
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px'
  });

  const DemoBoxSm = styled(Box)({
    marginBottom: '30px',
    width: '280px',
    backgroundColor: '#21262B',
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px'
  });

  const MotionDemoBox = motion(DemoBox);
  const MotionDemoBoxSm = motion(DemoBoxSm);

  // Define audio clips using Howl with imported URLs
  const [currentPlaying, setCurrentPlaying] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showWave, setShowWave] = React.useState({
    clip1: false,
    clip2: false,
    clip3: false,
  });

  const setupClipListeners = (clip) => {
    clip.on('end', () => {
      setIsPlaying(false);
      setCurrentPlaying(null);
    });
  };

  React.useEffect(() => {
    setupClipListeners(clip1);
    setupClipListeners(clip2);
    setupClipListeners(clip3);
  }, []);

  const handleAudio = (clip, clipName) => {
    if (isPlaying) {
      currentPlaying.stop();
      setIsPlaying(false);
      if (currentPlaying === clip) {
        setCurrentPlaying(null);
      } else {
        setCurrentPlaying(clip);
        clip.play();
        setIsPlaying(true);
      }
    } else {
      clip.play();
      setIsPlaying(true);
      setCurrentPlaying(clip);
    }
  };

  return (
    <Container id='HeroSection' sx={isSmallScreen?{...styles.containerStyleSm}:{ ...styles.containerStyle, height: '800px' }}>
      <Box sx={isSmallScreen?{display: 'flex', flexDirection:'column'}:{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '15px' }}>
        <Box className='hero' sx={isSmallScreen?{display: 'flex', flexDirection: 'column', justifyContent:'center'}:{ gridColumn: 1, paddingTop: '40px' }}>
          <H1Typography sx={isSmallScreen?{textAlign: 'center', paddingBottom: '20px', lineHeight: '110%', fontSize: 38 }:{ paddingBottom: '20px', lineHeight: '110%' }}>
            Your voice is your power.
          </H1Typography>
          <H3Typography sx={isSmallScreen?{textAlign: 'center', paddingBottom: '20px', fontSize: 18 }:{ paddingBottom: '20px', paddingRight: '50px' }}>
            Leverage AI for Effective and Efficient Outreach
          </H3Typography>
          <Body1Typography sx={isSmallScreen?{textAlign: 'center', paddingBottom: '40px'}:{ paddingBottom: '40px', paddingRight: '50px' }}>
            At Gabriel AI, we empower you to connect with your audience like never before. Our AI-driven platform offers personalized voicemails and SMS messages, helping you streamline communication and enhance engagement with your clients, customers or community.
          </Body1Typography>
          <Button
            variant="contained"
            sx={isSmallScreen?{...styles.regularButton, alignSelf: 'center', backgroundColor:'#FFDB62', border: 'solid #FFDB62 2px', color:'#333333'}:{...styles.regularButton, backgroundColor:'#FFDB62', border: 'solid #FFDB62 2px', color:'#333333'}}
            href="https://gabrielai.co/register"
          >
            Try for free 👋
          </Button>
        </Box>
        <Box sx={isSmallScreen?{}:{ gridColumn: 2, display: 'grid', gridTemplateColumns:'repeat(6, 1fr);'}}>
          {isSmallScreen?
          <Box className='box1' sx={{ position: 'absolute', zIndex: -1, top: '120px', right: '0px', opacity: '60%'}}>
            <svg width="100%" height="395" viewBox="0 0 373 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1070" height="395" rx="188" fill="url(#paint0_linear_139_2108)"/>
            <defs>
            <linearGradient id="paint0_linear_139_2108" x1="-1.28316e-06" y1="197.198" x2="901.053" y2="197.198" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F4DBAB" stop-opacity="0.4"/>
            <stop offset="0.574" stop-color="#F1D5CB"/>
            <stop offset="1" stop-color="white" stop-opacity="0.01"/>
            </linearGradient>
            </defs>
            </svg>
          </Box>:
          <Box className='box1' sx={{ zIndex: 1, top: '140px', gridColumn: '1 / 7', position: 'absolute'}}>
            <svg width="50vw" height="395" viewBox="0 0 50vw 395" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1069" height="395" rx="188" fill="url(#paint0_linear_411_339)"/>
            <defs>
            <linearGradient id="paint0_linear_411_339" x1="-1.28196e-06" y1="197.198" x2="900.211" y2="197.198" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F4DBAB"/>
            <stop offset="0.574" stop-color="#F1D5CB"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
            </svg>
          </Box>}
          {isSmallScreen?
          null:
          <Box sx={{ gridColumn: '1 / 7', position: 'absolute', zIndex: 0, top: '220px'}}>
            <svg width="570" height="519" viewBox="0 0 526 519" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 62C0 27.7584 27.7583 0 62 0H526V468C526 496.167 503.167 519 475 519H51C22.8335 519 0 496.167 0 468V62Z" fill="#EBEBEB" fill-opacity="0.5"/>
            </svg>
          </Box>
          }
          {isSmallScreen?null:
          <Box className='box2' sx={{gridColumn: '1 / 7', zIndex: 2, display: 'flex', justifyContent: 'center' }}>
            <img
              src={background1Url}
              alt='Demo'
              style={{width: '75%'}}
            />
          </Box>}
          {isSmallScreen? null
          :
          <Box className='box3' sx={{ position: 'absolute', top: '380px', zIndex: 3}}>
            <MotionDemoBox sx={{marginLeft: '80px', display: 'flex', justifyContent: 'space-between'}} whileHover={{ scale: 1.2}} whileTap={{ scale: 0.8}} onClick={() => handleAudio(clip3)}>
              {isPlaying && currentPlaying=== clip3?<SoundWave color={'#B0C0E9'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#B0C0E9' }} /> }
              <DemoTypography>
                Hey, Joe. Sorry, I missed you. Are you...
              </DemoTypography>
              {isPlaying && currentPlaying=== clip3? <Box sx={{width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PauseIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>: <Box sx={{ width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PlayArrowIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>}
            </MotionDemoBox>
            <MotionDemoBox sx={{ marginLeft: '50px', display: 'flex', justifyContent: 'space-between'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip1)}>
              {isPlaying && currentPlaying=== clip1?<SoundWave color={'#FFDB62'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#FFDB62' }} /> }
              <DemoTypography>
                Hello Chris, this is Sergeant John from...
              </DemoTypography>
              {isPlaying && currentPlaying=== clip1? <Box sx={{width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PauseIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>: <Box sx={{ width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PlayArrowIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>}
            </MotionDemoBox>
            <MotionDemoBox sx={{ marginLeft: '20px', display: 'flex', justifyContent: 'space-between'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip2)}>
              {isPlaying && currentPlaying=== clip2?<SoundWave color={'#F3D0BB'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#F3D0BB' }} /> }
              <DemoTypography>
                Yo, Mac. It's Poster Child, this Saturday...
              </DemoTypography>
              {isPlaying && currentPlaying=== clip2? <Box sx={{width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PauseIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>: <Box sx={{ width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PlayArrowIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>}
            </MotionDemoBox>
          </Box> }
          {isSmallScreen? 
          <Box sx={{display:'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr',marginTop:'64px'}}>
            <Box sx={{gridColumn: 1, gridRow: 1, position: 'relative', top: '120px', display: 'flex', flexDirection: 'column', zIndex: 3, alignItems:'center'}}>
              <MotionDemoBoxSm sx={{display:'flex',justifyContent:'center'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip3)}>
                {isPlaying && currentPlaying=== clip3?<SoundWave color={'#B0C0E9'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#B0C0E9' }} /> }
                <DemoTypography sx={{fontSize: 14}}>
                  Hey, Joe. Sorry, I missed you. Are you...
                </DemoTypography>
                {isPlaying && currentPlaying=== clip3? <Box sx={{width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PauseIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>: <Box sx={{ width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PlayArrowIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>}
              </MotionDemoBoxSm>
              <MotionDemoBoxSm sx={{display:'flex',justifyContent:'center'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip1)}>
                {isPlaying && currentPlaying=== clip1?<SoundWave color={'#FFDB62'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#FFDB62' }} /> }
                <DemoTypography sx={{fontSize: 14}}>
                  Hello Chris, this is Sergeant John from...
                </DemoTypography>
                {isPlaying && currentPlaying=== clip1? <Box sx={{width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PauseIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>: <Box sx={{ width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PlayArrowIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>}
              </MotionDemoBoxSm>
              <MotionDemoBoxSm sx={{display:'flex',justifyContent:'center'}} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip2)}>
                {isPlaying && currentPlaying=== clip2?<SoundWave color={'#F3D0BB'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#F3D0BB' }} /> }
                <DemoTypography sx={{fontSize: 14}}>
                  Yo, Mac. It's Poster Child, this Saturday...
                </DemoTypography>
                {isPlaying && currentPlaying=== clip2? <Box sx={{width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PauseIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>: <Box sx={{ width:'25px', height:'25px', backgroundColor:'#D9D9D9', borderRadius:'15px', display:'flex', alignItems: 'center', justifyContent: 'center'}}><PlayArrowIcon sx={{color:'#333333', justifySelf: 'self-end' }}/></Box>}
              </MotionDemoBoxSm>
            </Box>
            <Box className='box2Phone' sx={{gridColumn: 1, gridRow: 1, display: 'flex', justifyContent:'center',alignItems:'flex-end'}}>
              <img
                src={background1Url}
                alt='Demo'
                width='300px'
              />
            </Box>
            <Box sx={{gridColumn: 1, gridRow: 1, zIndex: -1, display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
              <svg width="330" height="280" viewBox="0 0 330 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="330" height="280" rx="20" fill="#EBEBEB" fill-opacity="0.5"/>
              </svg>
            </Box>
          </Box>:
        <Box className='box4' sx={{ position: 'absolute', top: 0, zIndex: -1, right: 0}}>
          <svg width="442" height="868" viewBox="0 0 442 868" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="442" height="868" fill="#F8F6F7" />
          </svg>
        </Box>}
        </Box>
      </Box>
    </Container>
  );
};

export default Herosection;
