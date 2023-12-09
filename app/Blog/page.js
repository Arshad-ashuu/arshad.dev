'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbars/Navbar'
import Sidebar from '../Components/Navbars/Sidebar'

function page() {
  const [mynews, setMynews] = useState([])
  const [isLoading, setisLoading] = useState(true)
    const fetchData=async ()=>{
      try{
      let res=await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b42beb0957b41128c87843558ef08df")
      let data=await res.json();
      setMynews(data.articles);
      setisLoading(false);
      }catch(error){
          console.log(error);
      }
    }
    
    useEffect(()=>{
      fetchData();
    },[])

    
  return (
    <>
    <div className=" sticky w-16 shrink-0  border-r border-slate-200 dark:border-slate-800 " >
   </div>
       {isLoading ? (
       
        <div className="flex items-center justify-center h-screen animate-bounce">
          
        <div className="rounded-md h-12 w-12  border-4 border-t-4  border-blue-500 animate-spin mr-8"></div>
        
        <h1>Loading...</h1>
         </div>
       
        ) : (
     <div className='min-h-screen flex '>
        <Sidebar/>
       <main className="">
         <Navbar/>
        <section className="overflow-hidden px-6 relative -z-10 lg:mb-30 lg:mb-20 mb-10">
              <div
                className=" overflow-hidden rounded-lg bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] lg:h-[400px] h-[160px]">
              </div>

              <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32 mt-[-40px] ">
                <div className="text-center">
                  <div
                    className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] lg:px-6 lg:py-10 py-4 px-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 lg:mt-[-150px]  backdrop-blur-[39px]">
                    <h1 className="lg:mt-9 lg:mb-7 lg:text-4xl font-bold tracking-tight text-pink-400 ">
                    <span className='font-[space]'> Explore Tomorrow's Tech:  </span><br/><span className="text-green-200 font-[act] ">Your Gateway to Innovation and Insight </span>
                    </h1>
                    </div>
                </div>
              </div>
              <div className=" sticky w-full h-[2.6px] border mt-[45px] border-slate-200 dark:border-slate-800 bg-slate-900  " >
             </div>
          
             <h1 className="lg:font-extrabold font-bold text-transparent lg:text-8xl text-[38px] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Latest Articles</h1>
      </section>
          <div className='lg:flex lg:gap-x-8 lg:gap-y-8 flex flex-wrap gap-y-4 p-7 '> 
            {mynews.map((news) => (
              <div key={Math.floor(Math.random() * 1000000)} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img className="rounded-t-lg" src="" alt="" />
                  </a>
                  <div className="p-5">
                      <a href={news.url}>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {news.title}</h5>
                      </a>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {news.publishedAt}</p>
                      
                  </div>
              </div>

            ))}
          </div>
          </main>
          </div>
      )}

    </>
  )
}

export default page