import { Box, Container, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "../Component/Card";

export default function Products() {
  const [products, setProducts] = useState({count: 0, rows: []});
  const [page, setPage] = useState(1);
  const limit = 6

  useEffect(() => {
    getProducts();
  }, [page])

  async function getProducts() {
    const data = await (
      await fetch(`http://localhost:4000/api/v1/product?limit=${limit}&offset=${(page - 1) * limit}`, {
        credentials: "include",
      })
    ).json()
    setProducts(data);
  }

  function handlePagination(event, value) {
    setPage(value)
  }

  return (
    <Box>
      <Container
        maxWidth='xl'
        sx={{
          py: {
            xs: '15px',
            md: '50px'
          }
        }}
      >
        <Box
          pb={2}
        >
          <Typography
            component='h1'
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '20px',
                md: '30px'
              },
              textAlign: 'center',
              color: '#333333'
            }}
          >
            Semua Product
          </Typography> 
        </Box>
        <Box
          component='ul'
          mb={2}
          p={0}
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            mr: '-10px',
          }}
        >
          {
            !products.rows.length
              ? <Typography>products tidaak ada</Typography>
              : products.rows.map((product) => <Card product={product} sx={{width: {xs: '50%', md: '33.33%'}}} key={product.id}/>)
          }
        </Box>
        <Stack spacing={2} alignItems='center'>
          <Pagination 
            count={Math.ceil(products.count / limit)} 
            page={page}
            onChange={handlePagination}
            variant="outlined" 
            shape="rounded" 
          />
        </Stack>
      </Container>
    </Box>
  )
}