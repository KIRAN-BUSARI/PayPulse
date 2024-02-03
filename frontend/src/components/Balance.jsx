import { useEffect, useState } from "react"
import axiosInstance from "../axiosInstance";

export const Balance = () => {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        axiosInstance.get("/accounts/getBalance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(res => {
                setBalance(res.data.balance);
            })
            .catch(err => {
                console.log(err);
            })
    }, [balance])
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance.toFixed(2)}
        </div>
    </div>
}