import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../components/Drawer'
import { styled } from '@mui/material/styles';


export default function ButtonAppBar({ workshops }) {
  return (
    <Box 
    className='topBar'>
      <AppBar 
      position="static" 
      className='topBar'>
        <Toolbar
        className='topBar'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DHRI Curriculum
          </Typography>
          <Drawer workshops={workshops} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}