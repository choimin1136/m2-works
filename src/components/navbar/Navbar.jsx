import React, { useState } from 'react';
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

export const Navbar = () => {
    let [noti, noti_update] = useState(1);
    let [chat, chat_update] = useState(1);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        {noti > 0 ? <div className="counter">{noti}</div>: null}
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        {chat > 0 ? <div className="counter">{chat}</div>: null}
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <img src='https://firebasestorage.googleapis.com/v0/b/safe-zone-backup.appspot.com/o/photo_2021-11-05_14-33-40.jpg?alt=media&token=e83652b3-171c-4844-b658-c99a414b4d37' alt='' className='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
