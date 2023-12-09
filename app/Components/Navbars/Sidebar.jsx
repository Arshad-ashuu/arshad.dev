import React from 'react'

function Sidebar() {
  return (
    <>
 <div className="sidebar sticky top-0 w-16 lg:ml-[116px] md:w-24 sm:ml-4 sm:w-12 shrink-0 h-screen  no-scrollbar border-r border-slate-200 dark:border-slate-800 " >
  <div className="h-full flex flex-col justify-between after:flex-1 after:mt-auto relative ">
      <div className="flex-1">
        <div className="flex justify-center my-4">
          <a href="https://github.com/arshad-ashuu">
            <img
              alt="Me"
              fetchPriority="high"
              decoding="async"
              className="rounded-full w-14 h-14"
              src='/profile.jpg'
              style={{ color: "transparent" }}
            />
          </a>
        </div>
      </div>

    <div className="flex-1 grow flex items-center">
      <nav className="w-full">
        <ul className="space-y-4 " >
          <li className="py-2 ">
            <a
              className="w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text--400  dark:text-slate-400 active:text-sky-500 focus:text-sky-500 hover:text-sky-500 active:after:bg-sky-500
              transition duration-10 ease-in-out"
              data-te-toggle="tooltip"
              title="Home"
              href="/"
            >
              <span className="sr-only">Home</span>
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={19}
                
              >
                <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
              </svg>
            </a>
          </li>
          <li className="py-2">
            <a
              className="w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text--400  dark:text-slate-400 hover:text-sky-500 hover:after:bg-sky-500
              transition duration-10 ease-in-out"
              data-te-toggle="tooltip"
              title="About"
              href="/About"
            >
              <span className="sr-only">About</span>
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
              >
                <path
                  fillOpacity=".16"
                  d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                />
                <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
              </svg>
              
            </a>
          </li>
          <li className="py-2">
            <a
              className="w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text-slate-400 hover:text-sky-500 
              transition duration-10 ease-in-out"
              data-te-toggle="tooltip"
              title="Articles"
              href="/Blog"
            >
              <span className="sr-only">Articles</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="fill-current"
                width={28}
                height={28}
              >
                <path
                  fillOpacity=".16"
                  fillRule="nonzero"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                />
              </svg>
            </a>
          </li>
          
          <li className="py-2">
            <a
              className="w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 dark:text-slate-400 hover:dark:text-sky-500 hover:after:bg-sky-500"
              href="/MyProjects"
            >
              <span className="sr-only">Projects</span>
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
              >
                <path fillOpacity=".16" d="M1 4h18v10H1z" />
                <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z" />
              </svg>
            </a>
          </li>
          <li className="py-2">
            <a
              className="w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text-slate-400  dark:text-slate-500 hover:text-sky-500 hover:after:bg-sky-500
              transition duration-10 ease-in-out"
              data-te-toggle="tooltip"
              title="Resume"
              href="/MyResume"
            >
              <span className="sr-only">Resume</span>
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={20}
              >
                <path fillOpacity=".16" fillRule="nonzero" d="M1 5h16v14H1z" />
                <path
                  fillRule="nonzero"
                  d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z"
                />
              </svg>
              
            </a>
          </li>
          <li className="py-2">
            <a
              className="w-full h-6 flex items-center justify-center relative after:absolute after:w-0.5 after:right-0 after:top-0 after:bottom-0 text-slate-400 dark:text-slate-500 hover:text-sky-500 hover:after:bg-sky-500
              transition duration-10 ease-in-out"
              data-te-toggle="tooltip"
              title="Resources"
              href="/Roadmaps"
            >
              <span className="sr-only">Resurces</span>
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width={21}
                height={21}
              >
                <path fillOpacity=".16" d="m13.4 18-3-7.4-7.4-3L19 2z" />
                <path d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
    </>
  )
}

export default Sidebar