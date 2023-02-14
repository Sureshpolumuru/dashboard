import React from 'react'
import "./Single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table1"



const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fnature&psig=AOvVaw3N-6lO1wkPBZukrbi89X5s&ust=1676098326368000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiOrbzQiv0CFQAAAAAdAAAAABAD"
                alt="no-img" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Suresh</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">suresh@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 9966785695</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Visakhapatnam</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title = "User spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>

          <List />
        </div>
      </div>
    </div>
  )
}

export default Single
