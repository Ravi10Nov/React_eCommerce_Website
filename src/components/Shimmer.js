const Shimmer = () => {
    return (
        <div>
            <div className="flex justify-between shadow-xl border border-solid border-gray-200 my-2">
                <div className="my-4">
                    <input type="search" className="ml-10 border border-solid border-black"/>
                    <button className="mx-2 px-4 bg-amber-200 rounded-xl ">Search</button>
                </div>
                <button className="mx-10 ">Top Restaurents</button>
            </div>

            <div className="border border-solid border-grey-100 mx-8 shadow-xl my-4 h-80">
                <h1 className="mx-8 text-3xl my-10 ">What's on your mind?</h1>
                <div className="flex mx-8 underline my-6  h-16"></div>
            </div>

            <div className="flex flex-wrap mx-8 border border-solid border-grey-100 shadow-xl"></div>


        </div>
    )
}

export default Shimmer;