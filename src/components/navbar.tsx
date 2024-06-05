"use client";
import React, { useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MenuItem } from "@mui/material";
import { UserContext } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { account } from "@/appwrite/config";

const Navbar = () => {
  const userContext = useContext(UserContext);
  const router = useRouter();

  if (!userContext) {
    throw new Error("UserContext must be used within a ContextProvider");
  }

  const { user, setUser } = userContext;

  const handleSignOut = async () => {
    try {
      await account.deleteSessions();
      setUser(null);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
      
    <Toolbar sx={{ justifyContent: "space-between" }}>
  <IconButton  >
    <MenuItem />{" "}
    <img
      src="./images/xerocodee.jpg"
      alt="icon"
      style={{ width: "200px", height: "auto", marginTop: "10px" }}
    />
  </IconButton>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
    <Button
      href="/../page.tsx"
      variant="contained"
      sx={{ backgroundColor: "#1f75fe", color: "white", mr: 1 }}
    >
      Onboarding Page
    </Button>

    {user ? (
      <Button
        onClick={handleSignOut}
        variant="contained"
        sx={{ backgroundColor: "#1f75fe", color: "white", mr: 1 }}
      >
        Logout
      </Button>
    ) : (
      <Button
        href="/login"
        variant="contained"
        sx={{ backgroundColor: "#1f75fe", color: "white", mr: 1 }}
      >
        Login
      </Button>
    )}
  </Box>
</Toolbar>
  );
};

export default Navbar;
