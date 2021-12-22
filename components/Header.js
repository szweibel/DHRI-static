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
import Image from 'next/image'
import logo from '../public/images/logo.png';
const Drawer = dynamic(
    () => import('../components/Drawer'),
     { loading: function loading() {return <p>...</p>} }
   )

export default function Header({ props }) {

    const [propsAvailable, setPropsAvailable] = useState(false);
    const [allWorkshops, setAllWorkshops] = useState([]);
    const [allGuides, setAllGuides] = useState([]);
    const [allInsights, setAllInsights] = useState([]);

    useEffect(() => {
        if (props && props.workshops) {
            setPropsAvailable(true)
            setAllWorkshops(props.workshops)
            setAllGuides(props.guides)
            setAllInsights(props.insights)
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
                    <Link href='/' passHref>
                    <Image 
                    src={logo}
                    alt={yaml.organization + ' logo'}
                    width={100}
                    height={100}
                    className='logo' />
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href='/' passHref>
                            <h2 className='headerLink'>{yaml.organization} {yaml.event}</h2>
                        </Link>
                    </Typography>
                    <ul className='links'>
                        <li>
                        {propsAvailable ? <Drawer files={allWorkshops} category='workshops' /> : null}
                        </li>
                        <li>
                        {propsAvailable ? <Drawer files={allGuides} category='guides' /> : null}
                        </li>
                        <li>
                            Insights
                        </li>
                        <li>
                            Resources
                        </li>
                        <li>
                            <Link href='/Glossary' passHref>Glossary</Link>
                        </li>
                    </ul>
                    
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}