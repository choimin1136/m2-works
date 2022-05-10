import React from 'react';
import "./topbar.css";
import { Language, NotificationsNone, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>
                    <img src="../logo2.png" alt="" width="120" height="45"/>
                </span>
            </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                    <NotificationsNone />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topbarIconContainer'>
                    <Settings />
                    <span className='topIconBadge'>2</span>
                </div>
                <img src='https://firebasestorage.googleapis.com/v0/b/safe-zone-backup.appspot.com/o/photo_2021-11-05_14-33-40.jpg?alt=media&token=e83652b3-171c-4844-b658-c99a414b4d37' alt='' className='topAvartar'/>
            </div>
        </div>
    </div>

  )
}
