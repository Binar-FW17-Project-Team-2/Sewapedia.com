import * as React from "react";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Title from "../Title";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { TextInput } from "../../CustomInput";
import { useNavigate, useParams } from "react-router-dom";
import {  Container, LinearProgress, MenuItem, Paper, Toolbar, Typography } from "@mui/material";

// Generate Order Data

export default function FormEditCategory() {
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);
  const [editCategory, setEditCategory] = useState([]);
  const [errorInput, setErrorInput] = useState(false);

  async function getCategoryByName() {
    const data = await (
      await fetch(`http://localhost:4000/api/v1/category/${name}`, {
        credentials: "include",
      })
    ).json();
    setEditCategory(data);
  }
  useEffect(() => {
    getCategoryByName();
  }, []);

  async function getCategoryById() {
    const data = await (
      await fetch("http://localhost:4000/api/v1/category/" + name, {
        credentials: "include",
      })
    ).json();
    setEditCategory(data);
  }



  return (
    <Formik
      initialValues={{
        name: editCategory.name || "",
        details: editCategory.details || "",
      }}
      enableReinitialize
      onSubmit={async (values) => {
        if (errorInput) return;
        const res = await fetch(
          `http://localhost:4000/api/v1/category/${name}`,
          {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify({
              name: values.name,
              details: values.details,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await res.json();
        if (res.status === 200) {
          navigate("/categories");
        }
        if (res.status === 400) console.log(data);
      }}
    >
      {(formik) => (
        <Paper
          component={Form}
          elevation={10}
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            p: 1,
            mt: 1,
            mx: "auto",
            "& .MuiTextField-root": { my: 1, width: "100%" },
          }}
        >

          <TextInput id="name" name="name" label="name" />
          <TextInput id="details" name="details" label="details"  />


          <Button
            sx={{ mt: 1 }}
            type="submit"
            color="info"
            variant="contained"
          >
            SUBMIT
          </Button>
        </Paper>
      )}
    </Formik>
  );
}
