import { useState } from "react";
import RestaurentItem from "./RestaurentItem";


const ResCategory = ({ data ,showItems ,setShowIndex}) => {

    // console.log(data)

    const [show,setShow] = useState();

    setShow(showItems)

    const handleclick =() =>{
        setShowIndex()
    }

    return (
        <div>
            <div className="flex flex-col border border-solid  shadow-lg p-4 mb-1 " >
                <div onClick={handleclick} className=" font-semibold text-gray-800 shadow-sm cursor-pointer">
                    <h1>{data.title}  ({data.itemCards.length})</h1>
                </div>
                    
               {show && <RestaurentItem data = {data?.itemCards}/>}
                

            </div>

        </div>

    )
}

export default ResCategory;