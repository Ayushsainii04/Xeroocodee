import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { useState } from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PolylineOutlinedIcon from "@mui/icons-material/PolylineOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SchemaOutlinedIcon from "@mui/icons-material/SchemaOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

interface SidebarProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (item: string) => void;
}

const Sidebar = ({ selectedMenuItem, setSelectedMenuItem }: SidebarProps) => {
  const menuItems = [
    { text: "XeroCodee", icon: <GridViewOutlinedIcon /> },
    { text: "Builder Center", icon: <LayersOutlinedIcon /> },
    { text: "Service Board", icon: <GrainOutlinedIcon /> },
    { text: "Clusters", icon: <PolylineOutlinedIcon /> },
    { text: "Databases", icon: <StorageOutlinedIcon /> },
    { text: "Environment", icon: <Inventory2OutlinedIcon /> },
    { text: "Workflow", icon: <SchemaOutlinedIcon /> },
    { text: "Monitoring", icon: <QueryStatsOutlinedIcon /> },
    { text: "Security", icon: <GppGoodOutlinedIcon /> },
    { text: "Web Hooks", icon: <WebhookOutlinedIcon /> },
    { text: "Log Error", icon: <ErrorOutlineOutlinedIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 300,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: "border-box",
            ml: "20px",
            backgroundColor: "inherit",
            top: `30px`,
            borderRight: "none",
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton 
            key={index}
            selected={selectedMenuItem === item.text}
            
            sx={{
                fontFamily: "nunito",
                position: "relative",
                bgcolor: selectedMenuItem === item.text ? "white" : "inherit",
                borderRadius: selectedMenuItem === item.text ? "20px" : "0",
                color: selectedMenuItem === item.text ? "#0C5BC6" : "inherit",
                "& .MuiListItemIcon-root": {
                  color: selectedMenuItem === item.text ? "#0C5BC6" : "inherit",
                },
                "& .MuiTypography-root": {
                  fontWeight: selectedMenuItem === item.text ? "bold" : "normal",
                },
                boxShadow: selectedMenuItem === item.text ? "5" : "0",
                "&:hover": {
                  bgcolor: selectedMenuItem === item.text ? "white" : "inherit",
                },

              }}
              onClick={() => setSelectedMenuItem(item.text)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
