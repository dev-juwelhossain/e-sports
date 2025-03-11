import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
const Windows = () => {
    return (
        <div className="max-w-[98%] mx-auto mt-10 mb-20">
        <div className="flex gap-2 justify-center items-center bg-gradient-to-r from-cyan-400 to-sky-500  h-[150px] rounded-md text-white ">
        <FontAwesomeIcon icon={faWindows} size='3x' className=' text-white'/>
          <h1 className='font-poppins text-3xl'>PC Games</h1>
        </div>
        </div>
    );
};

export default Windows;