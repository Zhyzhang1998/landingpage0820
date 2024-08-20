import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './Styles';
import { H2Typography, Body1Typography, H3Typography } from './Fonts'
import { Container, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ryanUrl from '../assets/Ryan.jpg'
import alexUrl from '../assets/Alex.jpg'
import posterchildUrl from '../assets/Posterchild.jpg'


function Testimonial() {
  return (
    <Box sx={{backgroundColor: '#F8F6F7'}}>
      <Container id='Community' sx={styles.containerStyle}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <H2Typography>
            Our Community
          </H2Typography>
          {/* <Box sx={{display: 'flex', alignItems: 'center'}}>
            <H3Typography>See More Reviews</H3Typography>
            <IconButton
            sx={{
              color: '#ffffff',
              backgroundColor: '#333333',
              border: 'solid #333333 2px',
              '&:hover': {
                color:'#333333', backgroundColor: '#ffffff', border: 'solid #747474 2px'
              },
              marginLeft: '14px'
            }}>
                <ArrowForwardIcon sx={{fontSize:'26px'}}/>
            </IconButton>
          </Box> */}
        </Box>
        <Body1Typography sx={{paddingTop: '15px'}}>
          Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences. This ensures your messages resonate with each recipient, enhancing engagement and effectiveness.
        </Body1Typography>
        <Box sx={{display:'flex', paddingTop: '40px'}}>
          <Box sx={{marginRight: '60px', backgroundColor: '#FFFFFF', width: '345px', height: '195px', borderLeft: 'solid #2E3D92 6px', borderTop: 'solid #EDEDEE 3px', borderBottom: 'solid #EDEDEE 3px', borderRight: 'solid #EDEDEE 3px',borderTopRightRadius: '20px'}}>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr 1fr'}}>
              <Box sx={{padding: '15px', gridColumn: 1}}>
                <img
                  src={ryanUrl}
                  alt='Ryan Lucas'
                  style={{
                    width: '60px',
                    height: '60px',
                    clipPath: 'circle(28px at center)',
                }}/>
              </Box>
              <Box sx={{paddingTop: '12px', gridColumn: 2}}>
                <H3Typography>
                  Ryan Lucas
                </H3Typography>
                <Body1Typography>
                  Regal North Commercial
                </Body1Typography>
              </Box>
              <FormatQuoteIcon sx={{gridColumn: 3, fontSize: '60px', color: '#2E3D92'}}/>
            </Box>
            <Body1Typography sx={{px: '20px'}}>
              Gabriel AI is an exciting new trend in the Real Estate industry.
            </Body1Typography>
          </Box>
          <Box sx={{marginRight: '60px', backgroundColor: '#FFFFFF', width: '345px', height: '195px', borderLeft: 'solid #D1D1D1 6px', borderTop: 'solid #EDEDEE 3px', borderBottom: 'solid #EDEDEE 3px', borderRight: 'solid #EDEDEE 3px',borderTopRightRadius: '20px'}}>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr 1fr'}}>
              <Box sx={{padding: '15px', gridColumn: 1}}>
                <img
                  src={posterchildUrl}
                  alt='Taylor Mapes'
                  style={{
                    width: '60px',
                    height: '60px',
                    clipPath: 'circle(28px at center)',
                }}/>
              </Box>
              <Box sx={{paddingTop: '12px', gridColumn: 2}}>
                <H3Typography>
                  Taylor Mapes
                </H3Typography>
                <Body1Typography>
                  Posterchild
                </Body1Typography>
              </Box>
              <FormatQuoteIcon sx={{gridColumn: 3, fontSize: '60px', color: '#D1D1D1'}}/>
            </Box>
            <Body1Typography sx={{px: '20px'}}>
            Gabriel AI has revolutionized my fan outreach. It's been amazing to witness their reactions to the tech. Excited to continue to partner.
            </Body1Typography>
          </Box>
          <Box sx={{backgroundColor: '#FFFFFF', width: '345px', height: '195px', borderLeft: 'solid #2E3D92 6px', borderTop: 'solid #EDEDEE 3px', borderBottom: 'solid #EDEDEE 3px', borderRight: 'solid #EDEDEE 3px',borderTopRightRadius: '20px'}}>
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr 1fr'}}>
              <Box sx={{padding: '15px', gridColumn: 1}}>
                <img
                  src={alexUrl}
                  alt='Alex Bayer'
                  style={{
                    width: '60px',
                    height: '60px',
                    clipPath: 'circle(28px at center)',
                }}/>
              </Box>
              <Box sx={{paddingTop: '12px', gridColumn: 2}}>
                <H3Typography>
                  Alex Bayer
                </H3Typography>
                <Body1Typography>
                  Lovewise Kombucha
                </Body1Typography>
              </Box>
              <FormatQuoteIcon sx={{gridColumn: 3, fontSize: '60px', color: '#2E3D92'}}/>
            </Box>
            <Body1Typography sx={{px: '20px'}}>
            Having the ability to project my voice and presence has infused new energy in the growth of my Kombucha brand. It's magical.
            </Body1Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};

export default Testimonial;