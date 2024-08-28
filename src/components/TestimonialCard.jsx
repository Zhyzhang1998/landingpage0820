import React from 'react';
import { Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { H3Typography, Body1Typography, H3TypographySm } from './Fonts';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TestimonialCard = ({name, company, quote, imgSrc, borderColor, iconColor}) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={isSmallScreen?{
      marginRight: '60px', 
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: '220px',
      borderLeft: `solid ${borderColor} 6px`,
      borderTop: 'solid #EDEDEE 3px',
      borderBottom: 'solid #EDEDEE 3px',
      borderRight: 'solid #EDEDEE 3px',
      borderTopRightRadius: '20px'
    }:{
      marginRight: '60px', 
      backgroundColor: '#FFFFFF',
      width: '345px',
      height: '195px',
      borderLeft: `solid ${borderColor} 6px`,
      borderTop: 'solid #EDEDEE 3px',
      borderBottom: 'solid #EDEDEE 3px',
      borderRight: 'solid #EDEDEE 3px',
      borderTopRightRadius: '20px'}}>
      <Box sx={{display: 'grid', gridTemplateColumns: '1fr 4fr 1fr'}}>
        <Box sx={{padding: '15px', gridColumn: 1}}>
          <img
            src={imgSrc}
            alt={name}
            style={{
              width: '60px',
              height: '60px',
              clipPath: 'circle(28px at center)',
          }}/>
        </Box>
        <Box sx={{paddingTop: '12px', gridColumn: 2}}>
          {isSmallScreen?<H3TypographySm sx={{fontSize: 16}}>{name}</H3TypographySm>:
          <H3Typography>
            {name}
          </H3Typography>}
          <Body1Typography>
            {company}
          </Body1Typography>
        </Box>
      <FormatQuoteIcon sx={{gridColumn: 3, fontSize: '60px', color: '#2E3D92'}}/>
    </Box>
    <Body1Typography sx={{px: '20px'}}>
      {quote}
    </Body1Typography>
  </Box>
  )
};
export default TestimonialCard;