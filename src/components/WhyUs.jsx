import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import {
  H2Typography,
  Body1Typography,
  H3Typography,
  H4Typography,
} from "./Fonts";
import { motion } from 'framer-motion';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#B2C2EB",
    color: "#2C2F2E",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "poppins",
    fontWeight: 500,
    fontSize: 14,
    color: "#333333",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(feature, gabriel, calling, text) {
  return { feature, gabriel, calling, text };
}

const rows = [
  createData(
    "Personalization",
    <Box display="flex" alignItems="center" justifyContent="center">
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "green" }}
      />{" "}
      Highly personalized with dynamic voice
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <HighlightOffIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "red" }}
      />{" "}
      Personalized but expensive
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <HighlightOffIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "red" }}
      />
      Limited
    </Box>
  ),
  createData(
    "Emotional Engagement",
    <Box display="flex" alignItems="center" justifyContent="center">
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "green" }}
      />{" "}
      Capturing attention more effectively
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "green" }}
      />{" "}
      Capturing attention more effectively
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <HighlightOffIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "red" }}
      />
      May be ignored.
    </Box>
  ),
  createData(
    "Response Rate",
    <Box display="flex" alignItems="center" justifyContent="center">
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "green" }}
      />{" "}
      Higher response rates
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "green" }}
      />{" "}
      Higher response rates
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <HighlightOffIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "red" }}
      />
      Unpredictable
    </Box>
  ),
  createData(
    "Efficiency",
    <Box display="flex" alignItems="center" justifyContent="center">
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "green" }}
      />{" "}
      More efficient
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <HighlightOffIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "red" }}
      />
      Time consuming
    </Box>,
    <Box display="flex" alignItems="center" justifyContent="center">
      <CheckCircleOutlineIcon
        sx={{ fontSize: "18px", marginRight: "5px", color: "green" }}
      />
      More efficient
    </Box>
  ),
];

function WhyUs() {
  return (
    <Container
      id="WhyUs"
      sx={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "60px",
        paddingBottom: "64px",
      }}
    >
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={fadeInVariants}
      >
      <Box>
        <H2Typography>Why Gabriel AI ?</H2Typography>
        <Box justifyContent={"center"} sx={{ display: "flex" }}>
          <Table
            sx={{ width: 1100, marginTop: 5, marginBottom: 5 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <H4Typography
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    Feature
                  </H4Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <H4Typography
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    Gabriel personalized message
                  </H4Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <H4Typography
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    Manual calling
                  </H4Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <H4Typography>Text/email</H4Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.feature}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.feature}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.gabriel}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.calling}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.text}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
      </motion.div>
    </Container>
  );
}

export default WhyUs;
