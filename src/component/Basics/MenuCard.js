import React,{useState} from "react";
// import "./style.css";

const MenuCard = ({Data}) => {
    console.log(Data);
  return (
    <>
      <section className="main-container">
       
{Data.map((newValue)=>{
  const { id, name, category, image, description } = newValue;
return(
  <>
  <div className="card-container" key={newValue.id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author ">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description ">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  {/* <span className="card-tag  subtle">Order Now</span> */}
                </div>
              </div>
  </>
)
})}
      </section>
    </>
  );
};

export default MenuCard;