import React from 'react'
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <header>
      <div className="w-full h-20 flex items-center p-[15px]">
        <div className="container mx-auto flex items-center px-4">
          <div className="w-32">
            <img src={logo} alt="logo" className="h-12" />
          </div>

          {/* headersearch start from here */}
          <div className="w-full sm:w-5/12">
            <div className="w-full h-[60px] border border-[#3bb77e] flex items-center py-2.5 px-3.5">
            <div className="selectDrop font-roboto cursor-pointer hover:text-brand-500">
  All categories
</div>
<div className='search'>
  
</div>
              {/* your search input or content */}
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
