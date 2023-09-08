import { useRouteError } from "react-router-dom"

const Error =()=>{

    const err = useRouteError();
    console.log(err)

    return(
        <div>
            <h1>Something went wrong. Please check your Internet connection</h1>
            <p>{err.name}</p>
        </div>
    )
}

export default Error;