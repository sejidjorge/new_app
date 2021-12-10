import React from 'react';
import './output.css';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { FormGroup, Input } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


function App() {
  return (
    <div className="App bg-gray-800 w-screen h-screen flex">
      <div className="bg-gradient-to-r from-teal-600 via-purple-500 to-violet-600 w-screen h-16 items-center flex justify-between p-4">
        <div className="w-6/12 ml-32 flex space-x-8">
          <a className="text-white items-center hover:text-stone-300" href="#"><HomeIcon className="mr-2"/> INICIO</a>
          <a className="text-white items-center hover:text-stone-300" href="#"><PodcastsIcon className="mr-2"/> PODCASTS</a>
          <a className="text-white items-center hover:text-stone-300" href="#"><HeadphonesIcon className="mr-2"/> BIBLIOTECA</a>
        </div>
        <div className="w-4/12 flex space-x-6">
          <form>
            <FormGroup>
              <Input type="search" className="rounded-sm Input" name="search" placeholder="Search"/>
            </FormGroup>
          </form>
          <a className="text-white hover:text-stone-300" href="#"><NotificationsIcon/></a>
          <a className="text-white hover:text-stone-300" href="#"><SettingsIcon/></a>
        </div>
      </div>
    </div>
  );
}

export default App;
