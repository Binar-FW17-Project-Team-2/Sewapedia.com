import { Container, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";

function UserEdit() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      img_url: "",
    },
    onSubmit: async (values) => {
      const { response } = await fetch("http://localhost:4000/api/v1/user/edit/:id", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        credentials: 'include',
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          img_url: values.img_url
        }),
      });
      const data = await response.json();
      if (data.status === 200) {
        navigate("/user")
      }
    }
  })


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
        <Container sx={{ mt: 4, mb: 4 }}>
          <Typography component="h1" variant="h3">Edit User {id} </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit}>
            <Grid Container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange} />
                <TextField name="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange} />
                <TextField name="img_url"
                  required
                  fullWidth
                  id="img_url"
                  label="Image Url"
                  value={formik.values.img_url}
                  onChange={formik.handleChange} />
                <Button type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2}}>
                    Submit
                </Button>

              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default UserEdit;
