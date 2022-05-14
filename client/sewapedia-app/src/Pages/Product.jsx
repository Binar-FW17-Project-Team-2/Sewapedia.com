import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { rows } = await (
      await fetch("http://localhost:4000/api/v1/product")
    ).json();

    // ketika sudah berhasil ngefetch, maka, data dimasukkan ke state data
    setData(rows);
    setLoading(false);
  }

  const searchText = (e) => {
    setQuery(e.target.value);
  };

  let dataSearch = data.filter((card) => {
    return Object.keys(card).some((key) =>
      card[key]
        .toString()
        .toLowerCase()
        .includes(query.toString().toLowerCase())
    );
  });

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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="searchBox"
          label="Search"
          variant="outlined"
          value={query}
          onChange={searchText.bind(this)}
        />
      </Box>
      <div>
        <h1 className="title-product">Our Product</h1>
        <div className="div-card">
          {dataSearch.map((card, idx) => {
            return (
              <MultiActionAreaCard
                key={idx}
                title={card.name}
                description={card.details}
                // make the displayed image random
                image={
                  card.img_url[
                    Math.round(Math.random() * (card.img_url.length - 1))
                  ]
                }
                id={card.id}
              />
            );
          })}
        </div>
      </div>

      <Outlet />
      <Footer />
    </>
  );
}

function MultiActionAreaCard({ title, description, image, id }) {
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
        <Button size="small" color="primary" href={`/product/${id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
