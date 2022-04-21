import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from '@mui/material/Link';
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 1, sm: 1 }}
        py={{ xs: 1, sm: 4 }}
        bgcolor="white"
        color="#616161"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid marginLeft="0.2rem" marginTop="50px">
              <h2 className="title">Follow us on:</h2>
            </Grid>
            <Grid item xs={1} marginTop="50px">
              <Link href='http://www.instagram.com'> <InstagramIcon/> </Link>
            </Grid>
            <Grid item xs={1} marginTop="50px">
            <Link href='http://www.twitter.com'> <TwitterIcon/> </Link>
            </Grid>
            <Grid item xs={1} marginTop="50px">
            <Link href='http://www.facebook.com'> <FacebookIcon/> </Link>
            </Grid>
            <Grid item xs={5.1} marginTop="50px"></Grid>
            <Grid marginRight="1.5rem" marginTop="60px">
            <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: "none", sm: "block" } }}
            to="/"
            
            
          >
          <Link href="/" underline="none" color="black">
           
              Sewapedia.com
           </Link>
           </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
