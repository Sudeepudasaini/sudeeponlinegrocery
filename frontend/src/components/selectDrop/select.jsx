import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import '../selectDrop/select.css';
const Select = () => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedItem, setselectedItem] = useState('All Categories');

  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };

  const closeSelect = (index, name) => {
    setselectedIndex(index);
    setisOpenSelect(false);
    setselectedItem(name);
  };

  return (
    <div className="relative w-[40%] text-[16px] font-medium cursor-pointer after:content-[''] after:absolute after:top-[5px] after:right-0 after:w-[1px] after:h-[30px] after:bg-[rgba(0,0,0,0.2)]">
      <span onClick={openSelect}>
        {selectedItem}
        <KeyboardArrowDownIcon className="relative top-[10px] right-[-8px] text-[25px]" />
      </span>

      {isOpenSelect && (
        <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
          <div className="absolute top-[160%] left-[-20px] w-[300px] z-[100] bg-white p-[15px] shadow-[0_3px_6px_rgba(0,0,0,0.2)]">
            <div className="searchField">
              <input
                type="text"
                 placeholder="Search here..."
                className="w-full h-[50px] border border-[#bce3c9] outline-none p-[0px_15px]"
              />
              <ul className="searchResults w-full mt-[10px] p-[10px_0px] max-h-[300px] overflow-y-scroll">
                <li onClick={() => closeSelect(0, 'All Categories')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 0 ? 'bg-[#f1f1f1]' : ''}`}>All Categories</li>
                <li onClick={() => closeSelect(1, 'Milks and Dairies')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 1 ? 'bg-[#f1f1f1]' : ''}`}>Milks and Dairies</li>
                <li onClick={() => closeSelect(2, 'Wines & Drinks')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 2 ? 'bg-[#f1f1f1]' : ''}`}>Wines & Drinks</li>
                <li onClick={() => closeSelect(3, 'Clothing & Beauty')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 3 ? 'bg-[#f1f1f1]' : ''}`}>Clothing & Beauty</li>
                <li onClick={() => closeSelect(4, 'Fresh Seafood')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 4 ? 'bg-[#f1f1f1]' : ''}`}>Fresh Seafood</li>
                <li onClick={() => closeSelect(5, 'Pet Foods & Toy')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 5 ? 'bg-[#f1f1f1]' : ''}`}>Pet Foods & Toy</li>
                <li onClick={() => closeSelect(6, ' Fast Food')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 6 ? 'bg-[#f1f1f1]' : ''}`}>Fast Food</li>
                <li onClick={() => closeSelect(7, 'Baking Material')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 7 ? 'bg-[#f1f1f1]' : ''}`}>Baking Material</li>
                <li onClick={() => closeSelect(8, 'Vegetables')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 8 ? 'bg-[#f1f1f1]' : ''}`}>Vegetables</li>
                <li onClick={() => closeSelect(9, 'Fresh Fruits')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 9 ? 'bg-[#f1f1f1]' : ''}`}>Fresh Fruits</li>
                <li onClick={() => closeSelect(10, 'Bread and Juice')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 10 ? 'bg-[#f1f1f1]' : ''}`}>Bread and Juice</li>
                <li onClick={() => closeSelect(11, ' Milks and Dairies')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 11 ? 'bg-[#f1f1f1]' : ''}`}>Milks and Dairies</li>
                <li onClick={() => closeSelect(12, 'Wines & Drinks')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 12 ? 'bg-[#f1f1f1]' : ''}`}>Wines & Drinks</li>
                <li onClick={() => closeSelect(13, 'Clothing & Beauty')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 13 ? 'bg-[#f1f1f1]' : ''}`}>Clothing & Beauty</li>
                <li onClick={() => closeSelect(14, 'Fresh Seafood')} className={`list-none text-[16px] text-black w-full p-[10px] cursor-pointer hover:bg-[#3bb77e] hover:text-white ${selectedIndex === 14 ? 'bg-[#f1f1f1]' : ''}`}>Fresh Seafood</li>
              </ul>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Select;
