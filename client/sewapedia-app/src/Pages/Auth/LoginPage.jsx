import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as LinkMaterial } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { validationLogin } from '../../utils/validation';
import { TextInput } from '../../Component/CustomInput';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/">
        Sewapedia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginPage() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPw, setErrorPw] = useState(false);
  const navigate = useNavigate();

  function unsetError() {
    setErrorEmail(false)
    setErrorPw(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
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
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              fontWeight: "bold",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              style={{ marginBottom: "40px" }}
            >
              Login to your account
            </Typography>
            <Formik
              initialValues={{
              email: '',
              password: ''
              }}
              validationSchema={validationLogin}
              onSubmit={async (values) => {
                const res = await fetch(`http://localhost:4000/api/v1/login`, {
                  method: 'POST',
                  body: JSON.stringify({
                    email: values.email,
                    password: values.password
                  }),
                  credentials: 'include',
                  headers: {'Content-Type': 'application/json'}
                })
                const data = await res.json()
                if (res.status === 200) {
                  localStorage.setItem('user', JSON.stringify(data[1]))
                  localStorage.setItem("access_token", data[1].token);
                  localStorage.setItem("role", data[1].role);
                  localStorage.setItem("userId", data[1].id);
                  data[1].role === 'admin' ? navigate('/dashboard') : navigate('/')
                } else if (res.status === 400) {
                  ('password' in data[1])
                    ? setErrorPw({error:true, helperText: data[1].password})
                    : setErrorEmail({error: true, helperText: data[1].email})
                }
              }}
            >
              <Box
                component={Form}
                sx={{ mt: 1 }}
              >
                <TextInput
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                  {...(errorPw) ? errorPw : null}
                  onClick={unsetError}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>

                <Grid container>
                  <Grid item xs>
                    <LinkMaterial component={Link} to="/forgot-password" variant="body2">
                        Forgot password?
                    </LinkMaterial>
                  </Grid>
                  <Grid item>
                    <LinkMaterial component={Link} to="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </LinkMaterial>
                  </Grid>
                </Grid>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  startIcon={<img src="/images/ic_google.svg" alt="google"/>}
                >
                  Login With Google
                </Button>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
