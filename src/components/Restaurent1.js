import { Restaurent1_API } from "../constants/constant";

const Restaurent1 = ({ resData }) => {

    const { imageId, text } = resData;

    return (
        <div className="">
            <ul className=" h-28 w-28 mb-4 box-border">
                <li><img src={Restaurent1_API + imageId} className="  " /></li>
                <li>{text}</li>
            </ul>
        </div>
    )
};

export default Restaurent1;