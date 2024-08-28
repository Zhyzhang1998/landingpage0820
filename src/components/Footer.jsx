import * as React from "react";
import styles from "./Styles";
import {
  H2Typography,
  Body1Typography,
  H3Typography,
  Body2Typography,
} from "./Fonts";
import { Box, Icon } from "@mui/material";
import Divider from "@mui/joy/Divider";
import logoUrl from "../assets/GAlogo.png";
import { Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Footer() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ ...styles.footer }}>
      <Container
        id="Footer"
        sx={isSmallScreen?{}:{
          paddingLeft: "120px",
          paddingRight: "120px",
          paddingTop: "62px",
          paddingBottom: "20px",
        }}
      >
        <Box sx={{ ...styles.gridSetting, px: 0, gridTemplateRows: "1fr 1fr" }}>
          <Box
            className="logo"
            sx={{ display: "flex", flexDirection: "column", gridColumn: "1" }}
          >
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                width: "100%",
                maxWidth: "105px",
              }}
            />
          </Box>
          <Box
            marginTop={1.2}
            sx={isSmallScreen?{
              display: "flex",
              flexDirection: "column",
              gridColumn: "2 / 12",
            }:{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 12",
            }}
          >
            <H3Typography>
              We'd love to hear from you! Contact us for sales, support,
              partnerships, API integration, or any other questions.
            </H3Typography>
          </Box>
          <Box
            minWidth={"165px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "1 ",
              gridRow: "2",
            }}
          >
            <Box>
              <a
                href="https://www.linkedin.com/company/gabriel-ai1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: "40px",
                    color: "white",
                    marginRight: "5px",
                    marginLeft: "8px",
                  }}
                />
              </a>
            </Box>
          </Box>
          <Box
            sx={isSmallScreen?{
              display: "flex",
              flexDirection: "column",
              gridColumn: "2 / 8",
              gridRow: "2"
            }:{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 8",
              gridRow: "2",
            }}
          >
            <Body1Typography>
              Email:{" "}
              <a
                href="mailto:admin@gabrielai.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                admin@gabrielai.co
              </a>{" "}
            </Body1Typography>
          </Box>
        </Box>
        <Body2Typography 
        sx={isSmallScreen?{paddingBottom:"20px"}:{marginTop:"20px"}}
        >
          © Gabriel AI All Rights Reserved Privacy | Terms and Conditions
        </Body2Typography>
      </Container>
    </Box>
  );
}

export default Footer;
