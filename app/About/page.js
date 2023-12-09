import React from 'react'
import Navbar from '../Components/Navbars/Navbar'
import Sidebar from '../Components/Navbars/Sidebar'
import Footer from '../Components/Footer'

function page() {
  return (
    <>
 <div className='min-h-screen flex '>
   <Sidebar/>
    <main className="overflow-hidden p-9">
    <Navbar/>
    <section className=" bg-white dark:bg-gray-900">
    <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-xl font-[miln] tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white">
                <span className='text-green-500'> Hey👋🏻</span><span className='text-slate-500'> I'm</span>
            </h2>
            <h1 className="max-w-2xl mb-4 text-2xl font-[space] tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"> Moha<span className='text-pink-400'>mmad</span> A<span className='text-pink-400'>r</span>sh<span className='text-red-500'>a</span>d</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                I'm a Full stack developer from India<br/>
                I Love building awesome and creative projects, I Love listening music,
                student at Bhavans Vivekananda college, sainikpuri, Hyderabad, Telangana
            </p>
            <a href="./myresume.pdf" download="arshad_resume"className="inline-flex items-center justify-center px-5 py-3 text-base bg-slate-500 font-medium text-center  border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Resume
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
        <div className="mt-0 col-span-5 flex">
            <img src="./prf.png" alt="" />
        </div>
    </div>
</section>
<section className='mb-16'>
  <h1 className='text-green-400 font-[nitro] text-5xl flex mb-2'> Skills <svg className="w-5 h-5 ml-2 -mr-1 mt-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> </h1>
<div className='flex lg:justify-center lg:items-center  rounded-xl border-2 pt-3 pb-3 lg:w-[800px] lg:ml-[200px] flex-wrap mb-10'>
  <img className='w-[58px] h-[58px]  p-2' src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html" />
  <img className='w-[58px] h-[58px] p-2 ' src="https://cdn-icons-png.flaticon.com/512/732/732190.png " alt="css" />
  <img className='w-[58px] h-[58px] p-2' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" alt="tailwind" />
  <img className='w-[58px] h-[58px] p-2' src="/js.svg" alt="js" />
  <img className='w-[58px] h-[58px] p-2' src="https://cdn-icons-png.flaticon.com/512/875/875209.png " alt="react" />
  <img className='w-[58px] h-[58px] p-2' src="/typ.svg" alt="typescpt" />
  <img className='w-[58px] h-[58px] p-2' src="/nxt.svg" alt="next" />
  <img className='w-[58px] h-[58px] p-2' src="/node.svg" alt="node" />
  <img className='w-[58px] h-[58px] p-2' src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png " alt="python" />
  <img className='w-[58px] h-[58px] p-2' src="/mongo.svg " alt="mongo" />
  <img className='w-[58px] h-[58px] p-2' src="/sql.svg " alt="sql" />
</div>
</section>
<section className='mb-16'>
  <h1 className='text-sky-400 font-[act] text-5xl flex mb-8'>projects<svg className="w-5 h-5 ml-2 -mr-1 mt-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
           </h1>
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
</section>
 
<Footer/>
    </main>
    </div> 
    
    </>
  )
}

export default page