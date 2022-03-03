import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';
import TocIcon from '@mui/icons-material/Toc';

export default function SidebarDrawer(pages, currentPage) {

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

    return (
        // icon and button to open top drawer 
        <React.Fragment>

            <Button color="primary"
                aria-label="open drawer"
                className={'sidebar-button'}
                onClick={toggleDrawer('left', true)}>
                <TocIcon />
                    Table of Contents
            </Button>
            <Drawer
                variant="temporary"
                open={state['left']}
                className='drawer-left temporary'
                onClose={toggleDrawer('left', false)}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}

            >
                <nav
                    className='sidenav'>
                    <ul
                        onClick={toggleDrawer('left', false)}
                        onKeyDown={toggleDrawer('left', false)}>
                        {pages}
                    </ul>
                </nav>
            </Drawer>
            <Drawer variant="permanent"
                anchor="left"
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                className='drawer-left permanent'
                sx={{
                    flexShrink: 0,
                    zIndex: 1,
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'block'
                    },
                }}
            >
                <nav className='sidenav'>
                    <ul>
                        {pages}
                    </ul>
                </nav>
            </Drawer>
        </React.Fragment>
    );
}
