import { 
  Typography, 
  Box, 
  AppBar, 
  Stack, 
  styled, 
  Container, 
  Button, 
  Menu, 
  MenuItem, 
  InputBase, 
  IconButton, 
  Drawer, 
  Divider, 
  ListItemIcon, 
  ListItemButton, 
  ListItemText, 
  List, 
  ListItem, 
  Fade 
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContexts'

export default function Navbar() {
  return (
    <AppBar
      color='transparent'
      sx={{
        position: {
          xs: 'sticky',
          md: 'relative'
        },
        top: 0,
        boxShadow: '0px 3px 10px rgb(0 0 0 / 3%)'
      }}
    >
      <Container
        maxWidth='xl'
        sx={{
          padding: {
            xs:0
          }
        }}
      >
        <NavTop/>
        <Logo/>
        <NavBot/>
      </Container>
    </AppBar>
  )
}

function NavTop() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    ['user', 'userId', 'role', 'access_token'].forEach(v => localStorage.removeItem(v))
    await setUser({});
    await fetch(`http://localhost:4000/api/v1/logout`, {
      credentials: 'include'
    })
  };

  return (
    <Box
    sx={{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding:'5px 15px',
      backgroundColor: {
        xs:'#F2F2F2',
        md:'white'
      }
    }}
    >
      <Box
        sx={{
          display:'flex',
          alignItems:'center',
          width:'250px',
          height:'20px',
          borderRadius:'10px',
          backgroundColor: {
            xs:'white',
            md:'#F2F2F2'
          },
          marginLeft: {
            xs:'auto',
            md:0
          }
        }}
      >
        <InputBase
          placeholder='serach product'
          sx={{
            flex:1,
            height:'100%',
            padding:'0 15px'
          }}
        />
        <IconButton type="submit" sx={{ padding: '0 10px 0 0' }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Stack
        position='relative'
        direction='row'
        sx={{
          display: {
            xs:'none',
            md:'flex'
          }
        }}
      >
        {
          user.id
            ? <>
              <TopMenu component={NavLink} to='/profil'>{`Hi, ${user.Biodata.firstName}`}</TopMenu>
              <TopMenu onClick={handleLogout} component='a' sx={{cursor: 'pointer'}}>Logout</TopMenu>
            </>
            : <>
              <TopMenu component={NavLink} to='/signin'>Login</TopMenu>
              <TopMenu component={NavLink} to='/signup'>Register</TopMenu>
            </>
        }
        <TopMenu component={NavLink} to='/about'>About Us</TopMenu>
      </Stack>
    </Box>
  )
}

function Logo() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display:'flex', 
      justifyContent:'center',
      backgroundColor: {
        xs:'primary.main',
        md:'white'
      }
    }}
    >
      <Box
        onClick={() => navigate('/')}
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'end',
          cursor: 'pointer',
        }}
      >
        <SmartToyOutlinedIcon
          sx={{
            fontSize: '56px',
            color:{
              xs:'black',
              md:'primary.main'
            }
          }}
        />
        <Typography 
          variant='h4' 
          component='h1' 
          fontWeight='bold'
          fontFamily={'roboto'}
          sx={{
            color:{
              xs:'black',
              md:'primary.main'
            }
          }}
        >
          SEWA
        </Typography>
        <Typography  
          variant='h4' 
          component='h1' 
          fontWeight='small'
          sx={{
            color:{
              xs:'white',
              md:'black'
            }
          }}
        >
          PEDIA
        </Typography>
      </Box>
    </Box>
  )
}

const stylePaper = createTheme(theme, {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #DDDDDD'
        }
      }
    }
  }
})

function NavBot() {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOpen(e) {
    setOpen(true)
    setAnchorEl(e.currentTarget)
  }

  function handleClose() {
    setOpen(false)
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={stylePaper}>
      <Box
        sx={{
          display:'flex',
          alignItems:'center',
          backgroundColor: 'white'
        }}
      >
        <Stack
          position='relative'
          direction='row'
        >
          <Button 
          onClick={handleOpen}
          sx={{
            color:'black',
          }}
          >
            <MenuIcon fontSize='large'/>
            <BotLeftMenu 
              sx={{
                '&:after': {height:0},
                display:{
                  xs:'none',
                  md:'inline'
                }
              }}
            >
              Category
            </BotLeftMenu>
          </Button>
          <BotLeftMenu component={NavLink} to='/product'>Product</BotLeftMenu>
          <BotLeftMenu component={NavLink} to='/faq'>FAQ</BotLeftMenu>
          {
            user.role === 'admin'
              ? <BotLeftMenu component={NavLink} to='/dashboard'>Dashboard</BotLeftMenu>
              : null
          }
        </Stack>
        <Stack
          position='relative'
          direction='row'
          ml='auto'
          sx={{
            display:{
              xs:'none',
              md:'flex'
            }
          }}
        >
          <BotRightMenu component={NavLink} to='/cart'>
            <ShoppingCartOutlinedIcon fontSize='small' sx={{paddingRight:'5px'}}/> cart
          </BotRightMenu>
          <BotRightMenu component={NavLink} to='/wishlist'>
            <FavoriteBorderOutlinedIcon fontSize='small' sx={{paddingRight:'5px'}}/> wishlist
          </BotRightMenu>
          <BotRightMenu component={NavLink} to='/mypage'>
            <PersonOutlineOutlinedIcon fontSize='small' sx={{paddingRight:'5px'}}/> MyPage
          </BotRightMenu>
        </Stack>

        {/* menu jika category di klik */}
        {/* menu pc */}
        <Box
          component={Menu}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          id="nav-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            boxShadow:'none',
            display: {
              xs: 'none',
              md: 'block'
            }
          }}
        >
          <MenuItem onClick={handleClose}>kendaraan</MenuItem>
          <MenuItem onClick={handleClose}>brick</MenuItem>
          <MenuItem onClick={handleClose}>boneka</MenuItem>
        </Box>
        {/* menu mobile */}
        <Drawer
          anchor='left'
          open={open}
          onClose={handleClose}
          sx={{display: {md:'none'}, border:'none'}}
        >
          <Box
            sx={{
              width:'calc(100vw - 60px)'
            }}
          >
            <MobileMenu/>
          </Box>
        </Drawer>

      </Box>
    </ThemeProvider>
  )
}

function MobileMenu() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    localStorage.clear();
    await setUser({});
    await fetch(`http://localhost:4000/api/v1/logout`, {
      credentials: 'include'
    })
  };

  return (
    <>
      <Box
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main'
      }}
    > 
      {
        user.id
          ? <Box
              sx={{
                width: '40px',
                height: '40px',
                flexShrink: 0,
                mr:'10px',
                borderRadius: '50%',
              }}
            >
              <img src={user.img_url} alt={user.Biodata.firstName} style={{width: '100%'}}/>
            </Box>
          : null
      }
      <Box>
        <Typography
          component='p'
          variant='p'
          sx={{
            color: "rgba(255,255,255,0.8)"
          }}
        >
          {
            user.id
              ? user.Biodata.firstName
              : `Hallo, pelanggan silahkan login :-)`
          }
        </Typography>
      </Box>
      <Button
        {
          ...(user.id)
            ? {onClick: handleLogout}
            : {component: NavLink, to: '/login'}
        }
        sx={{
          padding: '6px 16px',
          borderRadius: '50vh',
          backgroundColor: "rgba(255,255,255,0.8)",
          ml:'auto'
        }}
      >
        {user.id? 'Logout' : 'Login'}
      </Button>
      </Box>

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="PROFIL" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="WISHLIST" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="CART" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Category" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="last seen today" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      </Box>
    </>
  )
}

const TopMenu = styled(Typography)(({theme}) => ({
  position:'relative',
  display:'block',
  color: 'black',
  textDecoration: 'none',
  padding: '10px 10px',
  '&:nth-of-type(n+2):before' : {
    content: '""',
    position: 'absolute',
    top: '35%',
    left: 0,
    width: '1px',
    height: '30%',
    background: '#333'
  },
  '&:hover': {
    color:`${theme.palette.primary.main}`
  }
}));

const BotLeftMenu = styled(TopMenu)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8em',
  },
  fontSize:'1em',
  fontWeight:'600',
  textTransform:'uppercase',
  padding:'10px 15px',
  display:'flex',
  alignItems:'center',
  '&:hover': {color: 'black'},
  '&:after': {
    content:'""',
    position:'absolute',
    bottom:0,
    left:'50%',
    width:0,
    height:'3px',
    transform:'translate(-50%, 0)',
    opacity:0,
    backgroundColor:`${theme.palette.primary.main}`,
    transition: `${theme.transitions.create(['all'], {
      duration:'0.8s',
      easing:'ease',
    })}`
  },
  '&:hover:after': {
    content:'""',
    width:'calc(100% - 20px)',
    opacity:1,
  }
}));

const BotRightMenu = styled(BotLeftMenu)(() => ({
  '&:nth-of-type(n+2):before': {height:0}
})); 
