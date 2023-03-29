import './App.css'
import React from 'react'
const App = () => {
 return (
   <React.Fragment>
     <header className="p-4 flex items-center justify-between">
       <a href="" className="flex items-center">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth="1.5"
           stroke="currentColor"
           class="w-6 h-6 -rotate-90"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
           />
         </svg>
         <span className="font-bold text-xl">airbnb</span>
       </a>
       <div className="flex gap-2 items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm shadow-gray-300">
         <div>Anywhere</div>
         <div className="h-5 border-l border-gray-300"></div>
         <div>Any week</div>
         <div className="h-5 border-l border-gray-300"></div>
         <div>Add guests</div>
         <button className="bg-primary text-white rounded-full h-8 w-8 flex justify-center items-center">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
             />
           </svg>
         </button>
       </div>
       <div className="flex gap-2 items-center px-4 py-2 border border-gray-300 rounded-full shadow-sm shadow-gray-300">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 24 24"
           strokeWidth={1.5}
           stroke="currentColor"
           className="w-6 h-6"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
           />
         </svg>
         <div className="bg-gray-500 text-white rounded-full p-1">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="w-6 h-6"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
             />
           </svg>
         </div>
       </div>
     </header>
   </React.Fragment>
 );
}
export default App


