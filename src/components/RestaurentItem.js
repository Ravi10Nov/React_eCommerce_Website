import { ResMenu_Image } from "../constants/constant"

const RestaurentItem = ({ data }) => {

    // const { name, price, imageId } = data?.card?.info

    console.log(data)

    return(
        <div>
            {data.map((data)=>{

                const {name,price,imageId,description} = data?.card?.info;

                return (<div key={data?.card?.info?.id}>
                    <div className="py-4 my-4 shadow-lg">
                    <div className="flex justify-between items-center">
                        <div className="ml-2 w-8/12">
                            <div className="mb-1">{name}</div>
                            <div>Rs- {price/100}/only</div>
                            <h5 className="text-sm mt-1">{description}</h5>
                        </div>
                        <div className="w-28"><img src={ResMenu_Image + imageId}/></div>
                    </div>
                </div>
                </div>)
            })}
        </div>
    )
    
}

export default RestaurentItem


{/* <div>
                <div className="py-4 my-4 shadow-lg">
                    <div className="flex justify-between items-center">
                        <div className="ml-2">
                            <div className="mb-1">{name}</div>
                            <div>Rs- {price / 100}/only</div>
                        </div>
                        <div className="w-28"><img src={ResMenu_Image + imageId} /></div>
                    </div>
                </div>
            </div> */}