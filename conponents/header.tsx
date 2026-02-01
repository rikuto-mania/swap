import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Header(){
    return(
        <header className="bg-[#E8ECD7] p-4 flex justify-between w-full">
            <Image src="/headerlogo.svg" alt="Header Logo" width={147} height={52}/>
            <div className="flex items-center gap-10">
                <ul className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">About us</Link></li>
                    <li><Link href="/">Progress</Link></li>
                    <li><Link href="/">Action</Link></li>
                    <li><Link href="/">Goals</Link></li>
                </ul>
                <div className="flex items-center gap-2 bg-regentstblue px-4 py-2 rounded-lg">
                    <Icon 
                        icon="mdi:translate" 
                        width={20} 
                        className="align-middle"
                    />
                    <select name="lang" className="">
                        <option value="En">English</option>
                        <option value="Ja">日本語</option>
                        <option value="Vt">Tiếng Việt</option>
                    </select>
                </div>
            </div>
        </header>
    );
};