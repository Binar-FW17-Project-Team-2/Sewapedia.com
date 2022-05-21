import { Snackbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/NavBar";
import SideMenu from "../Component/SideMenu";
import { useToast } from "../contexts/ToastContext";
// import Carousel from "../Component/Carousel";

export default function Home() {
  const {toast, setToast} = useToast();

  const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') { return; }
    setToast(prev => ({...prev, open: false}));
  };

  return (
    <>
      <SideMenu />
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={closeSnackbar}
        message={toast.msg}
        {
          ...(toast.bgColor)
            ? {sx: {'& div': { backgroundColor: toast.bgColor }}}
            : {}
        }
      />
    </>
  )
}