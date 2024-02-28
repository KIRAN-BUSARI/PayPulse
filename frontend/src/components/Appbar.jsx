import { useEffect, useState } from "react"
import axiosInstance from "../axiosInstance.js"
export const Appbar = () => {
    const [username, setUsername] = useState("")
    useEffect(() => {
        axiosInstance.get("/user/currentUser", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(res => {
                // console.log(res.data.user.firstName);
                setUsername(res.data.user.firstName + " " + res.data.user.lastName)
            })
    })
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 text-[#0095ff] cursor-pointer">
            PayPulse App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-3">
                Hello
            </div>
            <div className="mr-3 uppercase underline flex items-center cursor-pointer text-[#0095ff]">
                {username}
            </div>
        </div>
    </div>
}