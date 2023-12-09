import React from 'react'


function Navbar() {
  return (
    <>
     <header>
  <div className="flex items-center justify-between h-16 before:block">
    <div className="grow flex justify-end space-x-4">
      <div>
        <a
          className="btn-sm text-slate-100 border rounded-full border-sky-500 p-2 pl-3 pr-3 font-normal text-sm bg-sky-500 hover:bg-sky-600"
          href="www.linkedin.com/in/mohammad-arshad-b47b60294"
        >
          lets connect
        </a>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Navbar