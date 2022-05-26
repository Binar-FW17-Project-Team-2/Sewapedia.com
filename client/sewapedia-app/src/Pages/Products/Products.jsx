import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavLink, useNavigate } from "react-router-dom";
import { TableDeleteUser, TableEditUser } from "../Users/UserTableButton";
import { useState, useEffect } from "react";

function Products() {
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
          {/* insert products here */}
          <Button 
            variant="contained"
            sx={{mb: 2}}
            component={NavLink}
            to='/products/add'
          >
            Add Product
          </Button>
          <ProductList />
        </Container>
      </Box>
    </Box>
  );
}

export default Products;


function ProductList() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [dialog, setDialog] = useState({open: false})

  const handleEdit = (id) => {
    navigate("/products/edit/" + id);
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { rows } = await (
      await fetch("http://localhost:4000/api/v1/product", {
        credentials: "include",
      })
    ).json();

    setProduct(rows);
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((product) => {
            return (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{product.id}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">
                  <TableEditUser id={product.id} handleEdit={handleEdit} />
                  <TableDeleteUser 
                    handleDelete={() => {setDialog({
                      open: true,
                      productId: product.id
                    })}}   
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <DialogDelete dialog={dialog} setDialog={setDialog} setProduct={setProduct}/>
    </TableContainer>
  );
}

function DialogDelete({dialog, setDialog, setProduct}) {
  function handleClose() {
    setDialog({open: false});
  };

  function handleDelete() {
    fetch(`http://localhost:4000/api/v1/product/${dialog.productId}`, {
      method: "DELETE",
      credentials: "include",
    });
    setProduct(prev => prev.filter((val) => (val.id !== dialog.productId)))
    setDialog({open: false})
  }

  return (
      <Dialog open={dialog.open} onClose={handleClose}>
        <DialogTitle>Hapus Product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Yakin mau dihapus? gak kepencet??
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDelete}>Hapus</Button>
          </DialogActions>
      </Dialog>
  );
}