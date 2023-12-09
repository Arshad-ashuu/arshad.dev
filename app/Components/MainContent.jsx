import React from 'react'
import Navbar from './Navbars/Navbar'
import Sidebar from './Navbars/Sidebar'
import Footer from './Footer'

function MainContent() {
 
  return (
    <>
    
     <div className='min-h-screen flex '>
        <Sidebar/>
        <main>
          <Navbar/>
        
 <div className=" w-full h-full max-w-[1072px] mx-auto flex flex-col mt-16 lg:ml-9 ml-3 mr-3 pr-8">
            {/* top section */}
            <section>
              <div className="max-w-[700px]">
                <div className="pt-8 pb-10">
                  
                  <video width="1500" height="500" autoPlay loop className='border rounded-2xl border-none'>
                    <source src="/banner.mp4" type="video/mp4" />
                  </video>

                  <p className="font-aspekta mb-2 mt-3 text-2xl font-medium">
                    Hi👋🏻, I'm{" "}
                    <span className=" text-sky-500 after:bg-sky-500 ">
                      Mohammad Arshad
                    </span>
                  </p>
                  <h1 className="h1 font-aspekta mb-5 text-4xl font-bold">
                    I am a {" "}
                    <span className="inline-flex relative  text-green-600 before:absolute before:inset-0 before:bg-green-200 dark:before:bg-green-500 before:opacity-10 before:-z-10 before:-rotate-1 before:translate-y-1/4">
                      full-stack
                    </span>{" "}
                    <span className="text-pink-400"> developer 🚀</span>
                  </h1>
                  <p className="text-lg font-normal text-slate-500 dark:text-slate-400">
                    Developer, @intern CodSoft ,I Love listening Music 
                    and Student at Bhanavs vivekananda college. I play read, write and travel
                    for fun.
                  </p>
                  <br/>
                  <div>
                  <a href="/MyResume" className='rounded-lg px-4 py-2 bg-sky-400'>Resume</a></div>
              
                
                </div>
              </div>
            </section>
            <div  className='mb-6'>
              <ul>
                  <li className="flex flex-wrap gap-10 mt-4 text-slate-500 dark:text-slate-400">
                      <a
                        href="https://github.com/arshad-ashuu"
                        className="flex gap-2 items-center hover:scale-125"
                      >
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_9914_10)">
                            <path
                              d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                              fill="currentColor"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_9914_10">
                              <rect width={24} height={24} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com/Arshad_1_0"
                        className="flex gap-2 items-center hover:scale-125"
                      >
                        
                      <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24" 
                       version="1.1"
                       fill="none"
                        
                          strokeWidth="1.2"
                          stroke="currentColor"
                          className="w-7 h-7"
                       >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>

                      </a>
                      <a
                        href="www.linkedin.com/in/mohammad-arshad-b47b60294"
                        className="flex gap-2 items-center hover:scale-125"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="currentColor"
                          height={30}
                          width={30}
                          version="1.1"
                          id="Capa_1"
                          viewBox="0 0 45.959 45.959"
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489    c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733    C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123    C8.729,6.477,8.416,7.256,7.847,7.811z" />
                              <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z" />
                              <path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711    c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67    C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797    c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473    c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z" />
                            </g>
                          </g>
                        </svg>
                      </a>
                     
                      <a
                        href="mailto:mohammadarshad01474@gmail.com"
                        className="flex gap-2 items-center hover:scale-125"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                          />
                        </svg>
                      </a>
                 </li>
                 
               </ul>
            </div>
            
           <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
              <div className="grow">
                <div className="max-w-[700px]">
                  <div className="space-y-10">
                    <h2 className="font-aspekta text-xl font-[650] mb-5">
                      Some Of My Projects
                    </h2>
                    {/* projects*/}
                    <section>
                      <div className="grid sm:grid-cols-2  md:grid-cols-1 lg:grid-cols-2 gap-5">

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
                                  <a href="/" className='p-2'>Live</a>
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
                </div>
              </div> 

              <aside className="md:w-[240px] lg:w-[300px] shrink-0">
                <div className="space-y-6">
                  <div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-full overflow-hidden rounded-2xl"
                      href="https://open.spotify.com/playlist/6ol2xKhufTyr2YJzgKX6xh?si=d09e159cdbc44847"
                    >
                      <span className="absolute inset-0 -z-10">
                        <img
                          src="https://cdn.wallpapersafari.com/73/36/kjoK1u.png"
                          className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50"
                          alt="Album cover art"
                        />
                      </span>
                      <span className="flex flex-1 flex-col justify-between p-6 text-white">
                        <span className="flex justify-between" />
                        <div className="space-y-0.5">
                          <h2 className="font-title font-bold">
                            <span className="font-medium">playlist:</span> songs I was
                            once hooked to
                          </h2>
                          <p className="text-sm">
                            these songs are the ones that I was atleast once in my life
                            obsessed with. obsessed as in, listen to it on repeat kinda
                            obsessed
                          </p>
                        </div>
                      </span>
                    </a>
                  </div>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
                    <div className="flex items-center space-x-3 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32px"
                        height="32px"
                        viewBox="0 0 128 128"
                        aria-hidden="true"
                        role="img"
                        className="iconify iconify--noto"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <radialGradient
                          id="IconifyId17ecdb2904d178eab21437"
                          cx="-779.868"
                          cy="686.689"
                          r="91.008"
                          gradientTransform="scale(1 -1) rotate(45 506.867 1318.897)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".353" stopColor="#ffca28" />
                          <stop offset=".872" stopColor="#ffb300" />
                        </radialGradient>
                        <path
                          d="M59.53 107.44c-3.95-3.17-40.63-38.84-41.04-39.23c-1.62-1.62-2.64-3.3-2.92-4.84c-.29-1.6.2-3 1.5-4.3c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59l16.63 15.98c.29.28.67.42 1.04.42a1.494 1.494 0 0 0 1.07-2.54L19.13 46.25c-2.66-2.66-3.91-6.73-.75-9.89c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59l27.16 26.48c.29.28.67.43 1.05.43s.77-.15 1.06-.44c.58-.58.59-1.52.01-2.11L24.91 28.02c-1.51-1.51-2.42-3.32-2.58-5.08c-.15-1.79.48-3.45 1.83-4.8c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.58L67.3 51.31c.29.28.67.43 1.05.43s.77-.15 1.06-.44c.58-.58.59-1.52.01-2.11L45.26 24.36c-1.52-1.52-2.43-3.32-2.58-5.08c-.15-1.79.48-3.45 1.83-4.8c1.21-1.21 2.69-1.85 4.28-1.85c1.94 0 3.93.92 5.59 2.59c8.86 8.7 31.99 31.45 32.77 32.29c2.97 2.05 3.57-1.05 3.72-3.06c.17-2.34-2.51-10.51-.95-17.86c2.62-9.77 10.17-8.17 10.34-8.09c4.14 1.94 3.35 4.84 1.88 10.67l-.15 1.15c-1.54 7.62 9.04 30.2 9.82 31.89c4.15 9.08 8.93 27.49-6.9 43.32c-17.35 17.35-38.83 8.46-45.38 1.91z"
                          fill="url(#IconifyId17ecdb2904d178eab21437)"
                        />
                        <path
                          d="M81.79 117.18c-10.64 0-19.69-5.09-23.26-8.62c-3.21-2.62-23.47-22.18-39.97-38.19c-.67-.65-1.06-1.02-1.1-1.07c-1.87-1.87-3.03-3.82-3.36-5.66c-.38-2.09.27-3.98 1.91-5.63c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03l16.61 15.96l-26.56-27.42c-3.06-3.06-4.6-8.13-.73-11.99c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03L56.45 62.5L23.84 29.07c-1.74-1.74-2.81-3.87-3-5.99c-.19-2.26.59-4.33 2.26-6c1.5-1.5 3.34-2.29 5.34-2.29c2.34 0 4.7 1.07 6.65 3.02l33.26 32.43l-24.16-24.83c-1.75-1.75-2.82-3.88-3-6c-.19-2.25.59-4.32 2.26-5.99c1.5-1.5 3.34-2.29 5.34-2.29c2.35 0 4.71 1.08 6.65 3.03l7.21 7.07c12.85 12.6 23.59 23.15 24.74 24.33c.56.45 1.29.62 1.6.47c.2-.1.42-.56.38-1.53c-.06-1.7-.3-3.81-.55-6.04c-.5-4.48-1.02-9.12-.37-12.18c1.42-5.31 4.21-7.56 6.29-8.53c2.86-1.32 5.63-.86 6.16-.61c5.2 2.44 4.17 6.52 2.75 12.18l-.03.14l-.16 1.17c-1.04 5.12 4.3 19.27 9.64 30.8l.08.16c3.57 7.8 10 27.81-7.2 45.01c-7.91 7.89-16.47 10.58-24.19 10.58zM21.35 58.72c-1.18 0-2.3.49-3.22 1.41c-.95.95-1.28 1.87-1.08 2.97c.22 1.21 1.11 2.65 2.5 4.05c.01.01.41.4 1.1 1.06c23.42 22.73 37.56 36.24 39.82 38.06l.12.11c5.52 5.52 26.03 15.32 43.26-1.91c15.87-15.87 9.9-34.4 6.59-41.64l-.07-.15c-3.44-7.42-11.26-25.42-9.87-32.6l.23-1.5c1.54-6.12 1.63-7.4-.98-8.66c-.77-.14-6.29-.81-8.4 7.06c-.53 2.51-.02 7.1.43 11.15c.26 2.29.5 4.46.56 6.27c.1 2.85-1.25 3.94-2.07 4.34c-1.67.81-3.66.12-4.9-.92l-.13-.12c-.61-.66-15.12-14.89-24.72-24.31L53.3 16.3c-2.46-2.47-5.63-2.88-7.76-.75c-1.04 1.04-1.51 2.26-1.4 3.61c.12 1.41.88 2.88 2.15 4.15L70.5 48.14a3.012 3.012 0 0 1-.02 4.22c-1.11 1.11-3.07 1.13-4.21.03L32.98 19.94c-2.46-2.46-5.64-2.87-7.76-.74c-1.04 1.04-1.51 2.26-1.4 3.61c.13 1.41.89 2.89 2.15 4.14L58.6 60.41c1.15 1.16 1.14 3.06-.02 4.22c-1.11 1.11-3.07 1.13-4.21.03L27.2 38.17c-2.46-2.48-5.64-2.88-7.76-.75c-2.59 2.59-1.21 5.8.75 7.77l26.57 27.44a2.988 2.988 0 0 1-.03 4.2c-1.12 1.12-3.06 1.13-4.2.04L25.9 60.89c-1.4-1.41-3.01-2.17-4.55-2.17z"
                          fill="#eda600"
                        />
                        <path
                          d="M84.76 46.54c-5.49 11.21-4.78 26.9 3.46 39.49c.93 1.7 2.52.87 1.71-.88c-9.95-21.29.48-36.63.48-36.63l-5.65-1.98z"
                          fill="#eda600"
                        />
                        <g>
                          <path
                            d="M63.17 4.5c3.02-.79 6.24-.72 9.37.01c3.11.75 6.22 2.33 8.53 4.91c2.26 2.56 3.65 5.67 4.12 8.93c.44 3.23.03 6.56-1.5 9.32c-.18-3.1-.72-5.95-1.63-8.58c-.47-1.31-1.02-2.56-1.69-3.74c-.66-1.17-1.44-2.33-2.27-3.28c-1.69-1.95-3.98-3.47-6.55-4.65c-2.58-1.22-5.39-2.12-8.38-2.92z"
                            fill="#b0bec5"
                          />
                          <path
                            d="M64 13.98c1.67-1.06 3.76-1.28 5.73-.93c1.99.35 3.89 1.34 5.39 2.71c1.49 1.39 2.55 3.14 3.21 4.96c.32.91.48 1.87.63 2.8c.05.96.05 1.92-.1 2.88c-.69-.73-1.23-1.46-1.74-2.17c-.59-.67-1.05-1.38-1.58-2.03c-1.04-1.29-2.05-2.46-3.14-3.5c-1.12-1.01-2.3-1.9-3.67-2.67c-1.36-.79-2.89-1.45-4.73-2.05z"
                            fill="#90a4ae"
                          />
                        </g>
                        <g>
                          <path
                            d="M6.83 77.34c1.41 2.76 2.88 5.32 4.59 7.58c1.7 2.26 3.65 4.18 5.92 5.43c1.1.61 2.41 1.14 3.69 1.54c1.29.41 2.63.69 4.01.88c2.76.34 5.66.28 8.73-.19c-2.38 2.07-5.56 3.17-8.8 3.41c-3.28.22-6.61-.49-9.59-2.17c-3-1.71-5.2-4.43-6.58-7.32c-1.38-2.91-2.12-6.04-1.97-9.16z"
                            fill="#b0bec5"
                          />
                          <path
                            d="M16.28 76.17c.97 1.68 1.93 3.03 2.98 4.21c1.04 1.18 2.16 2.15 3.38 3.03c1.24.85 2.6 1.6 4.08 2.35c.74.38 1.53.68 2.31 1.12c.81.35 1.63.72 2.49 1.25c-.91.34-1.84.54-2.79.69c-.94.04-1.91.09-2.87-.04c-1.92-.26-3.84-.93-5.52-2.1c-1.65-1.19-3.02-2.84-3.77-4.71c-.76-1.86-.98-3.94-.29-5.8z"
                            fill="#90a4ae"
                          />
                        </g>
                      </svg>
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        Thanks for visiting my site!
                      </span>
                    </div>
                    <div className="font-aspekta font-[650] mb-1">
                      Glad to have you here.
                    </div>
                    <a
                      className="text-sky-500 flex gap-2 group text-sm mt-4"
                      href="www.linkedin.com/in/mohammad-arshad-b47b60294"
                    >
                      lets connect Linkedin{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:translate-x-2 transition-all duration-150 ease-in-out"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                    <a
                      className="text-sky-500 flex gap-2 group text-sm mt-4"
                      href="mailto:mohammadarshad01474@gmail.com"
                    >
                      Send an email
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:translate-x-2 transition-all duration-150 ease-in-out"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
                    <div className="font-aspekta font-[650] text-center mb-3">
                      Check out my Github
                    </div>
                    <div className="text-center">
                      <a
                        className="text-sky-500 hover:text-sky-600 font-aspekta font-[650]"
                        href="https://github.com/arshad-ashuu"
                      >
                        <span className="flex gap-2 items-center justify-center">
                          Check out arshad-ashuu
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          
  <Footer/>
        </div>  
        </main> 
     </div>
    
  </>
  )
}

export default MainContent