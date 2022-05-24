import { Box, Button, Container, IconButton, InputBase, Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '../Component/Card';
import SearchIcon from '@mui/icons-material/Search';

export default function Products() {
  const [products, setProducts] = useState({ count: 0, rows: [] });
  const [filtered, setFiltered] = useState({ count: 0, rows: [] });

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState([]);
  const limit = 6;

  useEffect(() => {
    getProducts();
  }, [page]);

  async function getProducts() {
    const data = await (
      await fetch(`http://localhost:4000/api/v1/product?limit=${limit}&offset=${(page - 1) * limit}`, {
        credentials: 'include',
      })
    ).json();
    setProducts(data);
    setFiltered(data);
  }

  function handlePagination(event, value) {
    setPage(value);
  }

  function filterByCategory(categoryName) {
    const filtered = products.rows.filter((curData) => {
      return curData.category === categoryName;
    });

    const countFiltered = filtered.length;

    const newProduct = { count: countFiltered, rows: [...filtered] };

    setFiltered(newProduct);
  }

  return (
    <Box>
      <Button onClick={() => filterByCategory('kendaraan')}>Filter Kendaraan</Button>
      <Button onClick={() => filterByCategory('boneka')}>Filter Boneka</Button>
      <Button onClick={() => filterByCategory('brick')}>Filter Brick</Button>

      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: '15px',
            md: '50px',
          },
        }}
      >
        <Box pb={2}>
          <InputBase
            placeholder="Search Product"
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              flex: 1,
              height: '100%',
              padding: '0 15px',
            }}
          />
          <IconButton type="submit" sx={{ padding: '0 10px 0 0' }}>
            <SearchIcon />
          </IconButton>
          <Typography
            component="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '20px',
                md: '30px',
              },
              textAlign: 'center',
              color: '#333333',
            }}
          >
            Semua Product
          </Typography>
        </Box>
        <Box
          component="ul"
          mb={2}
          p={0}
          sx={{
            boxSizing: 'border-box',
            width: '100%',
            mr: '-10px',
          }}
        >
          {!filtered.rows.length ? (
            <Typography>Product tidak Ada</Typography>
          ) : (
            filtered.rows
              .filter((val) => {
                if (query === '') {
                  return val;
                } else if (query.length > 3) return Object.keys(val).some((key) => val[key].toString().toLowerCase().includes(query.toString().toLowerCase()));
                return val;
              })
              .map((product) => <Card product={product} sx={{ width: { xs: '50%', md: '33.33%' } }} key={product.id} />)
          )}
        </Box>
        <Stack spacing={2} alignItems="center">
          <Pagination count={Math.ceil(products.count / limit)} page={page} onChange={handlePagination} variant="outlined" shape="rounded" />
        </Stack>
      </Container>
    </Box>
  );
}
