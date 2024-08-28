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
    "entry.2005620554": "", // First Name
    "entry.734046653": "", // Last Name
    "entry.1045781291": "", // Email
    "entry.1166974658": "", // Phone Number
    "entry.839337160": "", // What else you want to share?
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

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScI1trloKv5BZDVn8mEeW6epQfqQ4Pg67RG96rsol69e0BjFQ/formResponse?entry.2005620554=${formData["entry.2005620554"]}&entry.734046653=${formData["entry.734046653"]}&entry.1045781291=${formData["entry.1045781291"]}&entry.1166974658=${formData["entry.1166974658"]}&entry.839337160=${formData["entry.839337160"]}`;

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
                    name="entry.2005620554"
                    onChange={handleInputData("entry.2005620554")}
                    value={formData["entry.2005620554"]}
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
                    
                    name="entry.734046653"
                    onChange={handleInputData("entry.734046653")}
                    value={formData["entry.734046653"]}
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
                    
                    name="entry.1045781291"
                    onChange={handleInputData("entry.1045781291")}
                    value={formData["entry.1045781291"]}
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
                    name="entry.1166974658"
                    onChange={handleInputData("entry.1166974658")}
                    value={formData["entry.1166974658"]}
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
                    name="entry.839337160"
                    onChange={handleInputData("entry.839337160")}
                    value={formData["entry.839337160"]}
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
