import React from 'react'
import "./Widgets.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const widgets = ({ type }) => {

    let data;

    // temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlinedIcon className='icon' 
                // style={{
                //     color:"crimson",
                //     backgroundColor:' brown ',
                // }}
                />
            };
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all orders",
                icon: <ShoppingBagOutlinedIcon className='icon' />
            };
            break;

        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <CurrencyRupeeOutlinedIcon className='icon' />
            };
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See all details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' />
            };
            break;
            
            default:
            break;
    }


    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} { amount }
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">

                {/* note:-  Here the place of POSITIVE or NEGATIVE we can use (& operator) it decided the color of the nature in particular place Ex:- we want "+ve" it gives green ( what we given by color code) */}

                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default widgets
