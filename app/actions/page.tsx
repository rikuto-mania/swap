import Link from "next/link";
import PageHeader from "@/conponents/pageHeader";

export default function Actions(){
    return(
        <div>
            <PageHeader 
                title = "Take Action"
                subtitle = "Join us in creating a plastic-free future. Every action counts!"
            />

            <p className="text-5xl font-bold text-main">recent activities</p>
            <div className="relative">
            <img src={"/swapActions01.png"} className="w-full h-162.5 object-cover"/>
            <div className="absolute w-1/3 inset-0 bg-black/40 flex items-end">
                <div className="text-white text-center px-4 py-30">
                    <p className="text-3xl font-semibold pb-6">taaaaaaaaaa</p>
                    <p className="font-light pb-7">We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.</p>
                    <p >read more</p>
                </div>
                
            </div>
            </div>


            <section className="bg-merino px-4 lg:px-16 py-10">
            <p className="text-main text-4xl font-bold pb-8">our activities</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mb-8">
                <Link href={"/actions"} >
                    <div className="p-2 bg-white rounded-2xl max-w-104">
                        <img src="/swapActions01.png" alt=""  className="object-cover w-full h-57.5 rounded-lg pb-5"/>
                        <p className="text-main text-xl font-semibold pb-3">タイトル</p>
                        <p className="text-[14px] line-clamp-3 wrap-break-words">We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.</p>
                    </div>
                </Link>

                <Link href={"/actions"}>
                    <div className="p-2 bg-white rounded-2xl max-w-104">
                        <img src="/swapActions01.png" alt=""  className="object-cover w-full h-57.5 rounded-lg pb-5"/>
                        <p className="text-main text-xl font-semibold pb-3">タイトル</p>
                        <p className="text-[14px] line-clamp-3 wrap-break-words">We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.</p>
                    </div>
                </Link>

                <Link href={"/actions"}>
                    <div className="p-2 bg-white rounded-2xl max-w-104">
                        <img src="/swapActions01.png" alt=""  className="object-cover w-full h-57.5 rounded-lg pb-5"/>
                        <p className="text-main text-xl font-semibold pb-3">タイトル</p>
                        <p className="text-[14px] line-clamp-3 wrap-break-words">We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.</p>
                    </div>
                </Link>

                <Link href={"/actions"}>
                    <div className="p-2 bg-white rounded-2xl max-w-104">
                        <img src="/swapActions01.png" alt=""  className="object-cover w-full h-57.5 rounded-lg pb-5"/>
                        <p className="text-main text-xl font-semibold pb-3">タイトル</p>
                        <p className="text-[14px] line-clamp-3 wrap-break-words">We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.</p>
                    </div>
                </Link>

                <Link href={"/actions"}>
                    <div className="p-2 bg-white rounded-2xl max-w-104">
                        <img src="/swapActions01.png" alt=""  className="object-cover w-full h-57.5 rounded-lg pb-5"/>
                        <p className="text-main text-xl font-semibold pb-3">タイトル</p>
                        <p className="text-[14px] line-clamp-3 wrap-break-words">We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.</p>
                    </div>
                </Link>

                <Link href={"/actions"}>
                    <div className="p-2 bg-white rounded-2xl max-w-104">
                        <img src="/swapActions01.png" alt=""  className="object-cover w-full h-57.5 rounded-lg pb-5"/>
                        <p className="text-main text-xl font-semibold pb-3">タイトル</p>
                        <p className="text-[14px] line-clamp-3 wrap-break-words">We've partnered with Toyonaka City Hall's environmental department to promote sustainable practices and reduce plastic waste at the municipal level. This collaboration helps us reach a wider audience and implement policy changes.</p>
                    </div>
                </Link>                   
            </div>

            <div className="text-center">
                <Link href={"/"} className="bg-main text-white py-4 px-20 rounded-full">show more</Link>
            </div>
            </section>
        </div>
    );
};  