import { useParams } from "react-router-dom";
import useResMenu from "../constants/useRestaurentMenu";
import { ResMenu_API } from "../constants/constant";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurentMenu = () => {

    const { resID } = useParams();

    const resMenu = useResMenu(resID);

    const [showItems,setShowItems] = useState(false);

    const [showIndex,setShowIndex] = useState();

    // console.log(resMenu)

    const category = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => {
        return c?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })

    // console.log(category)


    return (
        <div className=" ">
            <div className="flex flex-col justify-center items-center ">
                <div className="flex flex-col justify-center items-start p-4 mt-4 border border-solid  shadow-lg w-8/12">
                    <div className="flex justify-between">
                        <div>
                            <div className="mb-4 font-bold text-lg text-neutral-700 ">{resMenu?.cards[0]?.card?.card?.info?.name}</div>
                            <div>{resMenu?.cards[0]?.card?.card?.info?.cuisines.join(', ')}</div>
                            <div>{resMenu?.cards[0]?.card?.card?.info?.city}</div>
                        </div>

                        

                    </div>
                </div>


                <div className="flex flex-col border border-solid  shadow-lg p-4 mt-2 w-8/12">
                    {category?.map((c,index) => {
                        return (<ResCategory
                            key={c?.card?.card?.title} data={c.card.card}
                            showItems={index ===(showIndex)? true:false}
                            setShowIndex = {()=>(setShowIndex(index))}
                        />)
                    })}
                </div>
            </div>


        </div>
    )

}
export default RestaurentMenu;