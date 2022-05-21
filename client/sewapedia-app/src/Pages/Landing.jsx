import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ListProduct from "../Component/ListProduct";
import Carousel from "../Component/Carousel";
import { Divider } from "@mui/material";


export default function Home() {
  const [products1, setProducts1] = useState([])
  const [products2, setProducts2] = useState([])
  const [products3, setProducts3] = useState([])

  useEffect(() => {
    getProducts1()
    getProducts2()
    getProducts3()
  },[]);

  async function getProducts1() {
    const { rows } = await (
      await fetch("http://localhost:4000/api/v1/product?limit=6", {
        credentials: "include",
      })
    ).json();
    setProducts1(rows);
  }
  async function getProducts2() {
    const { rows } = await (
      await fetch("http://localhost:4000/api/v1/product?limit=3", {
        credentials: "include",
      })
    ).json();
    setProducts2(rows);
  }
  async function getProducts3() {
    const { rows } = await (
      await fetch("http://localhost:4000/api/v1/product?limit=6&offset=3", {
        credentials: "include",
      })
    ).json();
    setProducts3(rows);
  }

  return (
    <Box
      pt={1}
    >
      <Box
        
        sx={{
          width:'100%',
          height:'600px',
          maxHeight:'100vw',
          backgroundColor:'#30694D'
        }}
      >
        <Carousel/>
      </Box> 
      <Box>
        
        <ListProduct 
          title='Bagaimana Dengan Ini'
          products={products1}
        />
      </Box>
      <Box 
        sx={{
          backgroundColor: '#F1F3F5'
        }}
      >
        <ListProduct 
          title='Product Terbaru'
          products={products2}
        />
      </Box>
      <Box>
        <ListProduct 
          title='Semoga harimu menyenangkan'
          products={products3}
        />
      </Box>
    </Box>
  );
}
