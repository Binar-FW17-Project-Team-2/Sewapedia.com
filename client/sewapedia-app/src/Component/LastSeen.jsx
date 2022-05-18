import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLastSeen } from "../contexts/LastSeenContext";

export default function LastSeen() {
  const { lastSeen } = useLastSeen();

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <Typography
        sx={{
          p: '15px',
          borderBottom: '1px solid #e5e7ea'
        }}
      >
        {`Dilihat Hari Ini (${lastSeen?.value.length ?? 0})`}
      </Typography>
      {
        lastSeen 
          ? lastSeen.value.map((value) => <Card product={value} key={value.id}/>)
          : <Typography p='15px'>Tidak Ada</Typography>
      }
    </Box>
  )
}

function Card({ product }) {
  const navigate = useNavigate();
  const { lastSeen, setLastSeen } = useLastSeen();

  function clickProduct() {
    const now = new Date()
    const ms = now.getTime()
    now.setDate(now.getDate() + 1)
    now.setHours(0, 0, 0, 0)
    const expiry = now.getTime()
    const payload = {
      id: product.id,
      img: product.img,
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
    setLastSeen({value, expiry})
    navigate(`/product/${product.id}`)
  }

  return (
    <Box
      onClick={clickProduct}
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        height: '85px',
        p: '10px',
        borderBottom: '1px solid #e5e7ea',
        cursor: 'pointer',
      }}
    >
      <img
        src={product.img}
        alt='daflkl'
        style={{
          float: 'left',
          width: '65px',
          heigth: '65px',
          paddingRight: '5px'
        }}
      />
      <Typography 
        width='calc(100% - 70px)' 
        pt='15px'
        fontSize='13px' 
        lineHeight='14px' 
        whiteSpace='nowrap' 
        overflow='hidden' 
        textOverflow='ellipsis'
      >
        {product.name}
      </Typography>
      <Typography
        color='primary'
        variant='body1'
        fontWeight='bold'

      >
        {product.price}
      </Typography>
    </Box>
  )
}