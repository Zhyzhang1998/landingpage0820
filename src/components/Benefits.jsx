import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { H2Typography,H2TypographySm, Body1Typography, H3Typography } from './Fonts';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import GroupsIcon from '@mui/icons-material/Groups';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { motion } from 'framer-motion';
import styles from './Styles';
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
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
};

function Benefits() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const stylesLocal = {
    benefitTitle: { 
      width: '200px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    bodyText: {
      textAlign: 'center',
      paddingTop: '15px'
    },
    benefitBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
    },
    icon: {
      background: '#F8F6F7',
      width: '80px',
      height: '80px',
      marginBottom: '30px',
      borderRadius: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#2E3D92'
    },
    iconSm: {
      background: '#F8F6F7',
      width: '60px',
      height: '60px',
      marginBottom: '30px',
      borderRadius: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#2E3D92'
    }
  };

  return (
    <Container id='Benefits' sx={isSmallScreen?{...styles.containerStyleSm}:{ paddingLeft: '120px', paddingRight: '120px', paddingTop: '128px', paddingBottom: '64px' }}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInVariants}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {isSmallScreen?
          <H2TypographySm>Why Gabriel AI?</H2TypographySm>:
          <H2Typography>
            Why Gabriel AI?
          </H2Typography>}
          <Body1Typography sx={isSmallScreen?{paddingTop: '15px',textAlign: 'center'}:{ paddingTop: '15px', width: '700px', textAlign: 'center' }}>
            Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences saving your time and enhancing engagement.
          </Body1Typography>
        </Box>
      </motion.div>
      <Box sx={isSmallScreen?{display: 'flex', flexDirection:'column',paddingTop: '44px'}:{ paddingTop: '80px', display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {[{
          icon: <AddIcCallIcon sx={isSmallScreen?{fontSize: 30}:{ fontSize: 40 }} />,
          title: 'Improve Client Engagement',
          description: 'Maintain strong relationships with clients by sending timely, personalized messages.',
        },
        {
          icon: <SettingsSuggestIcon sx={isSmallScreen?{fontSize: 30}:{ fontSize: 40 }} />,
          title: 'Enhance Efficiency',
          description: 'Streamline your workflow by automating routine tasks and focusing on high-value activities.',
        },
        {
          icon: <AddBusinessIcon sx={isSmallScreen?{fontSize: 30}:{ fontSize: 40 }} />,
          title: 'Drive Better Outcomes',
          description: 'Utilize data-driven insights to optimize your communication strategy and achieve better results.',
        },
        {
          icon: <GroupsIcon sx={isSmallScreen?{fontSize: 30}:{ fontSize: 40 }} />,
          title: 'Expand Your Reach',
          description: 'Connect with your audience at scale while still delivering personalized, meaningful messages.',
        }].map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={fadeInVariants}
          >
            <Box sx={isSmallScreen?{...stylesLocal.benefitBox, my:'20px'}:{ ...stylesLocal.benefitBox, gridColumn: index + 1 }}>
              <Box sx={isSmallScreen?{...stylesLocal.iconSm}:{...stylesLocal.icon}}>
                {icon}
              </Box>
              <H3Typography sx={isSmallScreen?{...stylesLocal.benefitTitle,fontSize: 18, width: '200px',}:{...stylesLocal.benefitTitle}}>
                {title}
              </H3Typography>
              <Body1Typography sx={stylesLocal.bodyText}>
                {description}
              </Body1Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default Benefits;
