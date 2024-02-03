import { Link } from "react-router-dom"
import { Appbar } from "../components/Appbar"

function Home() {
    return (
        <>
            <Appbar />
            <div className="h-[90vh] flex flex-col justify-center items-center">
                <h1 className="text-5xl text-[#0095ff] ">Welcome</h1>
                <p className="text-3xl ">PayPulse</p>
                <div className="flex">
                    <Link to={"/signup"} className="border px-4 py-2 mt-4 mr-3 bg-gray-400 rounded-lg">Signup</Link>
                    <Link to={"/signin"} className="border px-4 py-2 mt-4 bg-gray-400 rounded-lg">Signin</Link>
                </div>
            </div>
        </>
    )
}

export default Home