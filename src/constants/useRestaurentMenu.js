import { useState, useEffect } from "react";
import { ResMenu_API } from "./constant";

const useResMenu = (resID) =>{

    const [resMenu , setResMenu] = useState();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(ResMenu_API+resID+'&catalog_qa=undefined&submitAction=ENTER');

        const json = await data.json()

        // setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1])
        setResMenu(json?.data)

    }
    return resMenu;

}

export default useResMenu ;