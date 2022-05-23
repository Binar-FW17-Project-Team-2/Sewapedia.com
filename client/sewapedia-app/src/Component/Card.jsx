import { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";
import { useLastSeen } from '../contexts/LastSeenContext';
import { useToast } from '../contexts/ToastContext'

export default function Card({product, sx}) {
  const [open, setOpen] = useState(false);
  const { lastSeen, setLastSeen } = useLastSeen();
  const navigate = useNavigate();

  function addLastSeen() {
    const now = new Date()
    const ms = now.getTime()
    now.setDate(now.getDate() + 1)
    now.setHours(0, 0, 0, 0)
    const expiry = now.getTime()
    const payload = {
      id: product.id,
      img: product.img_url[0],
      name: product.name,
      price: product.price
    }
    const equality = lastSeen?.value.filter((v) => {
      return v.id !== payload.id
    })
    const value = lastSeen?.expiry > ms
      ? [payload, ...equality]
      : [payload]
    localStorage.setItem('lastSeen', JSON.stringify({ value, expiry }))
    setLastSeen({ value, expiry })
    navigate(`/product/${product.id}`)
  }

  return (
    <Box
      component='li'
      sx={{
        boxSizing: 'border-box',
        display: 'inline-block',
        ...sx,
        verticalAlign: 'top',
        paddingRight: '10px',
        paddingBottom: '20px',
        cursor: 'default'
      }}
    >
      <Box
        onClick={addLastSeen}
        sx={{
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          sx={{
            position: 'relative',
            width: '100%',
            height: 0,
            pt: '100%',
            background: `url(${product.img_url[0]})`,
            backgroundSize: 'cover'
          }}
        > 
          {open? <Action product={product}/> : null}
        </Box>
        <Typography
          component='h1' 
          variant='body1' 
          mt={1} 
          sx={{
            fontWeight: 600,
            color: '#333333',
            whiteSpace: 'pre-wrap'
          }}
        >
          { product.name }
        </Typography>
        <Typography 
          component='h1' 
          fontSize='18px' 
          fontWeight='bold' 
          color='primary'
          pb={2} 
        >
          Rp.{ product.price }
        </Typography>
      </Box>
    </Box>
  )
}

function Action({product}) {
  const { setToast } = useToast()

  async function addToCart(e) {
    e.stopPropagation();
    const res = await fetch(`http://localhost:4000/api/v1/cart`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        productId: product.id,
        lamaSewa: 1,
        qty: 1
      }),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json()
    if (res.status === 200) {
      setToast({
        open: true,
        msg: data.message,
        bgColor: 'success.main'
      })
    } else {
      setToast({
        open: true,
        msg: 'gagal masuk keranjang',
        bgColor: 'error.main'
      })
    } 
  }


  async function addingWishlist(e){
    e.stopPropagation();
    const userId = localStorage.getItem('userId')
    const res = await fetch(`http://localhost:4000/api/v1/wishlist?userId=${userId}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        productId: product.id
      }),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json()
    if (res.status === 200) {
      setToast({
        open: true,
        msg: data.message,
        bgColor: 'success.main'
      })
    } else {
      setToast({
        open: true,
        msg: 'fail to adding wishlist',
        bgColor: 'error.main'
      })
    } 
  }

  

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '50%',
        right: '50%',
        transform: 'translate(50%, 50%)',
        padding: '5px',
        transition: '.5s'
      }}
    >
      <Btn onClick={addingWishlist}>
        <FavoriteBorderOutlinedIcon sx={{color: 'white'}}/>
      </Btn>
      <Btn  onClick={addToCart} >
        <AddShoppingCartIcon sx={{color: 'white'}}/>
      </Btn>
    </Box>
  )
}

const Btn = styled(Box)(({theme}) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  marginLeft: '5px',
  borderRadius: '50%',
  backgroundColor: `${theme.palette.primary.main}`,
  cursor: 'pointer'
}))