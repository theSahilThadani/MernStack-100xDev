import { ReactNode } from "react"

export default function signinlayout({children}:Readonly<{
    children:ReactNode
}>){
    return(
        <div className="flex justify-center flex-col items-center">
            <div className="p-1 w-[50%] my-10 text-gray-100 text-center text-sm border-gray-400 bg-green-700 rounded-lg">Flat 20% off Signin Today</div>
            {children}
        </div>
    )
}