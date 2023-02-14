import React from 'react'
import "./Navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...' /> <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <FullscreenExitIcon className='icon' />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' /> 
            <div className="counter">1</div>           
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>           
          </div>
          <div className="item">
            <FormatListBulletedIcon className='icon' />
          </div>
          <div className="item">
            <img src=" https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images/artworkimages/medium/1/all-you-need-is-love-balazs-solti.jpg?&targetx=37&targety=-4&imagewidth=709&imageheight=930&modelwidth=794&modelheight=930&backgroundcolor=FEFEFE&orientation=0&producttype=tapestry-50-61 "
             alt="pic" className='img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;