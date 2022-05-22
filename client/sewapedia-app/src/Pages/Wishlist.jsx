import Navbar from '../Component/NavBar'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react';



export default function Wishlist() {
    const [product,setProduct] = useState([])


    const getData = async() => {
        try {
            const userId = localStorage.getItem('userId')
            const url = `http://localhost:4000/api/v1/wishlist?userId=${userId}`
            const data = await (await fetch(url, {
                method: 'GET',
                credentials: 'include'
            })).json()
            console.log(data)
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async(productId) => {
        try {
            const userId = localStorage.getItem('userId')
            const url= `http://localhost:4000/api/v1/wishlist?userId=${userId}&productId=${productId}`
            await fetch(url, {
                method: 'DELETE',
                credentials: 'include'
            })
            const newData = [...product]
            const index = product.findIndex((data) => data.id === productId)
            newData.splice(index, 1)
            setProduct(newData)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        getData()
    }, [])

    return(
    <>
        <Navbar/>
        <TableContainer component={Paper} sx = {{width: 1000, mx: "auto", mt: 4}}>
            <Table sx={{ minWidth: 900, mt: 3 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align='center'></TableCell>
                    <TableCell align="center">Product Name</TableCell>
                    <TableCell align="center">Unit Price</TableCell>
                    <TableCell align="center">Stock</TableCell>
                    <TableCell align='center'></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {product.map((prod) => (
                    <TableRow>
                    <TableCell align="center"><img src={`${prod.img_url[0]}`} width={100} height={100} /></TableCell>
                    <TableCell align="center">{prod.name}</TableCell>
                    <TableCell align="center">Rp.{prod.price}</TableCell>
                    <TableCell align="center">{prod.stock}</TableCell>
                    <TableCell align="center"><IconButton onClick={() => handleClick(prod.id)}><DeleteIcon/></IconButton></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
    </>
    )
}