import { async } from "@firebase/util";
import { Container, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from "react-router-dom";

import DashboardLayout from "../../Component/AdminDashboard/DashboardLayout";


function UserEdit() {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate()

  const [ editUser, setEditUser ] = useState();

  async function getUser() {
    const data = await (await fetch ("http://localhost:4000/api/v1/user" + id, {
      credentials: "include"
    })).json();
    setEditUser(data)
  }
  useEffect(() => {
    getUser()
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:{
      email: 
    }
  })

}

export default UserEdit;
