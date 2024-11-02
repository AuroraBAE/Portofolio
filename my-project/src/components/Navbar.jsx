import logo from "../assets/kevinRushLogo.png";
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 className="mx-2 w-10 text-2xl font-bold" >Stefanus.</h1>
        </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/AuroraBAE"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-300"
        >
          <FaGithub />
        </a>
        {/* Tautan Instagram */}
        <a
          href="https://www.instagram.com/itfmee/"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-300" 
        >
          <FaInstagram />
        </a>
    </div>
  </nav>
  )
}

export default navbar
