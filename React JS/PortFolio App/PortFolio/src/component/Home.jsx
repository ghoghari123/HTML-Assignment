import React from 'react'
import Profile from '../assets/profile.png'

function Home() {
  return (
    <div className='container'>
      {/*========================== NAVIGATION BAR START ========================================== */}
      <div className="navbar flex justify-between py-5">
        <div className="logo color-white">
          <h1 className='text-4xl mx-5 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>HG.</h1>
        </div>
        <div className="actions flex gap-30 mx-25 font-light">
          <div className="nav-links ">
            <ul className='flex text-ixl gap-4 cursor-pointer font-normal'>
              <li className='hover:text-cyan-600 transition-colors'>Home</li>
              <li className='hover:text-cyan-600 transition-colors'>About</li>
              <li className='hover:text-cyan-600 transition-colors'>Work</li>
              <li className='hover:text-cyan-600 transition-colors'>Blog</li>
              <li className='hover:text-cyan-600 transition-colors'>Contact</li>
            </ul>
          </div>
          <div className="toggle-theme text-lg rounded-full bg-gray-800 ring-2 ring-blue-500/50 px-6 text-white h-8 font-semibold hover:bg-indigo-900 duration-300"><button>Mode</button></div>
        </div>
      </div>
      {/*========================== NAVIGATION BAR END ========================================== */}

      {/*========================== HERO SECTION START ========================================== */}
      <div className="hero-section h-100 m-10 p-10 flex justify-between">
        <div className="details flex flex-col gap-5">
          <h2 className='text-6xl'>Hemanshi Ghogahri</h2>
          <h3 className='text-2xl'>A Full Stack Developer & Graphics Designer</h3>
          <p className='w-200 text-sm'>I’m a passionate Full Stack Developer focused on crafting modern, scalable,
            and user-centric web applications. With a strong foundation in both front-end
            and back-end technologies, I enjoy transforming ideas into interactive digital
            experiences. Continuously learning and adapting to new technologies, I aim to
            grow as a developer while contributing to innovative and impactful projects</p>
          <div className="hero-btn flex gap-12 h-10">
            <button className='rounded-full bg-gray-800 ring-2 ring-blue-500/50 w-40 hover:bg-indigo-900 duration-300'>Hire Me</button>
            <button className='rounded-full bg-gray-800 ring-2 ring-blue-500/50 w-40 hover:bg-indigo-900 duration-300'>View Project</button>
          </div>
        </div>
        <div className="profile-img rounded-full h-70 w-70 border-5 border-cyan-900 ring-4 ring-cyan-600">
          <img src={Profile} alt="" className='rounded-full h-70 w-70' />
        </div>
      </div>
      {/*========================== HERO SECTION END ========================================== */}
    </div>
  )
}

export default Home
