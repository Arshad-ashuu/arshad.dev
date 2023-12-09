'use client'
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Sidebar from '../Components/Navbars/Sidebar';
import Navbar from '../Components/Navbars/Navbar';

async function fetchDataFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "Blog"));
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    
    console.error("Error fetching data from Firestore :)", error);
    return [];
  }
}

function Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const data = await fetchDataFromFirestore();

        if (isMounted) {
          setBlogs(data);
          setLoading(false);
        }
      } catch (error) {
        // Handle the error, e.g., log it or show an error message to the user.
        console.error("Error in fetchData:", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
     
      isMounted = false;
    };
  }, []);

  
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen animate-bounce">
        <div className="rounded-md h-12 w-12  border-4 border-t-4 border-blue-500 animate-spin"></div>
         </div>
        ) : (
     <div className='min-h-screen flex '>
        <Sidebar/>
       <main className=" ">
         <Navbar/>
        <section className="overflow-hidden px-6 relative -z-10 lg:mb-30 mb-20">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] lg:h-[400px] h-[160px]">
              </div>

              <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32 mt-[-40px] ">
                <div className="text-center">
                  <div
                    className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] lg:px-6 lg:py-10 py-4 px-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 lg:mt-[-150px]  backdrop-blur-[39px]">
                    <h1 className="lg:mt-9 lg:mb-7 lg:text-4xl font-bold tracking-tight text-pink-400 ">
                    <span className='font-[space]'> Resources <span className='text-slate-200'>and</span> Roadmaps:  </span><br/><span className='font-[act] text-slate-200 '>to become </span><span className="inline-flex relative  text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4 font-[act]  "> fullstack developer</span>
                    </h1>
                    </div>
                </div>
              </div>
        
      </section>
          <div className='grid sm:grid-cols-2  md:grid-cols-1 lg:grid-cols-2 gap-5'> 
            {blogs.map((blog) => (
              <div key={Math.floor(Math.random()*1000)} className="">
                 
                  <a href={blog.url} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <img className=" w-[300px] rounded-t-lg h-[280px] object-contain rounded-none rounded-s-lg" src={blog.imgurl} alt=""/>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.tittle}</h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.desc}</p>
                      </div>
                  </a>   
              </div>

            ))}
          </div>
          </main>
          </div>
      )}
    </>
  );
}

export default Page;
