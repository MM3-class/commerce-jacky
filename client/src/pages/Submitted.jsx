import { Check2Circle } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { useEffect } from "react"

const Submitted = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({top: 90})
    })
    
    return (
        <div className="text-center lg:my-10 my-4 space-y-3">
            <Check2Circle className="text-green-600 lg:text-[400px] md:text-[200px] text-[100px] m-auto" />
            <h1 className="lg:text-4xl text-green-600">Your Order Placed Successful</h1>
            <Button onClick={() => navigate('/')} className="px-8 py-2 border bg-green-600 text-white rounded-lg active:bg-green-400">Go to Home</Button>
        </div>
    )
}

export default Submitted