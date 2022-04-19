import * as React from "react";

import Title from "../Title";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

// Generate Order Data


export default function FormAddCategory() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      details: "",
    },
    onSubmit: async (values) => {
      const response = await fetch("http://localhost:4000/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          details: values.details,
        }),
      });
      const data = await response.json();
      // if u want to implement any toaster notification use if (data.status !== 201) toast(something)
      if (data.status === 201) {
        navigate("/signin");
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
      >
        <div>
          <TextField
            multiline
            id="outlined-error"
            label="Category"
            placeholder="Input Category Name"
          />
          <TextField
            id="outlined-error-helper-text"
            label="Detail Category"
            placeholder="Input Category Detail"
            multiline
            rows={4}
          />
        </div>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" color="error" sx={{ mt: 3, ml: 1 }}>
            Cancel
          </Button>

          <Button variant="contained" sx={{ mt: 3, ml: 1 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
