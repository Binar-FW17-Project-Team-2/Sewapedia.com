import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

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
            <Grid item  xs={1} marginTop="50px">
                <InstagramIcon >xs=6</InstagramIcon >
            </Grid>
            <Grid item  xs={1} marginTop="50px">
                <TwitterIcon >xs</TwitterIcon >
            </Grid>
            <Grid item  xs={1} marginTop="50px">
                <FacebookIcon >xs</FacebookIcon >
            </Grid>
            <Grid item  xs={5.1} marginTop="50px">
            </Grid>
            <Grid marginRight="1.5rem" marginTop="50px">
            <h2 className="title">Sewapedia.com</h2>
            </Grid>
        </Grid>
        </Container>
      </Box>
    </footer>
  );
}