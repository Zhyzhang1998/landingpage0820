import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { H2Typography, Body1Typography, H3Typography } from './Fonts';
import f1Url from '../assets/F1.png';
import feature1Url from '../assets/feature1.png';
import feature2Url from '../assets/feature2.png';
import feature3Url from '../assets/feature3.png';
import feature4Url from '../assets/feature4.png';
import feature5Url from '../assets/feature5.png';
import LockIcon from '@mui/icons-material/Lock';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';
import PersonIcon from '@mui/icons-material/Person';
import { motion } from 'framer-motion';
import styles from './Styles';

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

function Features() {
  const stylesLocal = {
    iconBox: {
      height: '150px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    },
    featureBox: {
      display: 'flex', flexDirection:'column',
      backgroundColor: '#F8F6F7',
      alignItems: 'center',
      padding: '60px',
      borderRadius: '20px'
    },
    bodyText: {
      textAlign: 'center',
      paddingTop: '8px'
    },
    outreachBox: {
      backgroundColor: '#FFFFFF',
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 4fr',
      border: '2px solid #B8B8B8',
      borderRadius: '5px',
      justifyContent: 'center',
      alignItems: 'center',
      my:'5px'
    },
    iconPerson: {
      backgroundColor: "#D9D9D9",
      borderRadius: '15px',
      height: '20px',
      width: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5px'
    }
  };

  return (
    <Container id='Features' sx={styles.containerStyle}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInVariants}
      >
        <H2Typography>
          What can Gabriel AI do? 
        </H2Typography>
        <Body1Typography sx={{paddingTop: '15px'}}>
          Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences. This ensures your messages resonate with each recipient, enhancing engagement and effectiveness.
        </Body1Typography>
      </motion.div>

      <Box sx={{gridTemplateRows: '1fr 1fr 1fr', paddingTop: '60px'}}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInVariants}
        >
          <Box sx={{...styles.gridSetting, gridRow: 1, px:0}}>
            <Box sx={{...stylesLocal.featureBox, backgroundImage: `url(${feature1Url})`, backgroundSize:'100% 100%', gridColumn:'1 / 8'}}>
              <Box sx={{...stylesLocal.iconBox}}>
                <img
                  src={f1Url}
                  alt='Personalized Messages'
                />
              </Box>
              <H3Typography sx={{paddingTop: '20px'}}>
                Personalized Messages
              </H3Typography>
              <Body1Typography sx={stylesLocal.bodyText}>
                Send tailored voicemails and SMS messages to individuals based on their unique preferences and needs.
              </Body1Typography>
            </Box>
            <Box sx={{...stylesLocal.featureBox, gridColumn:'8 / 13', backgroundImage: `url(${feature2Url})`, backgroundSize:'100% 100%'}}>
              <Box sx={stylesLocal.iconBox}>
                <LockIcon sx={{fontSize: '80px'}}/>
              </Box>
              <H3Typography sx={{paddingTop: '20px'}}>
                Secure and Compliant
              </H3Typography>
              <Body1Typography sx={stylesLocal.bodyText}>
                Rest assured that your data and communications are handled securely and in compliance with industry standards.
              </Body1Typography>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInVariants}
        >
          <Box sx={{...styles.gridSetting, gridRow: 2, px:0, py: '15px'}}>
            <Box sx={{gridColumn:'1 / 6', ...stylesLocal.featureBox, backgroundImage: `url(${feature3Url})`, backgroundSize:'100% 100%'}}>
              <Box sx={stylesLocal.iconBox}>
                <ExtensionIcon sx={{fontSize: '80px'}}/>
              </Box>
              <H3Typography sx={{paddingTop: '20px'}}>
                Flexible Integration
              </H3Typography>
              <Body1Typography sx={stylesLocal.bodyText}>
                Easily integrate Gabriel AI with your existing systems and tools, creating a seamless experience for your team.
              </Body1Typography>
            </Box>
            <Box sx={{...stylesLocal.featureBox, gridColumn:'6 / 13', backgroundImage: `url(${feature4Url})`, backgroundSize:'100% 100%'}}>
              <Box sx={{...stylesLocal.iconBox, display:'flex'}}>
                <SettingsIcon sx={{fontSize: '90px', marginRight: '50px'}}/>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <Box sx={stylesLocal.outreachBox}>
                    <Box sx={stylesLocal.iconPerson}>
                      <PersonIcon sx={{fontSize: '15px'}}/>
                    </Box>
                    <Body1Typography>
                      Olivia Harris
                    </Body1Typography>
                    <Body1Typography>
                      (310) 555-XXXX
                    </Body1Typography>
                  </Box>
                  <Box sx={stylesLocal.outreachBox}>
                    <Box sx={stylesLocal.iconPerson}>
                      <PersonIcon sx={{fontSize: '15px'}}/>
                    </Box>
                    <Body1Typography>
                      Sophia Davis
                    </Body1Typography>
                    <Body1Typography>
                      (415) 555-XXXX
                    </Body1Typography>
                  </Box>
                  <Box sx={stylesLocal.outreachBox}>
                    <Box sx={stylesLocal.iconPerson}>
                      <PersonIcon sx={{fontSize: '15px'}}/>
                    </Box>
                    <Body1Typography>
                      Mia Brown
                    </Body1Typography>
                    <Body1Typography>
                      (617) 555-XXXX
                    </Body1Typography>
                  </Box>
                </Box>
              </Box>
              <H3Typography sx={{paddingTop: '20px'}}>
                Automated Outreach
              </H3Typography>
              <Body1Typography sx={stylesLocal.bodyText}>
                Save time and effort by automating routine communication tasks, such as appointment reminders, follow-ups, and event invitations.
              </Body1Typography>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInVariants}
        >
          <Box sx={{...styles.gridSetting, gridRow: 3, px:0}}>
            <Box sx={{...stylesLocal.featureBox, backgroundImage: `url(${feature5Url})`, backgroundSize:'100% 100%', gridColumn:'1 / 13', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <Box sx={{gridColumn: 1, width: '80%'}}>
                <H3Typography sx={{paddingTop: '20px', textAlign: 'center'}}>
                  Voice Cloning Natural-Sounding Voicemails
                </H3Typography>
                <Body1Typography sx={stylesLocal.bodyText}>
                  Utilize Gabriel AI's advanced voice customization technology to create natural-sounding voicemails that match your brand's tone and style.
                </Body1Typography>
              </Box>
              <Box sx={{...stylesLocal.iconBox, height: '274px', gridColumn: 2}}>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  )
};

export default Features;
