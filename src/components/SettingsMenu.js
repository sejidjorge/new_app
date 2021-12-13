import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Menu, MenuItem } from '@mui/material';

  export default function SettingsMenu() {
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
        id="Menu-Settings"
        aria-controls="Settings-positioned-menu"
        aria-haspopup="true"
        href="#"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}><SettingsIcon/></a>
        <Menu
            id="Settings-positioned-menu"
            aria-labelledby="Menu-Settings"
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
            <MenuItem onClick={handleClose}>User name</MenuItem>
            <MenuItem onClick={handleClose}>Suas Configurações</MenuItem>
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Alterar Idioma</MenuItem>
            <MenuItem onClick={handleClose}>Termos e condições</MenuItem>
            <MenuItem onClick={handleClose}>Ajuda</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
            <MenuItem onClick={handleClose}>Baixar App para desktop</MenuItem>
        </Menu></>
);
        }