import React, { useEffect, useState } from "react";
import '../styles/Menu.scss';
import { FaEyeSlash, FaRegBell, FaSave, FaTrashAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import profilelogo1 from "../assets/images/profilelogo1.png"
import { FaEye } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FormGroup, Input } from "reactstrap";
import { Disclosure } from "@headlessui/react";
import { BsX } from "react-icons/bs";
import { notification } from "../Mock/DashboardMock"
import { FaAngleRight } from "react-icons/fa6";
import { BsXCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
const MenuEditor = ({ childran }) => {
    const [selectedMenu, setSelectedMenu] = useState("Menu Profile");
    const [username, setUsername] = useState('');
    useEffect(() => {
        setUsername('Joe Biden');
    }, []);
    const handleMenuClick = (menuTitle) => {
        setSelectedMenu(menuTitle);
    };
    const menu = [
        { title: "Item Availability", url: "/Menu" },
        { title: "Menu Editor", url: "/Menueditor" },
        { title: "History of menu changes", url: "/Menuhistory" },
    ];
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState(null)
    const location = useLocation();
    useEffect(() => {
        setActive(location.pathname);
    }, [location]);
    const [state, setState] = useState(true);
    const [page, setPage] = useState(0)
    const handleClick = () => {
        setPage(1)
    }
    const [categories, setCategories] = useState([
        {
            id: 0,
            name: "South Indian",
            submenu: ["South Indian", "Gulab Jumun", "Bread Halwa", "Rasmalai", "Moong Dal"]
        },
        {
            id: 1,
            name: "Dessert",
            submenu: ["Dessert", "Gulab Jumun", "Bread Halwa", "Rasmalai", "Moong Dal"]
        },
        {
            id: 2,
            name: "Lunch",
            submenu: ["Lunch", "Gulab Jumun", "Bread Halwa", "Rasmalai", "Moong Dal"]
        },
        {
            id: 3,
            name: "Combo",
            submenu: ["Combo", "Gulab Jumun", "Bread Halwa", "Rasmalai", "Moong Dal"]
        },
        {
            id: 5,
            name: "icecreams",
            submenu: ["icecreams", "Gulab Jumun", "Bread Halwa", "Rasmalai", "Moong Dal"]
        },
        {
            id: 6,
            name: "icecreams",
            submenu: ["Gulab Jumun", "Bread Halwa", "Rasmalai", "Moong Dal", "icecreams",]
        },
    ]);
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
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
    const [editCategory, setEditCategory] = useState("");
    const [editItem, setEditItem] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [isNewItem, setIsNewItem] = useState(false);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [isAddingItem, setIsAddingItem] = useState(false);
    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
        setEditCategory("");
        setIsEditing(false);
        setIsAddingItem(false);
        if (categoryId !== selectedCategory) {
            const selectedCategoryItems = categories.find(cat => cat.id === categoryId)?.submenu || [];
            setSelectedItems(selectedCategoryItems);
        } else {
            setSelectedItems([]);
        }
    };

    const handleDeleteCategory = (categoryId) => {
        setCategories(prev => prev.filter(cat => cat.id !== categoryId));
        setSelectedCategory(null);
        setSelectedItems([]);
    };

    const handleAddCategory = () => {
        setIsNewCategory(true);
        setIsEditing(true);
        setIsAddingItem(false);
        setIsAddingCategory(true);
    };

    const handleSaveEditCategory = (category) => {
        if (isNewCategory) {
            setCategories(prev => [...prev, { id: prev.length, name: editCategory, submenu: [] }]);
        } else {
            setCategories(prev => {
                const updatedCategories = prev.map(cat => {
                    if (cat.id === category.id) {
                        return { ...cat, name: editCategory };
                    }
                    return cat;
                });
                return updatedCategories;
            });
        }
        setEditCategory("");
        setIsEditing(false);
        setIsNewCategory(false);
        setIsAddingCategory(false);
    };

    const handleAddItem = () => {
        setIsAddingItem(true);
        setIsEditing(true);
        setIsNewCategory(false);
        setIsAddingCategory(false);
    };

    const handleAddNewItem = () => {
        if (editItem.trim() !== "") {
            setCategories(prev => {
                const updatedCategories = prev.map(cat => {
                    if (cat.id === selectedCategory) {
                        return { ...cat, submenu: [...cat.submenu, editItem] };
                    }
                    return cat;
                });
                return updatedCategories;
            });
            setEditItem("");
        }
    };

    useEffect(() => {
        const initialCategory = categories.find(cat => cat.name === "South Indian");
        if (initialCategory) {
            setSelectedCategory(initialCategory.id);
            setSelectedItems(initialCategory.submenu);
        }
    }, [categories]);
    return (
        <div className="layoutView w-full bg-white h-screen mt-14 lg:mt-0 rounded-tl-[50px] rounded-tr-[50px] lg:rounded-tr-[0px] lg:rounded-l-[50px] p-3 overflowhome">
            <div className="rounded-full px-6 py-3 bg-[#F4F8E2] border-[#D1D1D1] border-[1.5px]">
                <div className="flex flex-wrap justify-between align-middle items-center">
                    <div className="w-full md:w-3/6 textdashboard md:text-left">
                        <h1 className="text-[#4C4C4C] proflefont font-bold">{selectedMenu}</h1>
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
                                                <div className="text-end"><BsX onClick={() => setToggle(!toggle)} className="fs-1" style={{ cursor: "pointer" }} /></div>
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
                            <div className="FaUser w-3/5 w-md-2/5 bg-white p-2 border-[1.5px] border-[#8C8C8C] rounded-full flex align-middle items-center duration-150 hover:scale-105 hover:shadown-[0px_0px_9px_#5a8d7d73]">
                                <FaUser size={35} className="FaUsericon text-[#8C8C8C] border-[1px] border-[#8C8C8C] p-1.5 rounded-full mx-2" />
                                <span className="text-black">
                                    {username}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashbordflex m-auto">
                <div className="contentPart bg-[#F4F8E2] border-[#D1D1D1] border-[1.5px] menuwidth">
                    <div className="cardmenu">
                        <div className="btnflex">
                            {menu.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Link to={item.url}>
                                            <button key={index} className={active === `${item.url}` ? "Restaurantbtn py-2 px-4" : "Restaurantbtnunactive px-4 py-2"} >{item.title}</button>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="menuflex">
                            <div className="cardmenu18">
                                <div className='toprestmenu py-1'>CATEGORY    I     18</div>
                                <div style={{ overflow: "scroll", overflowX: "hidden", height: "60vh" }}>
                                    <div className="addflex">
                                        <button className="addbtnrest" onClick={handleAddCategory} disabled={isAddingItem}>+ Add New</button>
                                        <Input className="menuinpu" placeholder="Search" prefix={<IoMdSearch />} />
                                    </div>
                                    {categories.map((cat, index) => (
                                        <div key={index} className={selectedCategory === cat.id ? "activeiconsouth" : ""}>
                                            <div className="mt-4 ms-2">
                                                {selectedCategory === cat.id && <BsXCircleFill className="fs-4" style={{ color: "#588A7A", cursor: "pointer" }} onClick={() => handleDeleteCategory(cat.id)} />}
                                            </div>
                                            <div
                                                className={` ${selectedCategory === cat.id ? 'active southmenuactive ' : 'southmenuedit'}`}
                                            >
                                                <div className="d-flex justify-content-between">
                                                    <div className={selectedCategory === cat.id ? 'active' : ''}>{cat.name}</div>
                                                    <div>
                                                        <FaAngleRight className="fs-4" onClick={() => handleCategoryClick(cat.id)} style={{ cursor: "pointer" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {isEditing && isAddingCategory && // Check if adding category mode is active
                                        <>
                                            <div
                                                className={` ${selectedCategory ? 'active southmenuactive ' : 'southmenuedit'}`}>
                                                <div className="Entermenunamefont py-1 mb-1" >Enter Your Menu</div>
                                                <div className="d-flex justify-content-between gap-2">
                                                    <Input
                                                        type="text"
                                                        value={editCategory}
                                                        onChange={(e) => setEditCategory(e.target.value)}
                                                        className="menuinpuedit form-control"
                                                    />
                                                    <button className="savebtnmenuedit px-3" onClick={() => handleSaveEditCategory(selectedCategory)}>
                                                        {isNewCategory ? "save" : <FaEdit />}
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            <div className="cardmenu181">
                                <div className='toprest py-1'>Item   I   5</div>
                                <div className="addflex">
                                    <button className="addbtnrest" onClick={handleAddItem} disabled={isNewCategory}>+ Add New</button>
                                    <Input className="menuinpu" placeholder="Search" prefix={<IoMdSearch />} />
                                </div>
                                {selectedCategory !== null &&
                                    <div>
                                        {categories.find(item => item.id === selectedCategory).submenu.map((item, index) => (
                                            <div key={index} className={`southmenuitem ${selectedItems.includes(item) ? 'active' : ''}`}>
                                                {item}
                                                <div><FaEdit /></div>
                                            </div>
                                        ))}
                                    </div>
                                }
                                {isEditing && isAddingItem &&
                                    <>
                                        <div
                                            className={` ${selectedCategory ? 'active southmenuitemedit ' : 'southmenuitemedit'}`}>
                                            <div className="Entermenunamefont py-1 mb-1" >Enter New Item</div>
                                            <div className="d-flex justify-content-between gap-2">
                                                <Input
                                                    type="text"
                                                    value={editItem}
                                                    onChange={(e) => setEditItem(e.target.value)}
                                                    className=" form-control"
                                                />
                                                <button className="savebtnmenuedit px-3" onClick={handleAddNewItem}>
                                                    save
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuEditor
