import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { validationForgotPw } from "../../utils/validation";
import { TextInput } from "../../Component/CustomInput";
import { Alert } from "@mui/material";

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


export default function ForgotPassword() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [sendEmail, setSendEmail] = useState(false)

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
              Forgot Password
            </Typography>
            {
              sendEmail 
                ? <Alert 
                    severity="success" 
                    sx={{width: '100%'}}
                    onClose={() => {setSendEmail(false)}}
                  >
                    {sendEmail}
                  </Alert>
                : null
            }
            <Formik
              initialValues={{
                email: ''
              }}
              validationSchema={validationForgotPw}
              onSubmit={async (values) => {
                const res = await fetch(`http://localhost:4000/api/v1/forgotpw`, {
                  method: 'POST',
                  body: JSON.stringify({
                    email: values.email
                  }),
                  headers: {'Content-Type': 'application/json'}
                })
                const data = await res.json();
                if (res.status === 400) {
                  setErrorEmail({error: true, helperText: data[1].message})
                }
                if (res.status === 200) {
                  setSendEmail(data[1].message)
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
                  {...(errorEmail) ? errorEmail : null}
                  onClick={unsetError}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                
                >
                  Forgot Password
                </Button>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Formik>
          </Box>
        </Grid>
      </Grid>
  );
}
