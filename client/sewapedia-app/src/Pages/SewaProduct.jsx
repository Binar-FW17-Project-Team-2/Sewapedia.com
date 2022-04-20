import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { TextInput } from "../Component/CustomInput";
import { validationSewa } from "../utils/validation";
import NavBar from '../Component/NavBar'
import Footer from "../Component/Footer";

export default function SewaProduct() {
  const {productId} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function getProduct() {
      const res = await fetch(`http://localhost:4000/api/v1/product/${productId}`);
      const data = await res.json()
      setProduct(data)
    }
    getProduct();
  }, [productId])

  return ( 
    <>
      <NavBar/>
      <Container 
        maxWidth='md'
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }} 
      >
        {
          !product?.id
            ? <Typography variant="h6" sx={{textAlign: 'center'}}>Product tidak ditemukan</Typography>
            : <CardDetails product={product} />
        }
      </Container>
      <Footer/>
    </>
  )
}

function CardDetails({product}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={product.img_url[0]}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.details}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              stock: {product.stock}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              harga: Rp.{product.price} /hari
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonSewa setOpen={setOpen} />
        </CardActions>
      </Card>
      <FormDialog open={open} setOpen={setOpen} productId={product.id}/>
    </>
  );
}

function ButtonSewa({setOpen}) {
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate();

  function sewa() {
    if (!userId) return navigate('/login') 
    setOpen(true);
  }

  return(
    <Button size="small" color="primary" onClick={sewa}>
      Sewa
    </Button>
  )
}

function FormDialog({open, setOpen, productId}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sewa</DialogTitle>
        <Formik
          initialValues={{
            lamaSewa: ''
          }}
          validationSchema={validationSewa}
          onSubmit={(values) => {
            handleClose();
            fetch('http://localhost:4000/api/v1/payment', {
              method: 'POST',
              body: JSON.stringify({
                lamaSewa: values.lamaSewa,
                productId,
              }),
              credentials: 'include',
              headers: {'Content-Type': 'application/json'}
            })
          }}
        >
        <Form>
          <DialogContent>
            <DialogContentText>
              silahkan cek email anda setelah click sewa
            </DialogContentText>
            <TextInput
              autoFocus
              margin="dense"
              name='lamaSewa'
              id="lamaSewa"
              label="Sewa berapa hari"
              type="number"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Sewa</Button>
          </DialogActions>

        </Form>

        </Formik>
      </Dialog>
    </div>
  );
}