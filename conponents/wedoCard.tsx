import { FaBullhorn,FaHandsHelping,FaBookOpen } from "react-icons/fa";

interface cardProps{
    advocate?:boolean;
    educate?:boolean;
    collaborate?:boolean;
    title:string;
    text:string;
}

export default function WedoCard(props:cardProps){
    return(
        <div className="p-8 bg-white w-82.5 rounded-2xl">
            {props.advocate &&(
                <div className="inline-block bg-madang p-4 rounded-full">
                    <FaBullhorn size={24} color="white" />
                </div>
            )}
             {props.educate &&(
                <div className="inline-block bg-regentstblue p-4 rounded-full">
                    <FaBookOpen size={24} color="white" />
                </div>
            )}
             {props.collaborate &&(
                <div className="inline-block bg-madang p-4 rounded-full">
                    <FaHandsHelping size={36} color="white" />
                </div>
            )}
            <p className="text-2xl font-semibold">{props.title}</p>
            <p className="whitespace-pre-line">{props.text}</p>
        </div>
    );
};