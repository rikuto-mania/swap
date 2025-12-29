
interface HighlightProps{
    direction: "left"| "right";
    title:string;
    subTitle:string;
    description:string;
    image?:string;
}

export default function Highlight(props:HighlightProps){
    const isRight =props.direction === "right";
    return(
        <div className="relative py-20">
            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-[#3F3F46] -translate-x-1/2" />

            <div className="grid grid-cols-3 items-center gap-5">
                {/* 説明 */}
                <div className={`${isRight?"text-left order-3":"order-1 text-right"}`}>
                    <p className="text-3xl font-semibold">{props.title}</p>
                    <p className="text-2xl font-semibold">{props.subTitle}</p>
                    <p className="text-[14px]">{props.description}</p>
                </div>
                <div className="flex justify-center items-center order-2">
                    {/* アイコンdummy */}
                    <div className="p-5 rounded-full bg-amber-600 z-10"></div>
                </div>
                {props.image?(
                    <img src={props.image} alt="" className={`w-100 h-75 ${isRight? "order-1 justify-self-end":"order-3 justify-self-start"}`}/>
                ) : (
                    <div className={`${isRight? "order-1 justify-self-end":"order-3 justify-self-start"}`}></div>
                )}
            </div>
        </div>
    );
};


