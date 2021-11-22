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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TemporaryDrawer({ workshops }) {
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* grid of all workshops */}
        <Grid item md={3}>
          {workshops.map(workshop => (
            <Item key={workshop.slug}>
              <Link href={`/workshops/${workshop.slug}`}>
                <a>{workshop.frontmatter.title}</a>
              </Link>
            </Item>
          ))}
        </Grid>
      </Grid>

    </Box>
  );

  return (
    // icon and button to open  top drawer 
    <React.Fragment>
      <Button variant="contained" color="success" onClick={toggleDrawer('top', true)}>Open Top</Button>
      <Drawer anchor="top" open={state['top']} onClose={toggleDrawer('top', false)}>
        {list('top')}
      </Drawer>
    </React.Fragment>
  );
}
