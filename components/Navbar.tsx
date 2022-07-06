import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { GoogleLogin, GoogleLogout } from "react-google-login"
import { AiOutlineLogout } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { IoMdAdd } from "react-icons/io"

const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
            <Link href="/">
                <div className="w-[100px] md:w-[130px]">
                    <h1 className="cursor-pointer title-font font-bold text-3xl text-[#F51997]">
                        Vidsgram.
                    </h1>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
