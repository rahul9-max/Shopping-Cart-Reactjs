import React from "react";

const Navbar = ({filProp,allList}) => {
  return (
    <>
      <nav className="navbar">
        <div className="button">
          {
            allList.map((newValue)=>{
              return (
                <button className="button-item"
                onClick={()=>filProp(newValue)}>
                {newValue}
                </button>
              )
            })
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;