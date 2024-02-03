import axios from "axios"
import { toast } from "react-hot-toast"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axiosInstance from "../axiosInstance"

export const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox onChange={e => { setEmail(e.target.value) }} placeholder="kiran@gmail.com" label={"Email"} />
                    <InputBox onChange={e => { setPassword(e.target.value) }} placeholder="123456" label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={async () => {
                            // const res = await axios.post("http://localhost:8001/api/v1/user/signin", {
                            //     email,
                            //     password
                            // });
                            let res = axiosInstance.post("/user/signin", {
                                email,
                                password
                            })

                            await toast.promise(res, {
                                loading: "Signing in.....",
                                success: "Signed in successfully..!🥳",
                                error: "Error signing in..."
                            })
                            res = await res
                            localStorage.setItem("token", res.data.token)
                            navigate("/dashboard")
                        }} label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    )
}