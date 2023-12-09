import React from 'react'
import Sidebar from './Navbars/Sidebar'


function Resume() {
  return (
    <>
    <div className='min-h-screen flex '>
   <Sidebar/>
    <main className="">
   
<div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-24 lg:ml-[210px] lg:mr-[300px]">
  <img src="profile.jpg" alt="profile" width="312" height="400" className="lg:rounded-l-lg rounded-t-lg order-1 "/>
  <div className="max-w-sm p-[30px] bg-white border border-gray-200 lg:rounded-r-lg rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:h-[414px] order-1">
    <a href="#">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white lg:mt-24">Mohammad Arshad</h1>
      <h2 className="text-green-500">I'm a Full-stack developer from India</h2>
    </a>
    <h4>Glad to have you here</h4>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here is my resume </p>
    <a href="./myresume.pdf" download="arshad_resume" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Download
      <svg className="w-6 h-6 animate-bounce text-white pl-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </a>
  </div>
</div>
</main>
</div>

    </>
  )
}

export default Resume