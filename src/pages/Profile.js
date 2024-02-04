import React, { useEffect, useState } from "react";
import '../styles/Dashbord.scss';
import { FaRegBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import profilelogo1 from "../assets/images/profilelogo1.png"
import { FaEye } from "react-icons/fa";
import Restaurant from "../Profile/Restaurant";
import { notification } from "../Mock/DashboardMock"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { Disclosure } from "@headlessui/react";
import { BsX } from "react-icons/bs";
const Profile = () => {
    const [selectedMenu, setSelectedMenu] = useState("Profile Detials");
    const [username, setUsername] = useState('');
    useEffect(() => {
        setUsername('Joe Biden');
    }, []);
    // const handleMenuClick = (menuTitle) => {
    //     setSelectedMenu(menuTitle);
    // };
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState(null)
    const [information, setInformation] = useState(true)
    const [informationour, setInformationour] = useState(false)
    const handleClickbtn = () => {
        setInformation(false)
        setInformationour(true)
        setActive(true)
    }
    const handleClickbtn1 = () => {
        setInformation(true)
        setInformationour(false)
        setActive(false)

    }
    const handleClose = () => {
        setToggle(!toggle)
    }
    const [order, setOrder] = useState(true);
    useEffect(() => {
        if (!order) {
            var val = {};
            notification.map((v) => (val[v.id] = false));
            setOrder(!val);
        }
    }, [order]);
    const handledropdown = (item) => {
        setOrder({ ...order, [item.id]: !order[item.id] });
    };
    const Navigate = useNavigate();
    const handlenavigate = () => {
        Navigate("/myprofile")
    }
    const [open, setOpen] = useState(true);
    const menu_profile = [
        { title: "Restaurant Information", url: "/Profile" },
        { title: "Restaurant Owner Information", url: "/ownerprofile" },
    ];
    const location = useLocation();
    useEffect(() => {
        setActive(location.pathname);
    }, [location]);
    return (
        <div className="layoutView w-full bg-white h-screen mt-14 lg:mt-0 lg:rounded-tr-[0px] lg:rounded-l-[50px] p-3 overflowhome">
            <div className="rounded-full px-6 py-3 bg-[#F4F8E2] border-[#D1D1D1] border-[1.5px]">
                <div className="flex flex-wrap justify-between align-middle items-center">
                    <div className="w-full md:w-3/6 textdashboard md:text-left">
                        <div className="text-[#4C4C4C] proflefont font-bold">{selectedMenu}</div>
                    </div>
                    <div className="w-full md:w-3/6 m-auto">
                        <div className="flex flex-wrap justify-center align-middle items-center md:justify-end">
                            <div className="w-1/5 w-md-1/5 flex justify-end justify-md-end">
                                <FaRegBell size={50} className="FaRegBell w-2/5 border-[2px] text-[#96C872] py-3 my-2 mx-2 rounded-lg border-[#ABD28E] cursor-pointer max-w-[50px] w-full duration-150 hover:text-[#588A7A]" onClick={() => setToggle(!toggle)} />
                            </div>
                            {toggle &&
                                <div>
                                    <div className="notificationstyle">
                                        <Disclosure>
                                            <div className="py-6 px-2  responsive_nav z-20 fixed top-0  lg:right-0  peer-focus:left-0 peer:transition shadow-[0px_5px_11px_#487164]">
                                                <div className="text-end"><BsX onClick={handleClose} className="fs-1" style={{ cursor: "pointer" }} /></div>
                                                <div className="px-3 pb-2 notifont">Notification</div>
                                                {notification.map((item, index) => {
                                                    return (
                                                        <div className="carddniyal">
                                                            <div className="flex justify-between">
                                                                <div>
                                                                    <div className="flex gap-3 mt-2">
                                                                        <div>
                                                                            <img src={profilelogo1} alt="profilelogo1" width={55} />
                                                                        </div>
                                                                        <div className="">
                                                                            <div className="Danial_font">{item.name}</div>
                                                                            <div className="m5font">you have get order , <span className="pizfont">{item.order}</span> </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="" >
                                                                    <button className="Assbtn px-3 py-1 my-4" onClick={(e) => handledropdown(item)}> {order[item.id] ? <FaEyeSlash /> : <FaEye />}</button>

                                                                </div>

                                                            </div>
                                                            {order[item.id] && (
                                                                <div>
                                                                    <hr />
                                                                    <div className="content_bspan my-2 text-start px-2"> {item.discription} </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </Disclosure>
                                    </div>

                                </div>
                            }
                            <div className="FaUser w-3/5 w-md-2/5 bg-white p-2 border-[1.5px] border-[#8C8C8C] rounded-full flex align-middle items-center duration-150 hover:scale-105 hover:shadown-[0px_0px_9px_#5a8d7d73]" onClick={handlenavigate}>
                                <FaUser size={35} className="FaUsericon text-[#8C8C8C] border-[1px] border-[#8C8C8C] p-1.5 rounded-full mx-2" />
                                <span className="text-black">
                                    {username}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto">
                <div className="contentPartreast bg-[#F4F8E2] border-[#D1D1D1] border-[1.5px] cardredieos">
                    <div className="btnflex">
                        {menu_profile.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link to={item.url}>
                                        <button key={index} className={active === `${item.url}` ? "Restaurantbtn py-2 px-4" : "Restaurantbtnunactive px-4 py-2"} >{item.title}</button>
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                    <Restaurant />
                </div>
            </div>
        </div>
    )
}
export default Profile
