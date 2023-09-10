import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: '#333',
        color: '#fff',
      }}
    >
      <Toolbar>
        <Typography variant="body1" align="center" sx={{ flexGrow: 1 }}>
          &copy; 2023 Javascript 401 React + Redux + Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
