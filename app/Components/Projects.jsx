'use client'
import React from 'react'
import Sidebar from './Navbars/Sidebar'


function Projects() {
  return (
    <>
     <div className='min-h-screen flex '>
       <Sidebar/>
   
            
        <section>
              <h2 className="font-aspekta lg:text-3xl text-2xl font-[650]  flex justify-center mb-12 mt-6 text-green-500 font-[miln]">
                Some Of My Projects
               </h2>
           <div className="grid sm:grid-cols-2  md:grid-cols-1 lg:grid-cols-2 gap-5 lg:p-4 sm:p-1 sm:mb-28 pr-8 pl-4 mr-0">
              
               <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5">
                  <div className="flex flex-col h-full">
                    <div className="grow">
                       <div className="flex items-center justify-between">
                         <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                             <iframe src="https://giphy.com/embed/lHsYHsm1Jtg09ZRLoT" className='rounded-full w-14 h-14'></iframe>
                          </div>
                          <div className="text-xs inline-flex items-center font-medium bg-green-100/40 dark:bg-green-100/5 dark:text-green-400 text-green-600 rounded-full text-center px-2 h-5">
                                project
                          </div>
                          <div className="inline-flex text-sm  items-center font-medium bg-yellow-100/40 dark:bg-yellow-100/5 dark:text-red-400 hover:text-sky-500 text-yellow-600 rounded-full text-center px-2 h-5">
                                  <a href="https://zippy-cranachan-fb7dee.netlify.app/"  target="_blank" className='p-3'>Live</a>
                          </div>
                              </div>
                         <div className="text-lg font-aspekta font-[650] mb-1">
                              live talk chat
                              </div>
                              <a href="https://github.com/Arshad-ashuu/chat-app"  target="_blank" >
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                A personalized chat application where you can meet new people and have fun
                                <br/>
                                <span className='font-normal text-sm dark:text-green-400 text-green-600'>
                                built on : react/next , tailwind , firebase
                                </span>
                              </p>
                              </a>
                            </div>
                            <div className="text-sky-500 flex justify-end">
                              <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                              >
                                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                        
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <div className="flex items-center justify-between">
                                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                                  <img
                                    alt="Edcomposer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg={1}
                                    width={52}
                                    height={48}
                                    className="rounded-full h-10 w-18"
                                    src="https://cdn.dribbble.com/users/25514/screenshots/2016747/media/22a4a7d968851b1e99468036cddafca6.gif"
                                  
                                  />
                                </div>
                                
                              </div>
                              <div className="text-lg font-aspekta font-[650] mb-1">
                                Newzz web
                              </div>
                              <a  href='https://github.com/Arshad-ashuu/Newzz-web' target='_blank'>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 ">
                                A news web application where you can search for Articles and top news of different locations
                                <br/>
                                <span className='font-normal text-sm dark:text-green-400 text-green-600'>
                                built on : react/next , tailwind 
                                </span>
                              </p></a>
                            </div>
                            <div className="text-sky-500 flex justify-end">
                              <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                              >
                                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                  <div
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                        
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <div className="flex items-center justify-between">
                                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                                  <img
                                    alt="Edcomposer"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg={1}
                                    width={52}
                                    height={48}
                                    className="rounded-full h-10 w-18"
                                    src="./bgr.gif"
                                  
                                  />
                                </div>
                                <div className="inline-flex text-sm  items-center font-medium bg-yellow-100/40 dark:bg-yellow-100/5 dark:text-red-400 text-yellow-600 rounded-full text-center px-2 h-5">
                                  <a href="https://clinquant-sopapillas-f99be9.netlify.app/" className='p-2'>Live</a>
                                </div>
                              </div>
                              <div className="text-lg font-aspekta font-[650] mb-1">
                              Background Remover
                              </div>
                              <a  href='https://clinquant-sopapillas-f99be9.netlify.app/' target='_blank'>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 ">
                              Background remover website to remove background of any image 
                                <br/>
                                <span className='font-normal text-sm dark:text-green-400 text-green-600'>
                                built on : React , Tailwind ,Api
                                </span>
                              </p></a>
                            </div>
                            <div className="text-sky-500 flex justify-end">
                              <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                              >
                                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div 
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                        
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <div className="flex items-center justify-between">
                                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                                <iframe src="https://giphy.com/embed/TnhakOttwT0YXIBpna" className='w-14 h-14 rounded-full' allowFullScreen></iframe>
                                </div>
                                
                              </div>
                              <div className="text-lg font-aspekta font-[650] mb-1">
                                Movie hunts-x
                              </div>
                              <a href='https://github.com/Arshad-ashuu/movie-database' target='_blank'>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                movie database web application with latest and popular movie collection
                                <br/>
                                <span className='font-normal text-sm dark:text-green-400 text-green-600'>
                                  built on: react/vite , omdb api , tailwind
                                </span>
                              </p></a>
                            </div>
                            <div className="text-sky-500 flex justify-end">
                              <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                              >
                                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div 
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                          
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <div className="flex items-center justify-between">
                                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                                  <img
                                    alt="arshad.dev"
                                    loading="lazy"
                                    width={48}
                                    height={48}
                                    decoding="async"
                                    data-nimg={1}
                                    className="rounded-full"
                                    src="data:image/png;base64,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"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="inline-flex text-sm  items-center font-medium bg-yellow-100/40 dark:bg-yellow-100/5 dark:text-red-400 text-yellow-600 rounded-full text-center px-2 h-5">
                                  <a href="https://arshad-dev.vercel.app/" className='p-2'>Live</a>
                                </div>
                              </div>
                              <div className="text-lg font-aspekta font-[650] mb-1">
                                arshad.dev
                              </div><a href='https://github.com/Arshad-ashuu/arshad.dev' target='_blank'>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              my website with all my work portfolio,articles,blog,Resources
                              <br/>
                              <span className='font-normal text-sm dark:text-green-400 text-green-600'>
                                built on: react/next , tailwind
                              </span>
                              </p></a>
                            </div>
                            <div className="text-sky-500 flex justify-end">
                              <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                              >
                                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div 
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
        
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <div className="flex items-center justify-between">
                                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                                  <img
                                    alt="mensClub"
                                    loading="lazy"
                                    width={48}
                                    height={48}
                                    decoding="async"
                                    data-nimg={1}
                                    className="rounded-full"
                                    src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4roaL8wCxjLybfw-r1HxC3r1Ir7RihtCfCh-OsmL5RwgCJREZ'
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                                <div className="inline-flex text-sm  items-center font-medium bg-yellow-100/40 dark:bg-yellow-100/5 dark:text-red-400 text-yellow-600 rounded-full text-center px-2 h-5">
                                  <a href=" https://arshad-ashuu.github.io/mensClub-landingpage/" className='p-2'>Live</a>
                                </div>
                              </div>
                              <div className="text-lg font-aspekta font-[650] mb-1">
                                MensClub 
                              </div>
                              <a href='https://github.com/Arshad-ashuu/mensClub-landingpage' target='_blank'>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                This a simple landing page of mensClub for mens fashion ,shopping ,accessories , perfumes
                              </p></a>
                            </div>
                            <div className="text-sky-500 flex justify-end">
                              <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                              >
                                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div 
                          className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-5"
                          
                        >
                          <div className="flex flex-col h-full">
                            <div className="grow">
                              <div className="flex items-center justify-between">
                                <div className="h-10 w-10 flex items-center justify-center border border-slate-200 dark:border-slate-700 rounded-full mb-2">
                                  <img
                                    alt="LMFAO.tech"
                                    loading="lazy"
                                    width={48}
                                    height={48}
                                    decoding="async"
                                    data-nimg={1}
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vpUEttQ_Ew5DnNa61nIHMgX5qUSvT2sloVe5JDEmlD0hsyEJKAdBpQrl2foPzfFFwZU&usqp=CAU'
                                    className="rounded-full"
                                  style={{ color: "transparent" }}
                                  />
                                </div>
                                
                              </div>
                              <div className="text-lg font-aspekta font-[650] mb-1">
                                weather app
                              </div>
                              <a href='https://github.com/Arshad-ashuu/weather-app' target='_blank'>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              This weather application helps in finding different weather condition temperatures in different places
                              <br />
                              <span className='font-normal text-sm dark:text-green-400 text-green-600'>
                                built on: react , weather api
                              </span>
                              </p></a>
                            </div>
                            <div className="text-sky-500 flex justify-end">
                              <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={12}
                              >
                                <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
        </section>
               
       </div> 
    </>
  )
}

export default Projects
