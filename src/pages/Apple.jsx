import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
const Apple = () => {
    return (
        <div className="max-w-[98%] mx-auto mt-10 mb-20">
            <div className="flex gap-2 justify-center items-center border border-gray-200  h-[150px] rounded-md text-white ">
                <FontAwesomeIcon icon={faApple} size='3x' className=' text-black' />
                <h1 className='font-poppins text-black text-4xl'>iOS Games</h1>
            </div>
        </div>
    );
};

export default Apple;