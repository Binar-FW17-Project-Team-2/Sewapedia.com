import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ReceiptLongTwoToneIcon from '@mui/icons-material/ReceiptLongTwoTone';
import React from "react";

export const SideDrawerData = [
    {
        title: 'Dashboard',
        icon: <DashboardOutlinedIcon />,
        link: '/dashboard'
    },
    {
        title: 'Users',
        icon: <GroupOutlinedIcon />,
        link: '/users'
    },
    {
        title: 'Products',
        icon: <Inventory2OutlinedIcon />,
        link: '/products'
    },
    {
        title: 'Transactions',
        icon: <ReceiptLongTwoToneIcon />,
        link: '/transactions'
    },
    {
        title: 'Categories',
        icon: <CategoryOutlinedIcon />,
        link: '/categories'
    },
]