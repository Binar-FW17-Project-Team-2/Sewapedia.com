import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Tab,
  Tabs,
  styled,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Link2 from '@mui/material/Link';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[400]),
  backgroundColor: grey[500],
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

export default function PrimarySearchAppBar() {
  const [removeCookie] = useCookies(["token"]);
  const [user, setUser] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  React.useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setUser(true);
    }
  }, [user]);

  const [tabValue, setTabValue] = React.useState("product");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    // clear cookie
    // await removeCookie("token", { path: "/" });
    // clear token, userId, and role from local storage
    await localStorage.clear();
    // setUser to false
    await setUser(false);
    // remove cookie 
    await fetch(`http://localhost:4000/api/v1/logout`, {
      credentials: 'include'
    })
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* If you want to implement this as getting product by categories just map the categories first then set the value as the catogeries name */}
      <MenuItem value="1" onClick={handleMenuClose}>
        1
      </MenuItem>
      <MenuItem value="2" onClick={handleMenuClose}>
        2
      </MenuItem>
      <MenuItem value="3" onClick={handleMenuClose}>
        3
      </MenuItem>
      <MenuItem value="4" onClick={handleMenuClose} href="/Category">
        4
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem></MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#7CD1F5", color: "#667080" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: "none", sm: "block" } }}
            to="/"
            color="grey"
            
          >
          <Link2 href="/" underline="none" color="#424242">
           
              LOGO
           </Link2>
          </Typography>

          <Tabs sx={{ marginLeft: "150px", color: "black" }} value={tabValue}>
            <Tab label="Products" href="/product" />
            <Button
              mt="-100px"
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              
            >
              Category
            </Button>
            <Tab label="Contact & About Us" href="/about" />
          </Tabs>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" aria-label color="inherit">
              <Badge color="error">
                {/* icon */}
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            {/* button login&register */}
            {user ? (
              <ColorButton onClick={() => handleLogout()}>Logout</ColorButton>
            ) : (
              <>
                <Link to="/signin">
                  <ColorButton variant="contained">Login</ColorButton>
                </Link>
                <Link to="/signup">
                  <ColorButton variant="contained">Register</ColorButton>
                </Link>
              </>
            )}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
