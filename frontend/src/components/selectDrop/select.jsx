import React,{useState} from "react";

const Select =()=>{

const [isOpenSelect,setisOpenSelect]=useState(false);
const [selectedIndex,setselectedIndex]=useState(0);

const openSelect=()=>{
    setisOpenSelect(!isOpenSelect);
}
const closeSelect=(index)=>{
    setisOpenSelect(!isOpenSelect);
}

    return(


        <div className="relative w-[40%] text-[16px] font-medium cursor-pointer after:content-[''] after:absolute after:top-[5px] after:right-0 after:w-[1px] after:h-[30px] after:bg-[rgba(0,0,0,0.2)]">
  <span onClick={openSelect}>All Categories</span>
{
    isOpenSelect===true &&

    <div className="absolute top-[160%] left-[-20px] w-[300px] z-[100] bg-white p-[15px] shadow-[0_3px_6px_rgba(0,0,0,0.2)]">
          
        <div className="searchField">
          <input
 type="text"
            className="w-full h-[50px] border border-[#bce3c9] outline-none p-[0px_15px]"
          />
          <ul className="searchResults w-full mt-[10px] p-[10px_0px] max-h-[300px] overflow-y-scroll">
            <li onClick={()=>closeSelect(0)}>All Categories</li>
            <li  onClick={()=>closeSelect(1)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Milks and Dairies
            </li>
            <li onClick={()=>closeSelect(2)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Wines & Drinks
            </li>
            <li onClick={()=>closeSelect(3)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Clothing & Beauty
            </li>
            <li onClick={()=>closeSelect(4)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Fresh Seafood
            </li>
            <li onClick={()=>closeSelect(5)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Pet Foods & Toy
            </li>
            <li onClick={()=>closeSelect(6)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Fast Food
            </li>
            <li onClick={()=>closeSelect(7)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Baking Material
            </li>
            <li onClick={()=>closeSelect(8)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Vegetables
            </li>
            <li onClick={()=>closeSelect(9)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Fresh Fruits
            </li>
            <li onClick={()=>closeSelect(10)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Bread and Juice
            </li>
            <li onClick={()=>closeSelect(11)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Milks and Dairies
            </li>
            <li onClick={()=>closeSelect(12)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Wines & Drinks
            </li>
            <li onClick={()=>closeSelect(13)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Clothing & Beauty
            </li>
            <li onClick={()=>closeSelect(14)} className="list-none text-[16px] w-full p-[10px] hover:bg-[#3bb77e] hover:text-white cursor-pointer">
              Fresh Seafood
            </li>
          </ul>
        </div>
      </div>
}

  
      </div>
    )
}
export default Select;