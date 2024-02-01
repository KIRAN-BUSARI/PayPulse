import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

export const Balance = () => {
    const [bal, setBalance] = useState(0);

    useEffect(() => {
        axiosInstance.get("/accounts/getBalance")
            .then(res => {
                console.log(res.data.account);
                setBalance(res.data.account);
            })
    }, [])
    return (
        <div className="flex">
            <div className="font-bold text-lg">
                Your balance
            </div>
            <div className="font-semibold ml-4 text-lg">
                Rs {bal}
            </div>
        </div>
    )
}