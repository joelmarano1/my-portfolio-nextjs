import { FaAngleRight } from "react-icons/fa6";

const PrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,color:'white', display: "block",position:'absolute',top:'50%',right:5, height:"56px", fontSize:"24px"}}
        onClick={onClick}
      >
        <FaAngleRight className="text-xl absolute -right-8 lg:right-0 md:text-5xl text-white  dark:text-[#2C3F50]"/>
      </div>
    );
}

export default PrevArrow