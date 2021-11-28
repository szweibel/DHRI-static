import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Link from 'next/link'
import IconButton from '@mui/material/IconButton';
import ComputerIcon from '@material-ui/icons/Computer';
import * as hero from 'hero-patterns'
import colors from '../components/Colors'
import { useEffect } from "react";
import allPatterns from '../components/Backgrounds';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function TemporaryDrawer({ workshops }) {
  console.log(workshops)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="drawer-list"
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container
        className='paperWorkshops'>
        {/* grid of all workshops */}
        <Grid item md={3}
          className='paperGrid'
        >
          {workshops.map((workshop, index) => (
            <Link href={`/workshops/${workshop.slug}`} key={workshop.slug + index}>
              <Item className='paperWorkshop workshopBackground' style={allPatterns[Math.floor(Math.random() * allPatterns.length)]}>
                <a>{workshop.frontmatter.title}</a>
              </Item>
            </Link>
          ))}
        </Grid>
      </Grid>
    </Box>


  );

  return (
    // icon and button to open top drawer 
    <React.Fragment>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="computer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer('top', true)}
      >
        <ComputerIcon />
      </IconButton>
      <Drawer anchor="top" open={state['top']} onClose={toggleDrawer('top', false)}>
        {list('top')}
      </Drawer>
    </React.Fragment>
  );
}
