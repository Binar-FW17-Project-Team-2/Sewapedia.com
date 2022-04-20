import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  CardActionArea,
  CardActions,
  ImageList,
  ImageListItem,
  Chip,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

export default function Product() {
  let { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const [duration, setDuration] = React.useState("");

  const handleChange = (event) => {
    setDuration(event.target.value);
  };

  async function getData() {
    const data = await (
      await fetch(`http://localhost:4000/api/v1/product/${id}`)
    ).json();
    console.log(data);
    setData(data);
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
        <h1 className="title-product">{data.name}</h1>
      </div>

      {/* flex */}
      <div className="product-detail">
        <ImageList>
          {data?.img_url.map((e, idx) => (
            <ImageListItem key={idx}>
              <img
                src={`${e}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${e}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="gambar"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Chip label={data.category} variant="outlined" />
        <Typography is="h1" mt={2}>
          Price: {data.price}
        </Typography>
        <Typography mt={2}>Descriptions</Typography>
        <Typography mt={2}>{data.details}</Typography>
        <Typography mt={2}>Stock: {data.stock}</Typography>

        <div>
          <Box sx={{ minWidth: 70 }} my={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Duration</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={duration}
                label="Age"
                onChange={handleChange}
              >
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
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
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
