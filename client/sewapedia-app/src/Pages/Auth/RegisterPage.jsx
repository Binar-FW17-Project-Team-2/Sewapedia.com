import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Link as LinkMaterial } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { validationSignup } from '../../utils/validation';
import { TextInput } from '../../Component/CustomInput'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <LinkMaterial color="inherit" href="https://mui.com/">
        Your Website
      </LinkMaterial>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const [errorEmail, setErrorEmail] = useState(false);
  const navigate = useNavigate();

  function unsetError() {
    setErrorEmail(false)
  }
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/vyFA3R96RA4)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Formik
            initialValues={{
              firstName: '',
              email: '',
              password: '',
              lastName: '',
              address: ''
            }}
            validationSchema={validationSignup}
            onSubmit={async (values) => {
              const res = await fetch(`http://localhost:4000/api/v1/signup`, {
                method: 'POST',
                body: JSON.stringify({
                  email: values.email,
                  password: values.password,
                  firstName: values.firstName,
                  lastName: values.lastName,
                  address: values.address
                }),
                credentials: 'include',
                headers: {'Content-Type': 'application/json'}
              })
              const data = await res.json()
              if (res.status === 201) {
                navigate('/signin')
              } else if (res.status === 400) {
                setErrorEmail({error: true, helperText: data.message})
              }
            }}
          >
            <Box
              component={Form}
              sx={{ mt: 1 }}
            > 
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextInput 
                  margin='normal'
                  fullWidth
                  name='firstName'
                  label='First Name'
                  id='firstName'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextInput
                  margin='normal'
                  fullWidth
                  name='lastName'
                  label='Last Name'
                  id='lastName'
                />
              </Grid>
            </Grid>
              <TextInput
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                {...(errorEmail) ? errorEmail : null}
                onClick={unsetError}
              />
              <TextInput
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextInput 
                margin='normal'
                fullWidth
                name='address'
                label='Address'
                id='address'
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item xs>
                  <LinkMaterial component={Link} to='/forgot-password' variant="body2">
                    Forgot password?
                  </LinkMaterial>
                </Grid>
                <Grid item>
                    <LinkMaterial component={Link} to='/signin' variant="body2">
                      {"Already have an account? Sign In!"}
                    </LinkMaterial>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}
