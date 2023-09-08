import { useState } from "react";
import { Logo_url } from "../constants/constant";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../constants/useOnlineStatus";

const Header = () => {

    const [login, setLogin] = useState('Login')

    const onlineStatus = UseOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg border border-solid border-grey-100 ">

            <div className=" mx-5 ">
                <img src={Logo_url} className="w-16 mix-blend-darken"/>
            </div>

            <div className="flex justify-center items-center ">
                <ul className="flex mx-3 ">
                    <li className="px-4 ">{onlineStatus ? <span className="text-green-400" >Online</span>:<span className=" text-red-400 ">Offline</span>}</li>
                    
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to='/about'>About Us</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
                    <li className="px-4 cursor-pointer"><button onClick={()=>{
                        if (login === 'Login'){ data = 'Logout'
                        }else{data = 'Login'
                        }
                        setLogin(data)
                    }}>{login}</button></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;