"use client"
import React from "react";
import { Box, Typography, Button, Container, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Custom theme for the application
const theme = createTheme({
  typography: {
    fontFamily: "nunito, Arial",
    h1: {
      fontWeight: 700,
      fontSize: "50px",
      color: "#231F20",
    },
    body1: {
      fontWeight: 500,
      fontSize: "18px",
      color: "#000000",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: "linear-gradient(45deg, rgba(33, 150, 243, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)",
      }}>
        <Container maxWidth="sm" sx={{
          background: "linear-gradient(to bottom, #ffffff, #f1f7ff)",
          borderRadius: "25px",
          padding: "40px",
          textAlign: 'center',
        }}>
          <Typography variant="h1" gutterBottom>
            Welcome to XeroCodee
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please login to continue
          </Typography>
          
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
