import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-900 backdrop-blur-md">
      <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <div className="logo flex justify-center md:justify-start mb-4 md:mb-0">
          <img src="Turbo Game logo.png" alt="Logo" className="h-16 md:h-24" />
        </div>
        
        {/* Navigation */}
        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end items-center list-none border border-bg-customGray rounded-full p-5 md:p-3 bg-black">
            <li className="mb-2 md:mb-0 md:ml-5">
              <NavLink
                to="/"
                className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-blue-500 transition-all ease-linear"
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0 md:ml-5">
              <NavLink
                to="/double"
                className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-blue-500 transition-all ease-linear"
              >
                Jogar
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0 md:ml-5">
              <NavLink
                to="/loja"
                className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-blue-500 transition-all ease-linear"
              >
                Loja
              </NavLink>
            </li>
            <li className="mb-2 md:mb-0 md:ml-5">
              <NavLink
                to="/car"
                className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-blue-500 transition-all ease-linear"
              >
                Personalize
              </NavLink>
            </li>
            <li className="md:ml-5">
              <NavLink
                to="/login"
                className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-blue-500 transition-all ease-linear"
              >
                Login
              </NavLink>
            </li>
            <li className="md:ml-5">
              <NavLink
                to="/ranking"
                className="text-white no-underline text-sm px-4 py-2 font-unbounded hover:text-blue-500 transition-all ease-linear"
              >
                Ranking
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
