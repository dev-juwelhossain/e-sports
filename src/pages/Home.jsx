import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router';

const Home = () => {
  return (
    <div className="max-w-[98%] mx-auto mt-10 mb-20">
      <div>
        <img
          src="./img/2151500473.jpg"
          alt=""
          className=" w-full h-screen grayscale hover:filter-none cursor-pointer object-fill justify-center rounded-lg transition duration-300"
        />
      </div>
      <div className="flex gap-4 items-center mt-10">

        {/* PlayStation Section */}
        <NavLink to='/ps5' className="flex gap-2 justify-center items-center bg-blue-1 w-[32%] h-[100px] rounded-md transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-blue-400">
          <FontAwesomeIcon icon={faPlaystation} size='2x' className=' text-white'/>
          <h1 className="text-white font-montserrat ">PS-5 Games</h1>
        </NavLink>
          {/* Xbox section */}

        <NavLink to='/xbox' className="flex gap-2 justify-center items-center bg-whtie border border-slate-400 w-[32%] h-[100px] rounded-md transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-gray-300">
        <FontAwesomeIcon icon={faXbox} size='2x' className=' text-green-2'/>
          <h1 className='font-play text-green-2'>XBox Games</h1>
        </NavLink>

        {/* PC Section */}
        <NavLink to='/windows' className="flex gap-2 justify-center items-center bg-gradient-to-r from-cyan-400 to-sky-500 w-[32%] h-[100px] rounded-md text-white transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-sky-600">
        <FontAwesomeIcon icon={faWindows} size='2x' className=' text-white'/>
          <h1 className='font-poppins'>PC Games</h1>
        </NavLink>

        {/* Android section */}
        <NavLink to='/android' className="flex gap-2 justify-center items-center bg-darkSlateGray-1 text-white w-[32%] h-[100px] rounded-md transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-green-800">
        <FontAwesomeIcon icon={faAndroid} size='2x' className=' text-green-1'/>
          <h1 className="font-montserrat">Android Games</h1>
        </NavLink>

        {/* iOS section */}
        <NavLink to='/ios' className="flex gap-2 justify-center items-center border border-slate-300  w-[32%] h-[100px] rounded-md transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-gray-300">
        <FontAwesomeIcon icon={faApple} size='2x' className=' text-black'/>
          <h1 className="font-poppins text-black">iOS Games</h1>
        </NavLink>
       
      </div>
    </div>
  );
};

export default Home;
