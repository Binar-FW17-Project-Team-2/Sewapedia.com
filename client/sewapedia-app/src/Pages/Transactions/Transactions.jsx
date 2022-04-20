import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";
import {  
  Button, 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Divider, 
  IconButton, 
  Paper, 
} from "@mui/material";
import { Form, Formik } from "formik";
import { TextInput } from "../../Component/CustomInput";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";

function Transactions() {
  const [receipt, setReceipt] = useState(null);
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardLayout />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {/* insert transactions here */}
          <SearchReceipt setReceipt={setReceipt}/>
          {
            !receipt
              ? null
              : (!receipt.id)
                ? <Typography variant="h5" sx={{textAlign: 'center', mt:5}}>Receipt tidak ditemukan</Typography>
                : <CardReceipt receipt={receipt}/>
          }
        </Container>
      </Box>
    </Box>
  );
}

export default Transactions;


// export default function Transaction() {
//   const [receipt, setReceipt] = useState(null);
//   return (
//     <Box>
//       <SearchReceipt setReceipt={setReceipt}/>
//       {
//         !receipt
//           ? null
//           : (!receipt.id)
//             ? <Typography variant="h5" sx={{textAlign: 'center', mt:5}}>Receipt tidak ditemukan</Typography>
//             : <CardReceipt receipt={receipt}/>
//       }
      
//     </Box>
//   )
// }

function SearchReceipt({setReceipt}) {
  return (
    <Formik
      initialValues={{
        receiptId: '',
      }}
      onSubmit={async (values) => {
        const res = await fetch(`http://localhost:4000/api/v1/payment/${values.receiptId}`, {
          credentials: 'include',
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        if (data[0]) setReceipt(data[1])
        if (!data[0]) setReceipt({})
      }}
    >
      <Paper
        component={Form}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mx:'auto' }}
      >
        <TextInput
          sx={{ 
            ml: 1, 
            flex: 1,
            border: 'none'
          }}
          required
          placeholder="Search Receipt"
          name='receiptId'
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchOutlinedIcon />
        </IconButton>
      </Paper>
    </Formik>
  )
}

function CardReceipt({receipt}) {
  return (
    <Card sx={{ maxWidth: 345, mx: 'auto', mt:2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={receipt.Product.img_url[0]}
            alt={receipt.Product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="body2">
              product: {receipt.Product.name}
            </Typography>
            <Typography gutterBottom variant="body2">
              harga: Rp.{receipt.Product.price} /hari
            </Typography>
            <Typography gutterBottom variant="body2" >
              stock: {receipt.Product.stock}
            </Typography>
            <Typography gutterBottom variant="body2" >
              penyewa: {receipt.User.Biodata.firstName}
            </Typography>
            <Typography gutterBottom variant="body2" >
              lama sewa: {receipt.lamaSewa} hari
            </Typography>
            <Typography gutterBottom variant="body2" >
              total harga: Rp.{receipt.totalPrice}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {
            (receipt.status === 'success')
              ? <Typography variant="p">sudah dibayar</Typography>
              : <BtnConfirm receipt={receipt}/>
          }
          
        </CardActions>
      </Card>
  )
}

function BtnConfirm({receipt}) {
  const [dialog, setDialog] = useState(false)
  function confirm() {
    setDialog(true);
  }

  return (
    <>
      <Button size="small" color="primary" onClick={confirm}>
        Confirm
      </Button>
      <ConfirmPayment dialog={dialog} setDialog={setDialog} receipt={receipt}/>
    </>
  )
}

function ConfirmPayment({dialog, setDialog, receipt}) {
  const handleClose = () => {
    setDialog(false);
  };
 
  const handleConfirm = async () => {
    setDialog(false);
    const res = await fetch(`http://localhost:4000/api/v1/payment/${receipt.id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'}
    })
    const data = await res.json();
    if (res.status === 200) {
      console.log(data[1].message)
    }
  }
  return (
    <div>
      <Dialog open={dialog} onClose={handleClose}>
        <DialogTitle>Confirm</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Yakin tidak kepencet?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogActions>
      </Dialog>
    </div>
  )
  
}
