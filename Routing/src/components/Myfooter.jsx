import React from 'react'
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Myfooter() {
  return (
    <>
     <footer className="bg-white shadow dark:bg-gray-900 mt-5">
      <div className="w-full p-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
         
          <span className="text-xl font-semibold dark:text-white">Flowbite</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm text-gray-500 dark:text-gray-400">
          <div>
            <h2 className="mb-2 font-bold uppercase text-gray-900 dark:text-white">About</h2>
            <ul>
              <li><a href="#" className="hover:underline">Flowbite</a></li>
              <li><a href="#" className="hover:underline">Tailwind CSS</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-bold uppercase text-gray-900 dark:text-white">Follow us</h2>
            <ul>
              <li><a href="#" className="hover:underline">Github</a></li>
              <li><a href="#" className="hover:underline">Discord</a></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-bold uppercase text-gray-900 dark:text-white">Legal</h2>
            <ul>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-200 dark:border-gray-700" />

      <div className="flex flex-col sm:flex-row items-center justify-between px-4 pb-4 text-sm text-gray-500 dark:text-gray-400">
        <span>© 2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        <div className="mt-4 flex space-x-6 sm:mt-0">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white"><BsFacebook /></a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white"><BsInstagram /></a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white"><BsTwitter /></a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white"><BsGithub /></a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white"><BsDribbble /></a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Myfooter