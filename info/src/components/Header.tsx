import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div>
        <header className="text-gray-600 bg-blue-300 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image className="w-23 h-25 md:w-15 md:rounded-full " src="/ben.jpg" alt="" width="100" height="120"/>
      <span className="ml-3 text-xl">Muhammad Ahmed</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-balance">
      <a className="mr-5 hover:text-gray-900"href="/aboutus">About us</a>
      <a className="mr-5 hover:text-gray-900"href="/professional skill">Professional Skill</a>
      <a className="mr-5 hover:text-gray-900"href="/aboutus/professional skill/experce">Experce</a>
      <a className="mr-5 hover:text-gray-900"href="/aboutus/professional skill/experce/achievements">Achievements</a>
      <a className="mr-5 hover:text-gray-900"href="/aboutus/professional skill/experce/achievements/professional engagement">Professional Engagement</a>
    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Header