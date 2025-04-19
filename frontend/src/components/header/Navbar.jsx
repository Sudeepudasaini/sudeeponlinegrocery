import React from 'react'
import logo from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';


export default function Navbar() {
  return (
    <header>
      <div className="w-full h-20 flex items-center p-[15px]">
        <div className="container mx-auto flex items-center px-4">
          <div className="w-32">
            <img src={logo} alt="logo" className="h-20" />
          </div>

          {/* headersearch start from here */}
          <div className="w-full sm:w-5/12">
            <div className="w-full h-[60px] border border-[#3bb77e] flex items-center py-[10px] px-[15px]">
            <Select/>
              {/* Category Dropdown */}
              

              {/* Search Input */}
              <div className="relative w-[82%] pl-[30px]">
                <input
                  type="text"
                  placeholder="Search for items.."
                  className="w-full h-[50px] border-0 outline-none text-[18px] font-roboto"
                />
                <SearchIcon className="absolute top-[12px] right-[7px] cursor-pointer text-gray-600  opacity-50 text-[30px] " />
              </div>

            </div>
          </div>



           {/* headersearch start from here */}

           <div className="w-full sm:w-5/12 ml-4">
           <Select/>
</div>
        </div>
      </div>
    </header>
  )
}
