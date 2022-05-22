import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState();

  async function getUser() {
    const dataProfile = await (await fetch ("http://localhost:4000/api/v1/profile/" + id, {
      credentials: "include"
    })).json();
    setData(dataProfile)
    console.log(data)
  }
  useEffect(() => {
    getUser()
  }, []);

  return (
    <>
      <h1>Halaman User Profile</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={data?.img_url}
          alt={data?.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.Biodata.firstName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.Biodata.lastName} {data?.Biodata.address}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
