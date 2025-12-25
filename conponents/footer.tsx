import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer(){
    return(
        <footer className="bg-black w-full">
            <div className="flex flex-col lg:flex-row justify-between px-12 pt-12 pb-27.5 gap-4">
                <div>
                    <Image src="/footerLogo.svg" alt="footer Logo" width={147} height={52} className="pb-9"/>
                    <p className="text-white pb-4">Stop Waste And Plastic</p>
                    <p className="text-white">High school student-led initiative tackling plastic 
                    waste in Japanese supermarkets.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                    <div>
                        <p className="text-madang text-xl font-bold pb-4">QUICK LINKS</p>
                        <ul className="space-y-3 text-white">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Progress</li>
                            <li>Action</li>
                            <li className="pb-1">Goals</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-madang text-xl font-bold pb-4">CONTACT</p>
                        <div className="flex gap-2.5 items-center pb-5">
                            <IoMdMail  size={36} color="black" className=" bg-white p-2 rounded-full"/>
                            <p className="text-white text-[14px]">swapplastictogreen@gmail.com</p>
                        </div>
                        <div className="flex gap-2.5 items-center">
                            <FaInstagram size={36} color="black" className="bg-white p-2 rounded-full"/>
                            <p className="text-white text-[14px]"><a href="https://www.instagram.com/swapplastictogreen/">@swapplastictogreen</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="bg-[#3F3F46] w-full border"/>
            <p className="text-[12px] text-white text-center py-3">© 2024 SWAP - Stop Waste And Plastic. Made with by SWAP Team.</p>
        </footer>
    );
};