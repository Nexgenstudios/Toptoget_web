'use client';
import React, { useState } from "react";
import '../styles/profile.scss';
import { Col, Row } from "reactstrap";
import { CiWallet } from "react-icons/ci";
import chart from "../assets/images/chart.png"
import chart2 from "../assets/images/chart2.png"
import chart3 from "../assets/images/chart3.png"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const ProfilePart = () => {
  const data = [
    { label: 'Jan', sales: 21, leads: 41 },
    { label: 'Feb', sales: 35, leads: 79 },
    { label: 'Mar', sales: 75, leads: 57 },
    { label: 'Apr', sales: 51, leads: 47 },
    { label: 'May', sales: 41, leads: 63 },
    { label: 'Jun', sales: 47, leads: 71 },
    { label: 'jul', sales: 47, leads: 71 },
  ];
  // const [activeTab, setActiveTab] = useState('tab1');

  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  // };

  // const TabPanel1 = () => {
  //   return (
  //     <div className="tab-panel">
  //       <h2>Tab Panel 1 Content</h2>
  //     </div>
  //   );
  // };

  // const TabPanel2 = () => {
  //   return (
  //     <div className="tab-panel">
  //       <h2>Tab Panel 2 Content</h2>
  //     </div>
  //   );
  // };


  return (
    <div>
      {/* <div className="rounded-full px-6 py-3 bg-[#F4F8E2] border-[#D1D1D1] border-[1.5px]">
              <div className="flex flex-wrap justify-center align-middle items-center">
                <div className="w-full md:w-2/6 text-center md:text-left">
                  <h1 className="text-[#4C4C4C] text-lg font-bold"></h1>
                </div>
                <div className="w-full m-auto">
                  <div className="flex flex-wrap justify-center align-middle items-center md:justify-end">
                    <div className="w-full block text-center md:flex justify-center md:justify-start"> 
                      <button className="submitbtn bg-[#E2F6D3] hover:bg-[#588A7A] text-[#588A7A] hover:text-[#ffffff] hover:scale-[1.1] active:scale[0.9] font-bold py-2 duration-200 px-4 rounded-full border-[#96C872] hover:border-[white] border-[1.5px] focus:outline-none focus:shadow-outline text-sm my-1 md:my-0 mx-2">Restaurant Information</button>
                      <button className="submitbtn bg-[#E2F6D3] hover:bg-[#588A7A] text-[#588A7A] hover:text-[#ffffff] hover:scale-[1.1] active:scale[0.9] font-bold py-2 duration-200 px-4 rounded-full border-[#96C872] hover:border-[white] border-[1.5px] focus:outline-none focus:shadow-outline text-sm my-1 md:my-0 mx-2">Restaurant owner details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
      {/* <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                  <li className="mr-2" role="presentation">
                      <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                  </li>
                  <li className="mr-2" role="presentation">
                      <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                  </li>
                  <li className="mr-2" role="presentation">
                      <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                  </li>
                  <li role="presentation">
                      <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
                  </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                  <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
              </div>
              <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                  <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the content visibility and styling.</p>
              </div>
            </div> */}
      <div>
        <div className="over-prifle pb-2">Analytics Overview</div>
        <div>
          <Row className="flexcss">
            <Col  className="overcard" >
              <div className="flex justify-between gap-2 mx-3 my-2">
                <div className="borderci flex justify-center py-2"><CiWallet className="text-2xl clasciwal" /></div>
                <div className="w-75"><img src={chart} alt="chart" /> </div>
              </div>
              <div className="topro">Total Sales</div>
              <div className="flex justify-between">
                <div className="font18">₹ 18,545</div>
                <button className="btn15 px-2">+15%</button>
              </div>
            </Col>
            <Col  className="overcard" ><div className="">
              <div className="flex justify-between gap-2 mx-3 my-2">
                <div className="borderci flex justify-center pt-2"><CiWallet className="text-2xl clasciwal" /></div>
                <div className="w-75"><img src={chart2} alt="chart" /> </div>
              </div>
              <div className="topro">Total Sales</div>
              <div className="flex justify-between">
                <div className="font18">₹ 18,545</div>
                <button className="btn15 px-2">+15%</button>
              </div>
            </div></Col>
            <Col  className="overcard" ><div className="">
              <div className="flex justify-between gap-2 mx-3 my-2">
                <div className="borderci flex justify-center pt-2"><CiWallet className="text-2xl clasciwal" /></div>
                <div className="w-75"><img src={chart3} alt="chart" /> </div>
              </div>
              <div className="topro">Total Sales</div>
              <div className="flex justify-between">
                <div className="font18">₹ 18,545</div>
                <button className="btn15 px-2">+15%</button>
              </div>
            </div></Col>
          </Row>
        </div>
        <Row className="flexcss">
          <Col  className="colwidth">
            <div className="anafont py-1">Analytics Overview</div>
            <div className="text-end pb-2" style={{ marginTop: "-1rem" }}>
              <select className="slctstyle px-2">
                <option>Year 2023</option>
              </select>
            </div>
            <div className="overviewcard">
              <div className="section col-md-6">
                <div className="section-content">
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={data} margin={{ top: 15, right: 25, bottom: 15, left: 0 }}>
                      <Tooltip />
                      <XAxis dataKey="label" />
                      <YAxis />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      {/* <Legend /> */}
                      <Line type="monotone" dataKey="sales" stroke="#FB8833" />
                      <Line type="monotone" dataKey="leads" stroke="#17A8F5" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </Col>
          <Col className="colwidth1">
            <div className="anafont py-1">Customer Stat's</div>
            <div className="text-end pb-2" style={{ marginTop: "-1rem" }}>
              <select className="slctstyle px-2">
                <option>Weekly</option>
              </select>
            </div>
            <div className="weeklycard">
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={data} margin={{ top: 15, right: 25, bottom: 15, left: 0 }}>
                  <Tooltip />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  {/* <Legend /> */}
                  <Line type="monotone" dataKey="sales" stroke="#FB8833" />
                  <Line type="monotone" dataKey="leads" stroke="#17A8F5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Col>
        </Row>
        <div className="anafont py-1">More Item Sale</div>
        <div className="text-end pb-2" style={{ marginTop: "-1rem" }}>
          <select className="slctstyle px-2">
            <option>Year 2023</option>
          </select>
        </div>
        <div className="foodcard">
          <table style={{width:"100%"}}>
            <thead className="text-center">
              <tr className="cardheader">
                <th scope="col" className="px-3">Food name</th>
                <th scope="col" className="px-3">Item Price</th>
                <th scope="col" className="px-3">Item Percentage</th>
                <th scope="col" className="px-3">Total sale</th>
                <th scope="col" className="px-3">Sale Percentage</th>
              </tr>
            </thead>
            <tbody className="bodytfont">
              <tr className="">
                <th className="text-center py-1">Chicken tikka</th>
                <td className="text-center py-1">250</td>
                <td className="text-center py-1">20%</td>
                <td className="text-center py-1">12 K</td>
                <td className="text-center py-1">90%</td>
              </tr>
              <tr>
                <th className="text-center py-1">Pizza</th>
                <td className="text-center py-1">200</td>
                <td className="text-center py-1">19%</td>
                <td className="text-center py-1">11.5 K</td>
                <td className="text-center py-1">89%</td>
              </tr>
              <tr>
                <th className="text-center py-1">Grill</th>
                <td className="text-center py-1" >190</td>
                <td className="text-center py-1">18%</td>
                <td className="text-center py-1">11 K</td>
                <td className="text-center py-1">80%</td>
              </tr>
              <tr>
                <th className="text-center py-1">Burgur</th>
                <td className="text-center py-1" >160</td>
                <td className="text-center py-1">15%</td>
                <td className="text-center py-1">10 K</td>
                <td className="text-center py-1">90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePart;