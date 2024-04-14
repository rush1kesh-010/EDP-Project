import React from "react";

export default function Header() {
  return (
   
      <nav class="bg-white my-2">
  <div class="mx-auto max-w-7.5xl  sm:px-6 lg:px-8">
    <div class="relative flex h-12 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        {/* <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
        
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
      </div>
      <div class="flex flex-shrink-0 items-center">
         <h1 className="text-3xl font-bold text-[#0174cf]">EDP</h1>
        </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
       
        <div class="hidden   sm:ml-6 sm:block">
          <div class="flex  space-x-8">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#" class=" text-[#0174cf] rounded-md px-2 py-2 text-base font-medium" aria-current="page">Home </a>
            <a href="#" class=" text-[#0174cf] rounded-md px-3 py-2 text-base font-medium" aria-current="page">Patient Profile</a>
            <a href="#" class=" text-[#0174cf] rounded-md px-3 py-2 text-base font-medium" aria-current="page">Switch Account</a>
           
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       <h1 className="text-sm">Darrell Steward</h1>

        {/* <!-- Profile dropdown --> */}
        <div class="relative ml-3">
          <div>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

          {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
        
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" class=" text-[#0174cf] rounded-md px-2 py-2 text-sm font-medium" aria-current="page">Home </a>
            <a href="#" class=" text-[#0174cf] rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Patient Profile</a>
            <a href="#" class=" text-[#0174cf] rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Switch Account</a>
    </div>
  </div>
</nav>

   
  );
}
