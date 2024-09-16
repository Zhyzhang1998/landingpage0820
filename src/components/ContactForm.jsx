import * as React from "react";
import { useState } from "react";
import { H2Typography, H4Typography, H3Typography } from "./Fonts";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Styles";
import { Container } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.1841495607": "", // First Name
    "entry.2000399062": "", // Last Name
    "entry.1172701207": "", // Email
    "entry.1693962392": "", // Phone Number
    "entry.580459612": "", // What else you want to share?
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

       // Updated form URL
       let url = `https://docs.google.com/forms/u/0/d/1u9h-JBmsnRWOK6A0sn3qZ-GqLz3KLo4uxDS7WYy9KZI/formResponse?entry.1841495607=${formData["entry.1841495607"]}&entry.2000399062=${formData["entry.2000399062"]}&entry.1172701207=${formData["entry.1172701207"]}&entry.1693962392=${formData["entry.1693962392"]}&entry.580459612=${formData["entry.580459612"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      id="Contact"
      sx={isSmallScreen?{marginLeft:"40px"}:{}}

    >
      <Box>
      
        <H2Typography>Contact Us</H2Typography>
        {submit ? (
          <Box
          sx={isSmallScreen?{
            marginBottom:"80px",
            display:"flex",
            justifyContent:"center",
            width:"320px"
          }:{
            ...styles.formSetting,
            px: 0,
            gridTemplateRows: "200px",
            position: "relative",
            marginTop:"40px",
          borderRadius:"20px",
          boxShadow:"10",
          marginLeft:"200px",
          marginRight:"200px",
          marginBottom:"60px"
          }}
        >
        <Box
        
            marginTop={"80px"}
            sx={isSmallScreen?{}:{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 12",
              position: "relative",
              gridRow: "1",
              marginLeft:"25px"
            }}
          >
        <div className="afterForm">
        <H4Typography>Thanks, will get back to you soon!</H4Typography></div>
        </Box>
        </Box>
          
        ) : (
        <Box
          
          sx={isSmallScreen?{
            marginBottom:"70px"
          }:{
            ...styles.formSetting,
            px: 0,
            gridTemplateRows: "780px",
            position: "relative",
            marginTop:"40px",
          borderRadius:"20px",
          boxShadow:"10",
          marginLeft:"200px",
          marginRight:"200px",
          marginBottom:"80px"
          }}
        >
          <Box
            marginTop={"30px"}
            sx={isSmallScreen?{width:"320px"}:{
              display: "flex",
              flexDirection: "column",
              gridColumn: "2 / 12",
              position: "relative",
              gridRow: "1",
            }}
          >
            
              <form onSubmit={handleSubmit} target="_self">
                <Box marginBottom={"30px"} marginTop={"20px"}>
                <H4Typography
                marginBottom={'10px'}
                >First Name:</H4Typography>
                  <TextField
                    required
                    name="entry.1841495607"
                    onChange={handleInputData("entry.1841495607")}
                    value={formData["entry.1841495607"]}
                    variant="outlined"
                    fullWidth
                    marginTop="20px"
                    size="small"
                  />
                </Box>
                <Box marginBottom={"30px"}>
                <H4Typography
                marginBottom={'10px'}
                >Last Name:</H4Typography>
                  <TextField
                    required
                    
                    name="entry.2000399062"
                    onChange={handleInputData("entry.2000399062")}
                    value={formData["entry.2000399062"]}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box marginBottom={"30px"}>
                <H4Typography
                marginBottom={'10px'}
                >Email:</H4Typography>
                  <TextField
                    required
                    
                    name="entry.1172701207"
                    onChange={handleInputData("entry.1172701207")}
                    value={formData["entry.1172701207"]}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box marginBottom={"30px"}>
                <H4Typography
                marginBottom={'10px'}
                >Phone Number:</H4Typography>
                  <TextField
                    required
                    name="entry.1693962392"
                    onChange={handleInputData("entry.1693962392")}
                    value={formData["entry.1693962392"]}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box marginBottom={"50px"}>
                <H4Typography
                marginBottom={'10px'}
                >What else you want to share?</H4Typography>
                  <TextField
                    name="entry.580459612"
                    onChange={handleInputData("entry.580459612")}
                    value={formData["entry.580459612"]}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    size="small"
                  />
                </Box>
                <Button
                  type="submit"
                  alignItems="center"
                  fullWidth
                  sx={{ ...styles.regularButton }}
                >
                  Submit
                </Button>
              </form>
            
          </Box>
        </Box>)}
      </Box>
    </Container>
  );
}

export default ContactForm;