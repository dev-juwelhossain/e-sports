import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
const PlayStation = () => {
    return (
        <div className="max-w-[98%] mx-auto mt-10 mb-20">
           <div className="flex gap-2 justify-center items-center bg-blue-1 h-[150px] rounded-md ">
          <FontAwesomeIcon icon={faPlaystation} size='3x' className=' text-white'/>
          <h1 className="text-white font-montserrat text-3xl ">PS-5 Games</h1>
        </div>
        </div>
    );
};

export default PlayStation;