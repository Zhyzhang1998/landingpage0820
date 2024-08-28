import * as React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import styles from './Styles';
import { H2Typography, Body1Typography, H3Typography, H2TypographySm } from './Fonts'
import { Container, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ryanUrl from '../assets/Ryan.jpg'
import alexUrl from '../assets/Alex.jpg'
import posterchildUrl from '../assets/Posterchild.jpg'
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Ryan Lucas',
    company: 'Regal North Commercial',
    quote: 'Gabriel AI is an exciting new trend in the Real Estate industry.',
    imgSrc: ryanUrl,
    borderColor: '#2E3D92',
    iconColor: '#2E3D92',
  },
  {
    name: 'Taylor Mapes',
    company: 'Posterchild',
    quote: 'Gabriel AI has revolutionized my fan outreach. Excited to continue to partner.',
    imgSrc: posterchildUrl,
    borderColor: '#D1D1D1',
    iconColor: '#D1D1D1',
  },
  {
    name: 'Alex Bayer',
    company: 'Lovewise Kombucha',
    quote: 'Having the ability to project my voice has infused new energy in my Kombucha brand.',
    imgSrc: alexUrl,
    borderColor: '#2E3D92',
    iconColor: '#2E3D92',
  },
];

function Testimonial() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{backgroundColor: '#F8F6F7'}}>
      <Container id='Community' sx={isSmallScreen?{...styles.containerStyleSm}:{...styles.containerStyle}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        {isSmallScreen? <H2TypographySm>Our Community</H2TypographySm>:
          <H2Typography>
            Our Community
          </H2Typography>}
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
        {isSmallScreen? 
        <Carousel
          sx={{marginTop: '40px'}}
          navButtonsProps={{
            style: {
              display: 'none', // Hide Next and Prev buttons
            },
          }}
          indicators={true} // Optionally, keep indicators (dots)
        >
          {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                company={testimonial.company}
                quote={testimonial.quote}
                borderColor={testimonial.borderColor}
                iconColor={testimonial.iconColor}
              />
            ))}
        </Carousel>:
        <Box className='scrollhere' sx={{display:'flex', paddingTop: '40px'}}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                imgSrc={testimonial.imgSrc}
                name={testimonial.name}
                company={testimonial.company}
                quote={testimonial.quote}
                borderColor={testimonial.borderColor}
                iconColor={testimonial.iconColor}
              />
            ))}
        </Box>}
      </Container>
    </Box>
  )
};

export default Testimonial;