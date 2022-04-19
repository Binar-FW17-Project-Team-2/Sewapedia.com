import * as React from "react";
import { useEffect, useState } from 'react';
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../Title";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// Generate Order Data

export default function Orders() {
  const navigate = useNavigate();
  const [categories, setCategory] = useState([]);

  function fetchCategories() {
    fetch("http://localhost:4000/api/v1/category")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchCategories();
  });
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
  "main main . sidebar"
  "footer footer footer footer"`,
        }}
      >
        <Title>Category</Title>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate(`/category/add`)}>
          Category
        </Button>
      </Box>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Detail</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.name}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.details}</TableCell>
              <TableCell> 
                <Button
                startIcon={<EditIcon />}
              size='small'
              color='warning'
              variant="contained"
              onClick={() => navigate(`/category/${category.name}`)}
            >
              Edit
            </Button>
            <Button
            startIcon={<DeleteIcon />}
              size='small'
              color='error'
              variant="contained"
              onClick={() => navigate(`/category/${category.name}`)}
            >
              Delete
            </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
