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

function Footer() {
  return (
    <Box sx={{ ...styles.footer }}>
      <Container
        id="Footer"
        sx={{
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
            sx={{
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
            <box>
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
            </box>
          </Box>
          <Box
            sx={{
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
              <br />
              Phone Number: +1 (907) 227-1800
            </Body1Typography>
          </Box>
        </Box>
        <Body2Typography marginTop={4}>
          © Gabriel AI All Rights Reserved Privacy | Terms and Conditions
        </Body2Typography>
      </Container>
    </Box>
  );
}

export default Footer;
