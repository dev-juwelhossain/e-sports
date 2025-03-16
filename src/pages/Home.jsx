import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple, faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faPlaystation} size='2x' className=' text-white' />
          <h1 className="text-white font-montserrat ">PS-5 Games</h1>
        </NavLink>
        {/* Xbox section */}

        <NavLink to='/xbox' className="flex gap-2 justify-center items-center bg-whtie border border-slate-400 w-[32%] h-[100px] rounded-md transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-gray-300">
          <FontAwesomeIcon icon={faXbox} size='2x' className=' text-green-2' />
          <h1 className='font-play text-green-2'>XBox Games</h1>
        </NavLink>

        {/* PC Section */}
        <NavLink to='/windows' className="flex gap-2 justify-center items-center bg-gradient-to-r from-cyan-400 to-sky-500 w-[32%] h-[100px] rounded-md text-white transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-sky-600">
          <FontAwesomeIcon icon={faWindows} size='2x' className=' text-white' />
          <h1 className='font-poppins'>PC Games</h1>
        </NavLink>

        {/* Android section */}
        <NavLink to='/android' className="flex gap-2 justify-center items-center bg-darkSlateGray-1 text-white w-[32%] h-[100px] rounded-md transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-green-800">
          <FontAwesomeIcon icon={faAndroid} size='2x' className=' text-green-1' />
          <h1 className="font-montserrat">Android Games</h1>
        </NavLink>

        {/* iOS section */}
        <NavLink to='/ios' className="flex gap-2 justify-center items-center border border-slate-300  w-[32%] h-[100px] rounded-md transform motion-safe:hover:scale-105 transition duration-300 hover:shadow-md hover:shadow-gray-300">
          <FontAwesomeIcon icon={faApple} size='2x' className=' text-black' />
          <h1 className="font-poppins text-black">iOS Games</h1>
        </NavLink>

      </div>

      <section>
        <div className='mt-10'>
          <h2 className="text-red-500 text-xl font-bold bg-blue-950 text-center pt-4 pb-4 rounded-lg font-play">LATEST <span className="text-white">NEWS</span></h2>
        </div>

        <div className='mt-4'>
          <div className='flex gap-2 max-w-[100%] '>
            <img className='w-[30%] h-auto rounded-sm relative z-0  transition-all duration-300 hover:scale-105' src="./img/fortnite-battle-royale-chapter-2-remix-1900x600-479f45ad629c.jpg" alt="" />
            <div className='w-[65%]flex flex-col justify-center bg-green-500 pl-2 pb-2 leading-normal rounded-lg'>
              <h5 className='text-2xl text-white font-poppins pt-2'>Fortnite Chapter 2</h5>
              <p className='text-white font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illo nam ipsa laborum vel enim? Eveniet reiciendis minima natus cum quis inventore consequuntur? Praesentium beatae tempora, dolores veritatis aut consequatur?</p>
              <div className='flex justify-between items-center '>
                <div className='flex gap-2 items-center text-white font-poppins p-2'>
                  <FontAwesomeIcon icon={faCalendarDays} className='text-white text-lg' />
                  <p>Sep 18, 2025</p>
                </div>
                <div>
                  <a href="" className='group relative w-max text-white font-poppins p-2'>Read More...
                  <span
                    className="absolute -bottom-[1px] left-0 w-0 transition-all duration-300 h-0.5 bg-white group-hover:w-full"
                  ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='grid grid-cols-4 gap-4 mt-10'>
        <div className=' w-{24%} relative h-{350px} overflow-hidden rounded-lg shadow-lg '>
          <img className='w-full h-[300px] rounded-t-lg relative z-1 transition-all duration-300 hover:scale-125' src="./img/fortnite-lawless-2.jpg" alt="" />
          <div className='bg-darkSlateGray-1 h-auto relative z-2 w-full hover:bg-opacity-90 transition-all duration-300 rounded-b-lg pb-2'>
            <div className='flex gap-1'>
            <FontAwesomeIcon icon={faCalendarDays} className='text-white text-lg p-1' />
            <p className='text-white font-play text-[12px] p-1'>March 11 2025</p>
            </div>
            
            <p className='text-gray-100 w-[300px] h-auto font-play text-lg pl-1 pr-1'>The Getaway LTM and Outlaw Midas Come to Fortnite Battle Royale v34.10!...</p>
          </div>
        </div>
        
        <div className=' w-{24%} relative overflow-hidden '>
          <img className='w-full h-[300px] rounded-t-lg relative z-1 transition-all duration-300 hover:scale-125' src="/img/fortnite-party-up-spring-raid-thumbnail-576x576-56603b0f5435.jpg" alt="" />
          <div className='bg-darkSlateGray-1 relative z-2 w-full rounded-b-lg pb-2'>
            <div className='flex gap-1'>
            <FontAwesomeIcon icon={faCalendarDays} className='text-white text-lg p-1' />
            <p className='text-white font-play text-[12px] p-1'>March 14 2025</p>
            </div>
            
            <p className='text-gray-100 w-[300px] h-auto max-h-[80px] font-play text-lg pl-1 pr-1'>Fortnite Party Up - Spring Raid: Unlock the Dupli-Kate Outfit!...</p>
          </div>
        </div>
        <div className=' w-{24%} relative overflow-hidden '>
          <img className='w-full h-[300px] rounded-t-lg relative z-1 transition-all duration-300 hover:scale-125' src="/img/fortnite-party-up-spring-raid-thumbnail-576x576-56603b0f5435.jpg" alt="" />
          <div className='bg-darkSlateGray-1 relative z-2 w-full rounded-b-lg pb-2'>
            <div className='flex gap-1'>
            <FontAwesomeIcon icon={faCalendarDays} className='text-white text-lg p-1' />
            <p className='text-white font-play text-[12px] p-1'>March 14 2025</p>
            </div>
            
            <p className='text-gray-100 w-[300px] h-auto max-h-[80px] font-play text-lg pl-1 pr-1'>Fortnite Party Up - Spring Raid: Unlock the Dupli-Kate Outfit!...</p>
          </div>
        </div>
        <div className=' w-{24%} relative overflow-hidden '>
          <img className='w-full h-[300px] rounded-t-lg relative z-1 transition-all duration-300 hover:scale-125' src="/img/fortnite-party-up-spring-raid-thumbnail-576x576-56603b0f5435.jpg" alt="" />
          <div className='bg-darkSlateGray-1 relative z-2 w-full rounded-b-lg pb-2'>
            <div className='flex gap-1'>
            <FontAwesomeIcon icon={faCalendarDays} className='text-white text-lg p-1' />
            <p className='text-white font-play text-[12px] p-1'>March 14 2025</p>
            </div>
            
            <p className='text-gray-100 w-[300px] h-auto max-h-[80px] font-play text-lg pl-1 pr-1'>Fortnite Party Up - Spring Raid: Unlock the Dupli-Kate Outfit!...</p>
          </div>
        </div>
        
        
      </section>
      
      <div className='flex justify-end items-center  '>
       <NavLink to='/news' className='w-[200px] h-[40px] flex justify-center items-center gap-2 mt-10 text-blue-500 font-poppins rounded-lg hover:shadow-md hover:shadow-blue-200 border border-blue-400 hover:-translate-y-1 transition ease-in-out duration-300'>
        <h1 className='text-lg'>More News</h1>
        <FontAwesomeIcon icon={faArrowRight} size='1x'/>
       </NavLink>
      </div>
    </div>
  );
};

export default Home;
