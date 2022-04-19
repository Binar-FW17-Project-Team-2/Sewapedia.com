import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SideDrawerData from "../AdminDashboard/SideDrawerData";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    {SideDrawerData.map((item, index) => (
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={item.path}
        key={index}
      >
        <ListItemButton>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </Link>
    ))}
  </React.Fragment>
);
