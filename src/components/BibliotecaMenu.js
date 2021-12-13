import React from 'react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Menu, MenuItem } from '@mui/material';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PodcastsIcon from '@mui/icons-material/Podcasts';


  export default function BibliotecaMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
return (
    <><a className="text-white items-center hover:text-stone-300"
        id="Menu-Biblioteca"
        aria-controls="biblioteca-positioned-menu"
        aria-haspopup="true"
        href="#"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}><HeadphonesIcon className="mr-2" /> BIBLIOTECA</a>
        <Menu
            id="biblioteca-positioned-menu"
            aria-labelledby="Menu-Biblioteca"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleClose}><AudiotrackIcon/>Musicas</MenuItem>
            <MenuItem onClick={handleClose}><PodcastsIcon/>Podcasts</MenuItem>
        </Menu></>
);
        }