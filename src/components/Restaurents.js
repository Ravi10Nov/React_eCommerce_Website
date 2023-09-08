import { Logo_url } from "../constants/constant";
import { ResImage } from "../constants/constant";
import { Star_Logo } from "../constants/constant";

const Restaurents = ({ resData }) => {

    const { name, cloudinaryImageId, locality, cuisines, avgRating, areaName, totalFee } = resData.info;

    return (
        <div>

            <div className="w-[240px]  m-2 relative box-border shadow-xl h-[420px]">
                <div className="top">
                    <img src={ResImage + cloudinaryImageId} className=" h-[200px] w-[240px] object-cover p-2" />
                </div>

                <div className=" bottom flex flex-col justify-between items-start p-3 bg- ">
                    <div className=" title font-bold text-xl my-1 ">{name}</div>
                    <div className=" category font-bold my-1 text-green-900">{avgRating}*</div>
                    <div className=" category text-xs font-light my-1 ">{cuisines.join(', ')}</div>
                    <div className=" category  font-semibold my-1 ">{locality}</div>
                    <div className=" category text-xl font-semibold my-1 ">{areaName}</div>
                </div>
            </div>
        </div>
    )
}

export default Restaurents;