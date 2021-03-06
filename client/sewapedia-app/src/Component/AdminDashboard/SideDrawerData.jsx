import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ReceiptLongTwoToneIcon from "@mui/icons-material/ReceiptLongTwoTone";
import React from "react";

const SideDrawerData = [
  {
    title: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    path: "/dashboard",
  },
  {
    title: "Users",
    icon: <GroupOutlinedIcon />,
    path: "/user",
  },
  {
    title: "Products",
    icon: <Inventory2OutlinedIcon />,
    path: "/products",
  },
  {
    title: "Transactions",
    icon: <ReceiptLongTwoToneIcon />,
    path: "/transactions",
  },
  {
    title: "Categories",
    icon: <CategoryOutlinedIcon />,
    path: "/categories",
  },
];

export default SideDrawerData;
