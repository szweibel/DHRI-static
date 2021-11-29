import Link from 'next/link'
import yaml from '../config.yml'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import dynamic from 'next/dynamic';
const Drawer = dynamic(
    () => import('../components/Drawer'),
     { loading: function loading() {return <p>...</p>} }
   )

export default function ButtonAppBar({ props }) {

    const workshops = []
    // if workshops is undefined
    // if (typeof props.workshops === 'undefined') {
    //  const workshops = []
    // }else{
    //     const workshops = props.workshops
    // }
    const [propsAvailable, setPropsAvailable] = useState(false);
    const [allWorkshops, setAllWorkshops] = useState(workshops);

    useEffect(() => {
        if (props && props.workshops) {
            setPropsAvailable(true)
            setAllWorkshops(props.workshops)
        }
    }, [props.workshops])
    

    return (
        <Box
            className='topBar' id="back-to-top-anchor">
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
                    <img src='/images/logo.png' alt= {yaml.organization + ' logo'} className='logo' />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href='/' passHref>
                            <h2 className='headerLink'>{yaml.organization} {yaml.event}</h2>
                        </Link>
                    </Typography>
                    <ul className='links'>
                        <li>
                            Workshops
                        </li>
                        <li>
                            Installations
                        </li>
                        <li>
                            Insights
                        </li>
                        <li>
                            Resources
                        </li>
                        <li>
                            Terms
                        </li>
                    </ul>
                    {propsAvailable ? <Drawer workshops={allWorkshops} /> : null}
                    
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}