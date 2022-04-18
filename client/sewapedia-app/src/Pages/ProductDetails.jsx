import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Product() {
  let { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const [duration, setDuration] = React.useState('');

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  async function getData() {
    const { rows } = await fetch('http://localhost:4000/api/v1/product').then((resp) => resp.json());

    // ketika sudah berhasil ngefetch, maka, data dimasukkan ke state data
    setData(rows);
    setLoading(false);
  }

  if (loading) {
    return (
      <>
        <NavBar />
        <center>
          <div>Loading...</div>
        </center>
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div>
        <h1 className="title-product">Detail Product</h1>
      </div>

      {/* flex */}
      <div className="product-detail">
        <div>
          <img src="https://avatars.githubusercontent.com/u/34944169?v=4" className="img-product-detail" />
        </div>
        <div>
          <h2>Detail</h2>
          <p>Harga: 1.000.000</p>
        </div>

        <div>
          <Box sx={{ minWidth: 70 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Duration</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={duration} label="Age" onChange={handleChange}>
                <MenuItem value={10}>1 Minggu</MenuItem>
                <MenuItem value={20}>2 Minggu</MenuItem>
                <MenuItem value={30}>3 Minggu</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <SewaButton />
        </div>
      </div>

      <Outlet />
      <Footer />
    </>
  );
}

function MultiActionAreaCard({ title, description, image }) {
  return (
    <Card sx={{ maxWidth: 345, width: 345, mx: 5 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

function SewaButton() {
  return <Button variant="contained">Sewa</Button>;
}
