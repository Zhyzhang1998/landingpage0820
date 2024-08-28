import * as React from "react";
import Slider from "@mui/material/Slider";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import {
  H2Typography,
  Body1Typography,
  H3Typography,
  Body2Typography,
} from "./Fonts";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Styles";
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
      type: "spring",
      bounce: 0.2,
      duration: 0.8
    }
  }
};

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 9999,
    label: "9999",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function Ourprice() {
  const [sliderValue, setSliderValue] = React.useState(1000);
  const [textFieldValue, setTextFieldValue] = React.useState(sliderValue * 0.25);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setTextFieldValue((newValue * 0.25).toFixed(2));
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      id="Pricing"
      sx={isSmallScreen?{...styles.containerStyleSm, height: '900px'}:{ ...styles.containerStyle, height: '700px' }
    }
    >
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInVariants}
      >
      <Box
      >
        <H2Typography>Our Pricing</H2Typography>
        <Box
          marginTop={5}
          sx={isSmallScreen?{display: 'flex', flexDirection:'column'}:{ display: 'grid', px: 0, gridTemplateColumns: '1fr', position: "relative" }}
        >
          <Box
            sx={
              isSmallScreen?{display: 'flex', flexDirection:'column', marginBottom:'40px'}:
              {
              display: "flex",
              flexDirection: "column",
              gridColumn: "1 / 8",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Body1Typography textAlign={"justify"}
            sx={isSmallScreen?{}:{width:"400px"}}>
              At our service, we understand that flexibility is key. Not sure
              how many messages you'll need to send? No problem! We offer a
              pay-per-message approach, allowing you to plan your marketing
              program with precision. <br />
              <br />
              Unlike subscription-based services, our model lets you pay only
              for what you use, ensuring you get the most value for your
              investment.
            </Body1Typography>
          </Box>
          <Box
            sx={
              isSmallScreen?{
                display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              }
              :{
              display: "flex",
              flexDirection: "column",
              gridColumn: "12/ 8",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <Box
            sx={isSmallScreen?{
              width:"450px"
            }
            :{width:"500px", boxShadow:"10"}}
              
              paddingTop={1}
              paddingBottom={2}
              borderRadius={"20px"}
              color={"white"}
            >
              <H3Typography textAlign="center" marginTop={3}>
                Cost Calculation
              </H3Typography>
              <Body1Typography 
              sx={isSmallScreen?{marginLeft:'0px', marginTop:"40px"}:{marginLeft:'40px', marginTop:"40px"}}>
                Number of messages:
              </Body1Typography>
              <Box 
              sx={isSmallScreen?{width:"340px", paddingTop:"40px",marginLeft:'0px'}:{width:"410px", paddingTop:"40px",marginLeft:'40px'}}>
                <Slider
                  aria-label="Always visible"
                  value={sliderValue}
                  min={1}
                  max={9999}
                  getAriaValueText={valuetext}
                  step={1}
                  marks={marks}
                  valueLabelDisplay="on"
                  onChange={handleSliderChange}
                />
                <Body1Typography 
                sx={{marginTop:"20px",marginBottom:"20px"}}>
                  How much it will cost:
                </Body1Typography>
                <TextField
                  id="outlined-required"
                  value={"$" + textFieldValue}
                  readOnly
                  fullWidth
                />
                <Body2Typography marginTop={"10px"}>
                  * May differ from actual costs
                </Body2Typography>
                <Box
                  marginTop={5}
                  marginBottom={5}
                  justifyContent={"center"}
                  sx={{ display: "flex" }}
                >
                  <Button
                    alignItems="center"
                    sx={{ ...styles.regularButton }}
                    variant="getQuote"
                    href="mailto:admin@gabrielai.co"
                    target="_blank"
                    fullWidth
                  >
                    Get Quote
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      </motion.div>
    </Container>
  );
}
export default Ourprice;
