import React from 'react';
import './output.css';
import HomeIcon from '@mui/icons-material/Home';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { FormGroup, Input } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


function App() {
  return (
    <div className="App bg-gray-800 w-screen h-screen justify-around flex">
      <div className="bg-gradient-to-r from-teal-600 via-purple-500 to-violet-600 w-screen h-16 flex justify-around p-4">
        <div className="w-8/12 flex justify-around">
          <a className="text-white" href="#"><HomeIcon/> INICIO</a>
          <a className="text-white" href="#"><PodcastsIcon/> PODCASTS</a>
          <a className="text-white" href="#"><HeadphonesIcon/> BIBLIOTECA</a>
        </div>
        <div className="w-4/12 flex space-x-6">
          <form>
            <FormGroup>
              <Input type="search" name="search" placeholder="Search"/>
            </FormGroup>
          </form>
          <a className="text-white" href="#"><NotificationsIcon/></a>
          <a className="text-white" href="#"><SettingsIcon/></a>
        </div>
      </div>
    </div>
  );
}

export default App;
