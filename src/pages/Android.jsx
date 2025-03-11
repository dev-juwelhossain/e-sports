import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
const Android = () => {
    return (
        <div className="max-w-[98%] mx-auto mt-10 mb-20">
        <div to='/android' className="flex gap-2 justify-center items-center bg-darkSlateGray-1 text-white h-[150px] rounded-md">
        <FontAwesomeIcon icon={faAndroid} size='3x' className=' text-green-1'/>
          <h1 className="font-montserrat text-3xl">Android Games</h1>
        </div>
        </div>
    );
};

export default Android;