import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`http://localhost:4000/user/${params.id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        const body = await result.json([]);
        setData(body);
      } catch (err) {
        // error handling code
      }
    };

    // call the async fetchData function
    fetchData();
  }, [params]);

  return (
    <>
      <h1>Halaman User Profile</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={data?.image_url}
          alt={data.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.email} {data?.role}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
