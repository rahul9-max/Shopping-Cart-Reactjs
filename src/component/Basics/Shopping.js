import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

// to show the unique data,we use "Set" and to convert the data into an array we use spread operator
const specialData=[...new Set(Menu.map((newValue)=>{
 return newValue.category
})),
"All"
]

// there is a problem of 'Hot-Reloading' in "All"
console.log(specialData)
const Shopping = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [fullList,setfullList]=useState(specialData)
  // above mentioned special data contains the list of unique data

  console.log(menuData)

// 'Filter' method will remove all the unecessary data and it will show us 
// only that item which it has been asked to show
const filterItem=(categ)=>{
const updatedData=Menu.filter((newValue)=>{
  return newValue.category===categ
})
setMenuData(updatedData)
if(categ==="All")
{
  setMenuData(Menu)
  // return;
}
}
  return (
    <>
   
    <Navbar filProp={filterItem} allList={fullList}/>
      <MenuCard Data={menuData}/>
    </>
  );
};

export default Shopping;