import { FaAngleLeft } from "react-icons/fa6";

const PrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
         style={{ ...style,color:'white', display: "block",position:'absolute',top:'50%', height:"56px", fontSize:"24px"}}
        onClick={onClick}
      >
        <FaAngleLeft className="text-xl md:text-5xl"/>
      </div>
    );
}

export default PrevArrow