import { Box, Container, LinearProgress, MenuItem, Paper, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";
import { TextInput } from "../../Component/CustomInput";
import { validationAddProduct } from "../../utils/validation";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from "../../config/firebase";
import CloseIcon from '@mui/icons-material/Close';

export default function EditProduct() {
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
          <FormEdit />
        </Container>
      </Box>
    </Box>
  )
}

function FormEdit() {
  const [errorInput, setErrorInput] = useState(false);
  const [category, setCategory] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [progress, setProgress] = useState(0);
  const [product, setProduct] = useState({});
  const [image, setImage] = useState();
  const { productId } = useParams();
  const navigate = useNavigate();

  async function getCategory() {
    const data = await (await fetch('http://localhost:4000/api/v1/category', {
      credentials: 'include'
    })).json();
    setCategory(data)
  }
  async function getProduct() {
    const data = await (await fetch(`http://localhost:4000/api/v1/product/${productId}`)).json();
    setProduct(data)
    setImageUrl(data.img_url)
  }
  useEffect(() => {
    getCategory()
    getProduct()
  }, [])

  function inputImage(e) {
    if (!e.target.files) {
      return setImage(undefined);
    }
    setImage(e.target.files[0]);
  }
  useEffect(() => {
    if (image) {
      handleUpload()
    }
  }, [image])
  
  function handleUpload() {
    const storageRef = ref(storage, `images/${Date.now()}+${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageUrl(prev => [...prev, downloadUrl]);
        });
      }
    );
  };

  async function deleteImage(idx) {
    try {
      const image = imageUrl[idx];
      const imageRef = ref(storage, image);
      await deleteObject(imageRef);
      setImageUrl(prev => prev.filter((val, id) => (id !== idx)));
    } catch (error) {
      setImageUrl(prev => prev.filter((val, id) => (id !== idx)))
      console.log(error.message)
    }
  }

  return (
    <Formik
      initialValues={{
        name: product.name || '',
        stock: product.stock || '',
        price: product.price || '',
        details: product.details || '',
        category: product.category || '',
      }}
      enableReinitialize
      validationSchema={validationAddProduct}
      onSubmit={async (values) => {
        if (errorInput) return
        const res = await fetch(`http://localhost:4000/api/v1/product/${productId}`, {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify({
            name: values.name,
            category: values.category,
            details: values.details,
            stock: values.stock,
            price: values.price,
            img_url: imageUrl
          }),
          headers: {"Content-Type": "application/json"}
        })
        const data = await res.json()
        if (res.status === 201) {
          navigate('/products')
        }
        if (res.status === 400) console.log(data)
      }}
    >
      {
        formik => (
          <Paper
            component={Form}
            elevation={10}
            sx={{
              width: '400px',
              display: 'flex',
              flexDirection: 'column',
              p:1,
              mt: 1,
              mx: 'auto',
              '& .MuiTextField-root': { my: 1, width: '100%'},
            }}
          > 
            <Box sx={{width: '100%', height: '100px', overflowX: 'auto', overflowY: 'hidden'}}>
              <Box sx={{width: 'auto', display:'flex', height:'100%' }}>
                {
                  imageUrl.map((value, idx) => (
                    <Box 
                      key={idx}
                      sx={{width: '100px', height:'100%', flexShrink: '0', mx:1, position:'relative'}}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: '100px',
                          width: '100px',
                        }}
                        src={value}
                        loading='lazy'
                      />
                      <Button 
                        variant='contained' 
                        size="small" 
                        sx={{
                          position: 'absolute', 
                          right:'0', 
                          p:0, 
                          minWidth:0
                        }}
                        onClick={()=> { deleteImage(idx) }}
                      >
                        <CloseIcon fontSize="small"/>
                      </Button>
                    </Box>
                  ))
                }
                
              </Box>
            </Box>
            <Box sx={{ width: '100%', mt:2 }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <TextInput
              id='img_url'
              name='img_url'
              type='file'
              inputProps={{accept:"image/*"}}
              onChange={inputImage}
              onClick={() => {setErrorInput(false)}}
              {...(errorInput) ? errorInput : null}
            />
            <TextInput 
              id='name'
              name='name'
              label='name'
            />
            <TextInput 
              id='stock'
              name='stock'
              label='stock'
              type='number'
            />
            <TextInput 
              id='price'
              name='price'
              label='price'
              type='number'
            />
            <TextInput
              id="category"
              name="category"
              select
              label="category"
              helperText="select category"
            >
              {category.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextInput>
            <textarea
              id='details'
              name='details'
              placeholder="details"
              rows={15}
              {...formik.getFieldProps('details')}
            />
            {
              formik.touched.details && formik.errors.details 
              ? <Typography variant="p" sx={{color: 'red'}}>
                  {formik.errors.details}
                </Typography>
              : null
            }
            
            <Button 
              sx={{mt:1}} 
              type="submit" 
              color="info" 
              variant="contained"
              onClick={() => {
                if (!imageUrl.length) return setErrorInput({
                  error: true,
                  helperText: 'wajib upload image'
                })
              }}      
            >
              EDIT PRODUCT
            </Button>
          </Paper>

        )
      }
    </Formik>
  )
}