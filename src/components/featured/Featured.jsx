import React from 'react';
import "./Featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardControlKeyOutlinedIcon from '@mui/icons-material/KeyboardControlKeyOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$500</p>
        <p className="desc">Previous transaction processing. last payment may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle"> Target</div>
            <div className="itemResult negative ">
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
              <div className="resultAmount"> $14.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Week</div>
            <div className="itemResult positive">
              <KeyboardControlKeyOutlinedIcon fontSize='small' />
              <div className="resultAmount"> $14.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Month</div>
            <div className="itemResult positive">
              <KeyboardControlKeyOutlinedIcon fontSize='small' />
              <div className="resultAmount"> $14.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
