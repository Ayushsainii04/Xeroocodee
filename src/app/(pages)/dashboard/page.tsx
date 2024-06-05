"use client";
import React from "react";
import { Box, Typography, Stack, Switch, IconButton, } from "@mui/material";
import Sidebar from "./sidebar";
import { CircularProgress } from "@mui/joy";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("XeroCodee");
  const [checked, setChecked] = React.useState(false);

  const handleMenuItemClick = (item: string) => {
    setSelectedMenuItem(item);
    // Handle menu item click logic here
  };

  return (
    <Box sx={{ display: 'flex', height: '88vh', zIndex: 0, background: "linear-gradient(45deg, rgba(33, 150, 243, 0.1) 30%, rgba(33, 203, 243, 0.1) 90%)" }}>
      <Sidebar selectedMenuItem={selectedMenuItem} setSelectedMenuItem={handleMenuItemClick} />
      <Box component="main" sx={{ p: 2, mr: 20, height: "500px", width: "1200px", borderRadius: "25px" }}>
        <Box sx={{ background: "linear-gradient(to bottom, #ffffff, #f1f7ff)", borderRadius: "25px", paddingX: "40px", paddingY: "10px", position: "relative" }}>
          <Typography variant="h1" color="#231F20" fontFamily="nunito" fontWeight="700" fontSize="50px" sx={{ cursor: "default" }} gutterBottom>
            Hi User!
          </Typography>
          <Typography variant="h4" color="#000000" fontFamily="nunito" fontWeight="500" fontSize="18px" sx={{ cursor: "default" }} gutterBottom>
            Welcome to XeroCodee Ecosystem 😎
          </Typography>
          <Box bgcolor="inherit" position="absolute" right="20px" top="20px" color="black" display="flex">
            <Typography color="#231F20" fontFamily="nunito" fontSize="16px" alignSelf="center" sx={{ cursor: "default" }}>
              Test Mode
            </Typography>
            <Switch checked={checked} onChange={(event) => setChecked(event.target.checked)} sx={{ alignSelf: "center" }} />
            <Typography color="#231F20" fontFamily="nunito" fontSize="16px" alignSelf="center" sx={{ cursor: "default" }}>
              Production Mode
            </Typography>
          </Box>
        </Box>

        {/* Nested Stacks for Steps */}
        <Stack direction="column" spacing={1} sx={{ mt: 0.5 }}>
          <Stack direction="row" spacing={2} alignItems="center">
          <Box>
            
        <Typography
          color="#000000"
          fontFamily="nunito"
          fontSize="16px"
          fontWeight="800"
          sx={{ cursor: "default" }}
        >
          Step 1
        </Typography>
        <Typography
          color="#797979"
          fontFamily="nunito"
          fontSize="10px"
          fontWeight="500"
          sx={{ cursor: "default" }}
        >
          Connect to Cloud
        </Typography>
        <Stack direction="row" mt={1} gap={4}>
        
          <Box
            position="relative"
            height="85px"
            width="178.5px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              AWS
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#FFF5E5",
                border: "1px solid #FFDFA2",
                ml: "40px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/aws.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 35px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="85px"
            position="relative"
            width="178.5px"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              GCP
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#ECF3FE",
                border: "1px solid #4192FF",
                ml: "40px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/gcp.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          
        </Stack>
      </Box> </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
          <Box>
        <Typography
          color="#000000"
          fontFamily="nunito"
          fontSize="14px"
          fontWeight="700"
          sx={{ cursor: "default" }}
        >
          Step 2
        </Typography>
        <Typography
          color="#797979"
          fontFamily="nunito"
          fontSize="10px"
          fontWeight="500"
          sx={{ cursor: "default" }}
        >
          Connect to Source Code
        </Typography>
        <Stack direction="row" mt={1} gap={4}>
          <Box
            height="85px"
            width="178.5px"
            position="relative"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              Github
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#E9E9E9",
                border: "1px solid #C0C0C0",
                ml: "20px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/github.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 70px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="85px"
            width="178.5px"
            position="relative"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              Gitlab
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#FCECEA",
                border: "1px solid #F77556",
                ml: "25px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/gitlab.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="85px"
            width="185px"
            position="relative"
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              Bitbucket
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#E0ECFF",
                border: "1px solid #4192FF",
                ml: "5px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/bitbucket.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box></Stack>
          <Stack direction="row" spacing={2} alignItems="center">
          <Box>
        <Typography
          color="#000000"
          fontFamily="nunito"
          fontSize="14px"
          fontWeight="700"
          sx={{ cursor: "default" }}
        >
          Step 3
        </Typography>
        <Typography
          color="#797979"
          fontFamily="nunito"
          fontSize="10px"
          fontWeight="500"
          sx={{ cursor: "default" }}
        >
          Connect to DataSource
        </Typography>
        <Stack direction="row" mt={1} gap={4}>
          <Box
            height="85px"
            width="190px"
            position="relative"
            
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              MongoDB
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#EDF5ED",
                border: "1px solid #34A853",
                ml: "5px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/mongodb.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="85px"
            width="178.5px"
            position="relative"
            
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              RedisDB
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#FBEAE9",
                border: "1px solid #F77556",
                ml: "5px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/redis.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50px 50px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="85px"
            width="220px"
            position="relative"
            
            bgcolor="#FFFFFF"
            padding={2}
            borderRadius="20px"
            boxShadow="2"
            display="flex"
            sx={{ cursor: "pointer" }}
          >
            <Typography
              fontFamily="nunito"
              fontWeight="700"
              fontSize="20px"
              color="#242331"
              alignSelf="center"
            >
              PostgreSQL
            </Typography>
            <Box
              sx={{
                width: "70px",
                height: "70px",
                bgcolor: "#ECF3FE",
                border: "1px solid #4192FF",
                ml: "8px",
                alignSelf: "center",
                borderRadius: "15px",
                backgroundImage: "url(/images/postgresql.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60px 60px",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box
              position="absolute"
              left="15px"
              bottom="7px"
              display="flex"
              gap="3px"
            >
              <Box
                sx={{
                  bgcolor: "#D12223",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <Box
                sx={{
                  bgcolor: "#34A853",
                  width: "12px",
                  height: "12px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  alignSelf: "center",
                }}
              ></Box>
              <IconButton
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  width: "0.5px",
                  height: "0.5px",
                  color: "black",
                  transform: "rotate(-90deg)",
                  alignSelf: "center",
                }}
              >
                <AutorenewOutlinedIcon sx={{ width: "13px", height: "13px" }} />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Box></Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Dashboard;
