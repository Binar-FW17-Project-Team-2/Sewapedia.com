import * as React from "react";
import { useEffect, useState } from 'react';
import Title from "../Title";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

// Generate Order Data


export default function FormEditCategory() {
  const navigate = useNavigate();
  const { name } = useParams();
  const [category, setCategory] = useState([]);

    function fetchCategoryByName() {
    fetch(`http://localhost:4000/api/v1/category/${name}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
        setCategory(data);
      })
      .catch((err) => console.log(err));
  }
  
  const formik = useFormik({
    initialValues: {
      name: "",
      details: "",
    },
    onSubmit: async (values) => {
      const response = await fetch("http://localhost:4000/api/v1/category", {
        method: "POST",
        credentials: 'include',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          details: values.details,
        }),
      });
      const data = await response.json();
      console.log(data);
      // if u want to implement any toaster notification use if (data.status !== 201) toast(something)
      if (data[0] == 1) {
        navigate("/categories");
      }
    },
  });
  return (
    <React.Fragment>
      <Title>Category</Title>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 3, m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <TextField
          required
            multiline
            id="outlined-error"
            label="Category"
            name="name"
            placeholder="Input Category Name"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
          <TextField
          required
            id="outlined-error-helper-text"
            label="Detail Category"
            placeholder="Input Category Detail"
            multiline
            rows={4}
            name="details"
            value={formik.values.details}
            onChange={formik.handleChange}
          />
        </div>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" href="/category"   color="error" sx={{ mt: 3, ml: 1 }}> 
            Cancel
          </Button>

          <Button variant="contained"  type="submit" sx={{ mt: 3, ml: 1 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
