import React, {  useEffect, useState } from "react";
import '../styles/Dashbord.scss'
import SidebarMenu from "./SidebarMenu";

const Layout = ({ children }) => {
    const [open, setOpen] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState("Dashboard");
    const [username, setUsername] = useState('');
    useEffect(() => {
        setUsername('Joe Biden');
    }, []);
    const [toggle, setToggle] = useState(false)
    const handleMenuClick = (menu) => {
        console.log(menu)
        // SessionStorageService.setMenuTitle(menu);
        // onMenuClick(menu);
    };
    return (
        <div>
            <div className="dashbord flex bg-[#5A8D7D]" >
                <SidebarMenu open={open} setOpen={setOpen} />
                    {children}
                    {/*<div className="rounded-full px-6 py-3 bg-[#F4F8E2] border-[#D1D1D1] border-[1.5px]">
                        <div className="flex flex-wrap justify-between align-middle items-center">
                            <div className="w-full md:w-3/6 text-center md:text-left">
                                <h1 className="text-[#4C4C4C] text-lg font-bold">{selectedMenu}</h1>
                            </div>
                            <div className="w-full md:w-3/6 m-auto">
                                <div className="flex flex-wrap justify-center align-middle items-center md:justify-end">
                                    <div className="w-1/5 w-md-1/5 flex justify-end justify-md-end" style={{ position: "relative", zIndex: "10" }}>
                                        <FaRegBell size={50} className="FaRegBell w-2/5 border-[2px] text-[#96C872] py-3 my-2 mx-2 rounded-lg border-[#ABD28E] cursor-pointer max-w-[50px] w-full duration-150 hover:text-[#588A7A]" onClick={() => setToggle(!toggle)} />
                                    </div>
                                    {toggle &&
                                        <div className="responsive_nav">
                                            <div className="px-3 pt-5 mt-5 notifont">Notification</div>
                                            <div className="carddniyal">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex gap-3 mt-2">
                                                            <div>
                                                                <img src={profilelogo1} alt="profilelogo1" width={55} />
                                                            </div>
                                                            <div className="">
                                                                <div className="Danial_font">Danial</div>
                                                                <div className="m5font">you have get order , <span className="pizfont">chicken pizza</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="Assbtn px-3 py-1 my-4"><FaEye /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carddniyal">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex gap-3 mt-2">
                                                            <div>
                                                                <img src={profilelogo1} alt="profilelogo1" width={55} />
                                                            </div>
                                                            <div className="">
                                                                <div className="Danial_font">Danial</div>
                                                                <div className="m5font">you have get order , <span className="pizfont">chicken pizza</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="Assbtn px-3 py-1 my-4"><FaEye /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carddniyal">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex gap-3 mt-2">
                                                            <div>
                                                                <img src={profilelogo1} alt="profilelogo1" width={55} />
                                                            </div>
                                                            <div className="">
                                                                <div className="Danial_font">Danial</div>
                                                                <div className="m5font">you have get order , <span className="pizfont">chicken pizza</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="Assbtn px-3 py-1 my-4"><FaEye /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carddniyal">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex gap-3 mt-2">
                                                            <div>
                                                                <img src={profilelogo1} alt="profilelogo1" width={55} />
                                                            </div>
                                                            <div className="">
                                                                <div className="Danial_font">Danial</div>
                                                                <div className="m5font">you have get order , <span className="pizfont">chicken pizza</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="Assbtn px-3 py-1 my-4"><FaEye /></button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="carddniyal">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex gap-3 mt-2">
                                                            <div>
                                                                <img src={profilelogo1} alt="profilelogo1" width={55} />
                                                            </div>
                                                            <div className="">
                                                                <div className="Danial_font">Danial</div>
                                                                <div className="m5font">you have get order , <span className="pizfont">chicken pizza</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="Assbtn px-3 py-1 my-4"><FaEye /></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carddniyal">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <div className="flex gap-3 mt-2">
                                                            <div>
                                                                <img src={profilelogo1} alt="profilelogo1" width={55} />
                                                            </div>
                                                            <div className="">
                                                                <div className="Danial_font">Danial</div>
                                                                <div className="m5font">you have get order , <span className="pizfont">chicken pizza</span> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="Assbtn px-3 py-1 my-4"><FaEye /></button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                    <div className="FaUser w-3/5 w-md-2/5 bg-white p-2 border-[1.5px] border-[#8C8C8C] rounded-full flex align-middle items-center duration-150 hover:scale-105 hover:shadown-[0px_0px_9px_#5a8d7d73]">
                                        <FaUser size={35} className="FaUsericon text-[#8C8C8C] border-[1px] border-[#8C8C8C] p-1.5 rounded-full mx-2" />
                                        <span className="text-black">
                                            {username}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                                </div>*/}
                        {/*<div className="contentPart bg-[#F4F8E2] border-[#D1D1D1] border-[1.5px] layoutwidth">
                            <ProfilePart />
                        </div>
                        <div className="contentPart bg-[#E9FCDB] border-[#D1D1D1] border-[1.5px] layoutwidth1">
                            <div>
                                <div className="flex justify-center"><img
                                    src={cooking}
                                    width={170}
                                    height={124}
                                    alt="Picture of the author"
                                /></div>
                                <div className="rounded-[30px] px-6 py-3 bg-[#588A7A] border-[#ABD28E] border-[1px] w-5/5" style={{ marginTop: "-1rem" }}>
                                    <div className="flex justify-between">
                                        <div>
                                            <div className="text-[#FFF] text-sm font-bold pt-1">Try Premium Version</div>
                                            <div className="getfont">You will get more feature here</div>
                                        </div>
                                        <div><button className="rigtbtnbg px-4 mt-2"><FaLongArrowAltRight style={{ fontSize: "1.5rem" }} /></button></div>
                                    </div>

                                </div>
                                <div className="defont py-1">Delivery Employee</div>
                                <div className="flex justify-between">
                                    <div>
                                        <div className="flex gap-1 mt-2">
                                            <div>
                                                <img src={profilelogo1} alt="profilelogo1" />
                                            </div>
                                            <div className="pt-2">
                                                <div className="nameravifont">Ravi Kumar</div>
                                                <div className="m5font">5m away</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="Assbtn px-3 py-1 my-4">Assign</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <div className="flex gap-1 mt-2">
                                            <div>
                                                <img src={profilelogo1} alt="profilelogo1" />
                                            </div>
                                            <div className="pt-2">
                                                <div className="nameravifont">siva</div>
                                                <div className="m5font">5m away</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="Assbtn px-3 py-1 my-4">Assign</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <div className="flex gap-1 mt-2">
                                            <div>
                                                <img src={profilelogo1} alt="profilelogo1" />
                                            </div>
                                            <div className="pt-2">
                                                <div className="nameravifont">Mani</div>
                                                <div className="m5font">5m away</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="Assbtn px-3 py-1 my-4">Assign</button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        <div className="flex gap-1 mt-2">
                                            <div>
                                                <img src={profilelogo1} alt="profilelogo1" width={59} />
                                            </div>
                                            <div className="pt-2">
                                                <div className="nameravifont">Rokesh</div>
                                                <div className="m5font">5m away</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="Assbtn px-3 py-1 my-4">Assign</button>
                                    </div>
                                </div>
                            </div>
                                </div>*/}
            </div>
        </div>
    );
};

export default Layout;



