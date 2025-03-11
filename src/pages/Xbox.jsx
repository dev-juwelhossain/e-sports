import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXbox } from "@fortawesome/free-brands-svg-icons";
const Xbox = () => {
    return (
        <div className="max-w-[98%] mx-auto mt-10 mb-20">
        <div className="flex gap-2 justify-center items-center bg-whtie border border-green-200  h-[150px] rounded-md">
        <FontAwesomeIcon icon={faXbox} size='3x' className=' text-green-2'/>
          <h1 className='font-play text-green-2 text-3xl'>XBox Games</h1>
        </div>
        </div>
    );
};

export default Xbox;