import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";

function AddProduct() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    await fetch("http://localhost:4000/product")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (req, res) => {
    await fetch("http://localhost:4000/product", {
      method: "POST",
      body: JSON.stringify({
        name: req.name,
        details: req.details,
        img_url: req.img_url,
        price: req.price,
        stock: req.stock,
      }),
      headers: {
        "Content-type": "application/json, charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setProduct((products) => [...products], data);
      });
  };

  return (
    <div>
      <div>
        <DashboardLayout />
      </div>
      <div>
        <Container>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <TextField id="name" name="name" label="Name" />
            <TextField id="image" name="image_url" label="Image Url" />
            <TextField id="details" name="details" label="Details" />
            <TextField id="price" name="price" label="Price" />
            <TextField id="stock" name="stock" label="Stock" />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </Stack>
        </Container>
      </div>
    </div>
  );
}

export default AddProduct;
