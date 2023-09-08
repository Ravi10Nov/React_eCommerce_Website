import { useState, useEffect } from "react";
import Restaurents from "./Restaurents";
import Restaurent1 from "./Restaurent1";
import { Restaurents_API } from "../constants/constant";
import Shimmer from "./Shimmer";
import UseOnlineStatus from "../constants/useOnlineStatus";
import { Link } from "react-router-dom";



const Body = () => {

    const [headRes, setHeadRes] = useState([]);

    const [topRes, setTopRes] = useState('Top Restaurents');

    const [resCard, setResCard] = useState([]);

    const [filterCard, setFilterCard] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        const data = await fetch(Restaurents_API);

        const json = await data.json();

        setResCard(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterCard(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setHeadRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.info)
    }

    const onlineStatus = UseOnlineStatus();

    if (onlineStatus === (false)) { return <h1>Looks like You are Offline. Please check your Internet Connection</h1> }


    if (filterCard.length === 0) { return <Shimmer /> };

    return (
        <div>
            <div className="flex justify-between shadow-xl mb-2">
                <div className="my-4">
                    <input type="search" className="ml-10 border border-solid border-black"
                        value={searchText} onChange={(e) => {
                            const searchText = e.target.value
                            setSearchText(searchText)
                        }} />
                    <button className="mx-2 px-4 bg-amber-200 rounded-xl "
                        onClick={() => {
                            const data = resCard.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            })
                            setFilterCard(data)
                            setSearchText('')
                        }}>Search</button>
                </div>
                <button className="mx-10 "
                    onClick={() => {
                        if (topRes === 'Top Restaurents') {
                            const data = resCard.filter((res) => {
                                return res.info.avgRating > 4
                            })
                            setFilterCard(data)
                            setTopRes('All Restaurents')
                        } else {
                            const data = resCard.filter((res) => {
                                return res
                            })
                            setFilterCard(data)
                            setTopRes('Top Restaurents')
                        }
                    }}>{topRes}</button>
            </div>

            <div className="border border-solid border-grey-100 mx-8 shadow-xl my-4 h-96 ">
                <h1 className="mx-6 text-3xl font-bold my-4 ">What's on your mind?</h1>
                <div className="">
                    <button></button>
                    {/* <div className="flex underline carousel items-center justify-center p-32 h-16 relative overflow-x-auto overflow-y-hidden"> */}
                    <div className="flex flex-wrap ">

                        {headRes.map((res) => {
                            return <Restaurent1 key={res.id}
                                resData={res}
                            />
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mx-8 border border-solid border-grey-100 shadow-xl">
                {filterCard.map((res) => {
                    return <Link to={'/restaurent/'+res.info.id} key={res.info.id}><Restaurents
                        resData={res} /></Link>
                })}

            </div>


        </div>
    )
};

export default Body;